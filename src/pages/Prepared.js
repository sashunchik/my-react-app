import React from 'react';
import SpellCard from '../components/SpellCard';

function Prepared() {
  return (
    <main className="main">
      <section id="prepared-spells" className="spells-section">
        <h2>Prepared Spells</h2>
        <p>These are the spells you have ready to cast today.</p>
        <div className="spell-cards-wrapper">
          <SpellCard 
            book="Книга Чарів / З'явлення /"
            title="Слизьке мастило"
            description="Зробити невелику область слизькою та жирною."
            castingTime="Основна дія"
            duration="1 хв"
            target="Точка на відстані"
            savingThrow="Спритність 12"
            area="КВАДРАТ 10 ФУТІВ"
            range="60 ФУТІВ"
            cost="1× ЧАРУНКИ"
          />
          <SpellCard 
            book="Книга Чарів / Магія /"
            title="Магічна стріла"
            description="Випустити магічні стріли в ціль."
            castingTime="Основна дія"
            duration="Миттєво"
            target="Істота або об'єкт"
            savingThrow="Спритність 10"
            area="ОДНА ЦІЛЬ"
            range="120 ФУТІВ"
            cost="1× ЧАРУНКИ"
          />
        </div>
      </section>
    </main>
  );
}

export default Prepared;
