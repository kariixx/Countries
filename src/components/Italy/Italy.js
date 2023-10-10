import React, { useState } from 'react';
import './Italy.css';
import Sardinya from '../../assets/is-sicily-safe.jpg'
import Venet from '../../assets/venetsiya_2.jpg'
import Bari from '../../assets/Bari_1.jpg'
import Leche from '../../assets/leche.jpg'


export default function Italy() {
    const [activePanel, setActivePanel] = useState(null);
  
    const togglePanel = (panelIndex) => {
      if (activePanel === panelIndex) {
        setActivePanel(null);
      } else {
        setActivePanel(panelIndex);
      }
    };

    
  const panelData = [
    {
      title: 'Сардиния и Сицилия',
      img: Sardinya,
      info: 'Среди множества морских курортов Италии, Сицилия и Сардиния стоят обиняком. Два крупнейших итальянских острова (безусловно из наиболее интересных направлений для отдыха в Италии), привлекают, в основном, путешественников уже искушённых, хорошо знакомых с курортами материковой Италии, будь то Портофино, Форте деи Марми или Римини, и желающих попробовать что-то новое, более «далёкое» и экзотическое.'
    },
    {
      title: 'Венеция',
      img: Venet,
      info: 'Венеция — самый романтичный уголок Европы, расположенный на северном побережье Адриатического моря в Италии. Величественная архитектура, неповторимая атмосфера свободы и легкости, оживленные лабиринты улиц – все это создает уникальный ансамбль, который обязательно нужно увидеть, услышать, ощутить. Большая часть «города на воде» расположена на островах в Венецианской лагуне, которые соединены между собой огромным количеством мостов.'
    },
    {
      title: 'Бари',
      img: Bari,
      info: 'Бари – это город, где покоятся мощи Николая Чудотворца. К ним съезжаются паломники со всего мира. Туристов из России так много, что его даже называют «русским городом». В Бари также можно увидеть средневековые замки, стены, старый форт. Шарм городу придают узкие извилистые улочки, песчаные пляжи Адриатического моря (Mare Adriatico).'
    },
    {
        title: 'Лечче',
        img: Leche,
        info: 'Город в регионе Апулия, известный своей архитектурой в стиле барокко и красивыми пляжами.'
      },
    
  ];

  return (
    <section id="italy" className="italy-fon">
      <div className="container">
      <h2 className='name'>Italy</h2>
        <div className="accordion">
          {panelData.map((panel, index) => (
            <div className="panel" key={index}>
              <div
                className={`panel-ttitle ${activePanel === index ? 'active' : ''}`}
                onClick={() => togglePanel(index)}
              >
                {panel.title}
              </div>
              {activePanel === index && (
                <div className="panel-content">
                  <div className="panel-content-wrapper">
                    <img src={panel.img} alt={panel.title} />
                    <p>{panel.info}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}