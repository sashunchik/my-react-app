import React from 'react';
import '../styles/SpellCard.css';

function SpellCard({
  book = 'Книга Чарів / З\'явлення /',
  title = 'Слизьке мастило',
  description = 'Зробити невелику область слизькою та жирною.',
  castingTime = 'Основна дія',
  duration = '1 хв',
  target = 'Точка на відстані',
  savingThrow = 'Спритність 12',
  area = 'КВАДРАТ 10 ФУТІВ',
  range = '60 ФУТІВ',
  cost = '1× ЧАРУНКИ',
  qrImage = 'qr.png'
}) {
  return (
    <div className="spell-card">
      <div className="header">
        <div className="book">{book}</div>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>

      <div className="stats">
        <div className="row">
          <div>Час касту</div>
          <div>{castingTime}</div>
        </div>
        <div className="row">
          <div>Тривалість</div>
          <div>{duration}</div>
        </div>
        <div className="row">
          <div>Ціль</div>
          <div>{target}</div>
        </div>
        <div className="row">
          <div>Випробування</div>
          <div>{savingThrow}</div>
        </div>
      </div>

      <div className="area">
        <div className="row">
          <div>ОБЛАСТЬ</div>
          <div>{area}</div>
        </div>
        <div className="row">
          <div>ДАЛЬНІСТЬ</div>
          <div>{range}</div>
        </div>
      </div>

      <div className="footer">
        <div className="cost">{cost}</div>
        <div className="qr">
          <img src={qrImage} alt="QR Code" />
        </div>
      </div>
    </div>
  );
}

export default SpellCard;
