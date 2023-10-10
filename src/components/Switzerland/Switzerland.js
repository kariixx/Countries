import React, { useState } from 'react';
import './Switzerland.css';
import Surih from '../../assets/cfad.jpg'
import Zhenova from '../../assets/zheneva_1.jpg'
import Lusern from '../../assets/lusern.jpg'
import Inter from '../../assets/inter.jpg'


export default function Switzerland() {
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
      title: 'Цюрих',
      img: Surih ,
      info: 'Это крупнейший город Швейцарии, известный своей архитектурой, искусством и культурой. Вы можете прогуляться по набережной озера Цюрих, посетить множество музеев и художественных галерей, а также насладиться богатой ресторанной сценой.'
    },
    {
      title: 'Женева',
      img: Zhenova,
      info: 'Этот город известен своим международным влиянием, наличием множества мировых организаций, а также красивым озером Женевским. Посетите символ города — Фонтан Женевы, исследуйте старый город и посетите ООН.'
    },
    {
      title: 'Люцерн',
      img: Lusern,
      info: 'Милый город на берегу озера Люцерн, окруженный горами. Здесь вы найдете красивую архитектуру, мост Шпитальбрюкке, а также возможность подняться на гору Пилатус или Риги для захватывающих видов.'
    },
    {
        title: 'Интерлакен',
        img: Inter,
        info: 'Интерлакен: Расположенный между озерами Тун и Бриенц, этот город стал популярным местом для туристов, предпочитающих активный отдых, такой как горные походы, парапланеризм, велосипедные прогулки и многое другое.'
      },
    
  ];

  return (
    <section id="switzerland" className="switzerland-fon">
      <div className="container">
        <h2 className='name'>Switzerland</h2>
        <div className="accordion">
          {panelData.map((panel, index) => (
            <div className="panel" key={index}>
              <div
                className={`panel-titlle ${activePanel === index ? 'active' : ''}`}
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