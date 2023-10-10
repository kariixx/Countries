import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <main id="main">
      <div className="container">
        <div className="main__wrap">
          <div className="main__info">
            <h1 className="main__title">Насладись прогулкой</h1>
            <h2 className="main__subtitle">Мы поможем вам отыскать идеальное направление для путешествия в различных странах мира.</h2>
            <a className='main__button' href={'#apply'}>ПОДАТЬ ЗАЯВКУ</a>
          </div>
        </div>
      </div>
    </main>
  );
}
