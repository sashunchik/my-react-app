import React from 'react';

function MoreInfo() {
  return (
    <main className="main">
      <section id="more-info" className="info-section">
        <h2>More Information</h2>
        
        <div className="info-content">
          <h3>About Magic Spells</h3>
          <p>
            Magic is an ancient art that has been practiced for millennia. Spellcasting requires knowledge, 
            practice, and dedication. Each spell has unique requirements and effects that must be carefully understood 
            before attempting to cast them.
          </p>

          <h3>Spell Slots</h3>
          <p>
            A spell slot represents the magical energy available to cast spells. As a spellcaster gains experience,
            they gain access to more and higher-level spell slots. Spell slots refresh after a long rest.
          </p>
          <ul className="info-list">
            <li><strong>1st-level slots:</strong> For beginner spells with basic effects</li>
            <li><strong>2nd-level slots:</strong> For spells with moderate power</li>
            <li><strong>3rd-level slots:</strong> For powerful spells requiring more concentration</li>
            <li><strong>4th-level slots:</strong> For very powerful spells with significant effects</li>
            <li><strong>5th-level slots:</strong> For legendary spells of immense power</li>
          </ul>

          <h3>Spell Components</h3>
          <p>
            Most spells require components to cast. Components can be verbal (spoken words), somatic (gestures),
            or material (physical objects). Some spells require a combination of these components.
          </p>

          <h3>Spell Schools</h3>
          <ul className="info-list">
            <li><strong>Abjuration:</strong> Spells of protection and warding</li>
            <li><strong>Conjuration:</strong> Spells that create or summon things</li>
            <li><strong>Divination:</strong> Spells of knowledge and foresight</li>
            <li><strong>Enchantment:</strong> Spells that influence minds</li>
            <li><strong>Evocation:</strong> Spells of elemental damage and energy</li>
            <li><strong>Illusion:</strong> Spells that create false images</li>
            <li><strong>Necromancy:</strong> Spells dealing with life and death</li>
            <li><strong>Transmutation:</strong> Spells that transform matter and energy</li>
          </ul>

          <h3>Tips for Spellcasters</h3>
          <ol className="info-list">
            <li>Always plan your spell choices before a long rest</li>
            <li>Consider the tactical situation before casting a spell</li>
            <li>Remember that some spells require concentration</li>
            <li>Keep track of your remaining spell slots throughout the day</li>
            <li>Practice regularly to improve your spellcasting abilities</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default MoreInfo;
