import React from 'react';
import SpellCard from '../components/SpellCard';

function Available() {
  return (
    <main className="main">
      <section id="available-spells" className="spells-section">
        <h2>Available Spells</h2>
        <p>These spells are available for you to learn and prepare.</p>
        <div className="spell-cards-wrapper">
          <SpellCard 
            book="Книга Чарів / Захист /"
            title="Магічний щит"
            description="Створити магічний щит для захисту."
            castingTime="Реакція"
            duration="1 раунд"
            target="Себе"
            savingThrow="Ні"
            area="ОСОБА"
            range="Особа"
            cost="1× ЧАРУНКИ"
          />
          <SpellCard 
            book="Книга Чарів / Лікування /"
            title="Вилікування"
            description="Вилікувати рани істоти."
            castingTime="Основна дія"
            duration="Миттєво"
            target="Істота"
            savingThrow="Ні"
            area="ОДНА ЦІЛЬ"
            range="Дотик"
            cost="2× ЧАРУНКИ"
          />
          <SpellCard 
            book="Книга Чарів / Розпізнання /"
            title="Значення магії"
            description="Визначити магію, що присутня в місцевості."
            castingTime="Основна дія"
            duration="10 хв"
            target="Точка на відстані"
            savingThrow="Ні"
            area="СФЕРА 30 ФУТІВ"
            range="120 ФУТІВ"
            cost="1× ЧАРУНКИ"
          />
        </div>
      </section>
    </main>
  );
}

export default Available;
