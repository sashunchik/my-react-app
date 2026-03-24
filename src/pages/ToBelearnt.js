import React from 'react';
import SpellCard from '../components/SpellCard';

function ToBelearnt() {
  return (
    <main className="main">
      <section id="to-learn-spells" className="spells-section">
        <h2>Spells To Be Learnt</h2>
        <p>These are advanced spells you can aspire to learn in the future.</p>
        <div className="spell-cards-wrapper">
          <SpellCard 
            book="Книга Чарів / Стихія /"
            title="Куля вогню"
            description="Створити вибух вогню в певній області."
            castingTime="Основна дія (1 раунд))"
            duration="Миттєво"
            target="Точка на відстані"
            savingThrow="Спритність 15"
            area="СФЕРА 20 ФУТІВ"
            range="150 ФУТІВ"
            cost="3× ЧАРУНКИ"
          />
          <SpellCard 
            book="Книга Чарів / Трансформація /"
            title="Полібіоморфізм"
            description="Трансформувати істоту на іншу форму."
            castingTime="Основна дія"
            duration="1 година"
            target="Істота"
            savingThrow="Воля 16"
            area="ОДНА ЦІЛЬ"
            range="30 ФУТІВ"
            cost="4× ЧАРУНКИ"
          />
          <SpellCard 
            book="Книга Чарів / Часова магія /"
            title="Спинення часу"
            description="Зупинити плин часу в малій галузі."
            castingTime="Основна дія"
            duration="1 раунд"
            target="Область"
            savingThrow="Воля 18"
            area="КУБА 60 ФУТІВ"
            range="100 ФУТІВ"
            cost="5× ЧАРУНКИ"
          />
        </div>
      </section>
    </main>
  );
}

export default ToBelearnt;
