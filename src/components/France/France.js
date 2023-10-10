import React, { useState } from 'react';
import './France.css';
import Monsen from '../../assets/monsen.jpg'
import Paris from '../../assets/paris.jpg'
import Karka from '../../assets/Каркассон.jpg'
import Marsel from '../../assets/Marselya.jpg'


export default function France() {
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
      title: 'Мон-Сен-Мишель',
      img: Monsen,
      info: '(Мон Сен-Мишель) — знаменитый остров-крепость, расположенный в Нижней Нормандии, на севере Франции, на границе с Бретанью. Это одна из самых посещаемых достопримечательностей Франции, а сам остров с исторической застройкой внесен в список памятников Всемирного наследия ЮНЕСКО.'
    },
    {
      title: 'Париж',
      img: Paris,
      info: 'Очевидно, стоит начать с столицы Франции. Посетите Эйфелеву башню, Лувр, Нотр-Дам, Монмартр и другие исторические и культурные достопримечательности.Исторический центр, образованный островом Сите и обоими берегами Сены, складывался на протяжении веков. Во второй половине XIX века претерпел коренную реконструкцию. В пригороде расположен дворцово-парковый ансамбль Версаль.'
    },
    {
      title: 'Каркасон',
      img: Karka,
      info: 'Каркасон — французская коммуна, расположенная в департаменте Од на территории региона Окситания. Город Каркассон является префектурой департамента.Эта средневековая крепость впечатлит вас своей уникальной архитектурой'
    },
    {
        title: 'Марсель',
        img: Marsel,
        info: 'Марсель богат архитектурными памятниками — это Базилика Нотр-Дам-де-ла-Гард с 11-метровой статуей Богоматери, оживленный в любое время дня и ночи Старый порт, знаменитый Замок Иф, где происходили действия приключенческого романа Александра Дюма “Граф Монте-Кристо”.'
      },
    
  ];

  return (
    <section id="france" className="france-fon">
      <div className="container">
        <h2 className='name'>France</h2>
        <div className="accordion">
          {panelData.map((panel, index) => (
            <div className="panel" key={index}>
              <div
                className={`panel-titlee ${activePanel === index ? 'active' : ''}`}
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
