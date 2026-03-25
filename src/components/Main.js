import React from 'react';
import '../styles/Main.css';
import SpellCard from './SpellCard';

function Main() {
  const incantations = [
    {
      title: 'Abra Kadabra',
      description: 'A classic incantation used to invoke magical effects.'
    },
    {
      title: 'Hocus Pocus',
      description: 'A playful incantation often used in children\'s magic shows.'
    }
  ];

  return (
    <main className="main">
      <section id="spells" className="spells-section">
        <h2>Spells</h2>
        <div className="spell-cards-wrapper">
          <SpellCard />
          <SpellCard />
        </div>
      </section>
      
      <section id="incantations" className="incantations-section">
        <h2>Incantations</h2>
        <ul className="incantations-list">
          {incantations.map((incantation, index) => (
            <li key={index}>
              <div className="incantation">
                <h3>{incantation.title}</h3>
                <p>{incantation.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
