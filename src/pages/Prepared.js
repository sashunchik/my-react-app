import React, { useEffect, useState } from 'react';
import SpellCard from '../components/SpellCard';
import supabase from '../utils/supabaseClient';

function Prepared() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPreparedSpells = async () => {
      setLoading(true);
      setError(null);

      // First, get prepared spell ids from user_spells.
      const { data: userSpells, error: userSpellsError } = await supabase
        .from('user_spells')
        .select('spell_id')
        .eq('is_prepared', true);

      if (userSpellsError) {
        setError(userSpellsError.message);
        setLoading(false);
        return;
      }

      const spellIds = (userSpells || []).map((row) => row.spell_id);
      if (spellIds.length === 0) {
        setSpells([]);
        setLoading(false);
        return;
      }

      const { data: spellData, error: spellsError } = await supabase
        .from('spells')
        .select('*')
        .in('id', spellIds);

      if (spellsError) {
        setError(spellsError.message);
      } else {
        setSpells(spellData || []);
      }

      setLoading(false);
    };

    fetchPreparedSpells();
  }, []);

  if (loading) {
    return (
      <main className="main">
        <section id="prepared-spells" className="spells-section">
          <h2>Prepared Spells</h2>
          <p>Loading prepared spells...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main">
        <section id="prepared-spells" className="spells-section">
          <h2>Prepared Spells</h2>
          <p style={{ color: 'red' }}>Error: {error}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="main">
      <section id="prepared-spells" className="spells-section">
        <h2>Prepared Spells</h2>
        <p>These are the spells you have ready to cast today.</p>
        <div className="spell-cards-wrapper">
          {spells.length === 0 ? (
            <p>No prepared spells found.</p>
          ) : (
            spells.map((spell) => (
              <SpellCard
                key={spell.id}
                book={`Книга Чарів / ${spell.school || 'Unknown'} /`}
                title={spell.name}
                description={spell.description}
                castingTime={spell.castingTime || '—'}
                duration={spell.duration || '—'}
                target={spell.target || '—'}
                savingThrow={spell.savingThrow || '—'}
                area={spell.area || '—'}
                range={spell.range || '—'}
                cost={spell.cost || '—'}
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Prepared;
