import React, { useState } from 'react';
import './Kyrgyzstan.css';
import Kelsuu from '../../assets/kelsuu.jpg'
import Kan from '../../assets/kan.jpg'
import Too from '../../assets/original.jpg'
import Caravan from '../../assets/caravan.jpg'

export default function Kyrgyzstan() {
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
      title: '«Кель-суу»',
      img: Kelsuu,
      info: 'Озеро Кель-Суу (Кельсуу) является одним из самых красивых озёр в Кыргызстане. Кель-Суу расположено в Аксайской долине Нарынской области. Озеро, которое находится на высоте 3500 метров над уровнем моря, появилось после схода оползня в 1980-е годы. Образовавшаяся чаша – ограниченная с одной стороны отвесными скалами, с другой горой Сары-Белес – стала наполняться в результате таяния ледников.'
    },
    {
      title: '«Сказка»',
      img: Kan,
      info: 'Каньон расположен в одноименном ущелье и знаменит красными глиняными скалами. Ветер годами шлифовал здесь природные и сказочные скульптуры. Скалы напоминают замки, башни, чудовищ, великанов, людей и животных. И все это создано природой, а не руками людей.'
    },
    {
      title: ' «Сулайман-Тоо»',
      img: Too,
      info: 'Гора Сулайман-Тоо является первым в Кыргызстане памятником Всемирного наследия ЮНЕСКО.С давних времен Сулайман-Тоо является священным местом для мусульман, и сюда приезжает множество паломников. В настоящее время сама гора и находящиеся на ней сооружения, многие из которых построены несколько веков тому назад, входят в состав историко-архитектурного комплекса.'
    },
    {
        title: '«Таш-Рабат»',
        img: Caravan,
        info: ' Историческая каравансерайская станция на Великом Шелковом Пути. Это интересное место для изучения истории торговли и культурного обмена. Кыргызские скотоводы и охотники считали эту каменную постройку весьма необычным сооружением и связывали с ней свои старинные легенды.'
      },
    
  ];

  return (
    <section id="kyrgyzstan" className="section-red-bg">
      <div className="container">
        <h2 className='name'>Kyrgyzstan</h2>
        <div className="accordion">
          {panelData.map((panel, index) => (
            <div className="panel" key={index}>
              <div
                className={`panel-title ${activePanel === index ? 'active' : ''}`}
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


