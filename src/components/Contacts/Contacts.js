import React, { useState } from 'react';
import './Contacts.css'; // Import your external CSS file

export default function Contacts() {
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('');

  const bot = {
    TOKEN: '6327601877:AAFsSYWDSu8rqq0024zuvoxfkEbdy7e6Hhc',
    chatId: '-992186314',
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (message && number) {
      const telegramMessage = `Имя: ${message} Номер: ${number}`;
      const Telegram_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${encodeURIComponent(
        telegramMessage
      )}`;

      fetch(Telegram_API)
        .then((response) => {
          if (response.ok) {
            
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('Not Validated');
    }
  };

  return (
    <section id="apply" className="contacts-section">
      <div className="container">
        <div className="row gy-5 ">
          <h2 className='tittlele'>Не знаете куда поехать?</h2>
          <div className='box'>
          
          <div className="contacts__one">
            <div>
              <p className="text1"> Заполните заявку! </p>
              <div className="contacts_form">
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="input-field"
                    placeholder="ФИО"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <input
                    className="input-field"
                    type="number"
                    placeholder="Номер телефона"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <button className="contacts_btn" type="submit">
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
