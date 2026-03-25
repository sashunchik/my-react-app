import React, { useEffect, useState } from 'react';
import SpellCard from '../components/SpellCard';
import supabase from '../utils/supabaseClient';

function Available() {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpells = async () => {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from('spells')
        .select('*');

      if (fetchError) {
        setError(fetchError.message);
      } else {
        setSpells(data || []);
      }

      setLoading(false);
    };

    fetchSpells();
  }, []);

  if (loading) {
    return (
      <main className="main">
        <section id="available-spells" className="spells-section">
          <h2>Available Spells</h2>
          <p>Loading spells...</p>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main">
        <section id="available-spells" className="spells-section">
          <h2>Available Spells</h2>
          <p style={{ color: 'red' }}>Error: {error}</p>
        </section>
      </main>
    );
  }

  return (
    <main className="main">
      <section id="available-spells" className="spells-section">
        <h2>Available Spells</h2>
        <p>These spells are available for you to learn and prepare.</p>
        <div className="spell-cards-wrapper">
          {spells.length === 0 ? (
            <p>No spells found.</p>
          ) : (
            spells.map((spell) => (
              <SpellCard
                key={spell.id}
                book={`Книга Чарів / ${spell.school || 'Unknown'} /`}
                title={spell.name}
                description={spell.description}
                castingTime="—"
                duration="—"
                target="—"
                savingThrow="—"
                area="—"
                range="—"
                cost="—"
              />
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default Available;
