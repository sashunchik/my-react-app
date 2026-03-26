import spells from '../data/spells.json';
import userSpells from '../data/user_spells.json';

const db = {
  spells,
  user_spells: userSpells,
};

const clone = (obj) => JSON.parse(JSON.stringify(obj));

const buildQuery = (table) => {
  let rows = clone(db[table] || []);

  const applySelect = (columns) => {
    if (!columns || columns === '*') return rows;

    const cols = columns.split(',').map((x) => x.trim());
    return rows.map((row) => {
      const item = {};
      cols.forEach((col) => {
        if (row.hasOwnProperty(col)) {
          item[col] = row[col];
        }
      });
      return item;
    });
  };

  const builder = {
    select(columnSpec) {
      rows = applySelect(columnSpec);
      return this;
    },
    eq(column, value) {
      rows = rows.filter((row) => row[column] === value);
      return this;
    },
    in(column, values) {
      rows = rows.filter((row) => values.includes(row[column]));
      return this;
    },
    order() {
      return this;
    },
    limit() {
      return this;
    },
    then(resolve, reject) {
      try {
        resolve({ data: rows, error: null });
      } catch (err) {
        if (reject) reject(err);
      }
    },
    catch(fn) {
      return Promise.resolve({ data: rows, error: null }).catch(fn);
    },
  };

  return builder;
};

const supabase = {
  from(table) {
    if (!db[table]) {
      return {
        select: async () => ({ data: null, error: new Error(`Table '${table}' not found`) }),
        then: (resolve) => resolve({ data: null, error: new Error(`Table '${table}' not found`) }),
      };
    }
    return buildQuery(table);
  },
};

export default supabase;
