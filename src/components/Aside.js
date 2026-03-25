import React from 'react';
import '../styles/Aside.css';

function Aside() {
  return (
    <aside className="aside">
      <div className="aside-content">
        <h2>slots</h2>
        <p>In the world of magic, slots are a crucial aspect of spellcasting. They represent the limited number of spells a caster can prepare and use in a given day. Each spell requires a specific slot level, which determines the power and effectiveness of the spell. For example, a 1st-level spell would require a 1st-level slot, while a more powerful 5th-level spell would require a 5th-level slot. Casters must carefully manage their slots to ensure they have the right spells available for different situations.</p>
        <ul className="aside-menu">
          <li>1st-level slot: Can prepare and cast 1st-level spells.</li>
          <li>2nd-level slot: Can prepare and cast 2nd-level spells.</li>
          <li>3rd-level slot: Can prepare and cast 3rd-level spells.</li>
          <li>4th-level slot: Can prepare and cast 4th-level spells.</li>
          <li>5th-level slot: Can prepare and cast 5th-level spells.</li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
