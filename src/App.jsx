 import React, { useState } from "react";
import "./style.css";

import logo from "./assets/Navis-mobile/Logo.png";
import flag from "./assets/Navis-mobile/flag.png";
import wallet from "./assets/Navis-mobile/wallet.jpg";
import news1 from "./assets/Navis-mobile/news1.png";
import news2 from "./assets/Navis-mobile/news2.png";
import news3 from "./assets/Navis-mobile/news3.png";
import news4 from "./assets/Navis-mobile/news4.png";
import news5 from "./assets/Navis-mobile/news5.png";

function App() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="App">
      {/* Шапка */}
      <header className="header">
        <div className="container header__inner">
          <div className="logo">
            <img src={logo} alt="Navis Asset" />
            <span className="logo-text">Navis Asset</span>
          </div>
          <nav className="nav">
            <a href="#">Услуги</a>
            <a href="#">Прайс</a>
            <a href="#">Отзывы</a>
            <a href="#">О нас</a>
            <a href="#">Контакты</a>
          </nav>
          <div className="header__actions">
            <div className="lang-select">
              <img src={flag} alt="Флаг России" />
              <span>РУС</span>
              <span className="arrow">⌄</span>
            </div>
            <button className="btn btn-black">Начать</button>
          </div>
        </div>
      </header>

      {/* Главный экран */}
      <main className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>Простое и прозрачное восстановление кошелька</h1>
            <p>Самый простой способ восстановить свой потерянный пароль от кошелька и расследовать обманутую криптовалюту.</p>
            <div className="hero__buttons">
              <button className="btn btn-red">Оставить заявку</button>
              <button className="btn btn-ghost">Подробнее</button>
            </div>
          </div>
          <div className="hero__image">
            <img src={wallet} alt="Кошелек" />
          </div>
        </div>
      </main>

      {/* Партнеры */}
      <section className="partners">
        <div className="container">
          <div className="partners__logos">
            <span className="partner-text">МАНАС</span>
            <span className="partner-text">Газпром</span>
            <span className="partner-text">KYRCYZ AERONAVIGASIA</span>
            <span className="partner-text">MMC</span>
            <span className="partner-text">Пятый партнер</span>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="advantages">
        <div className="container">
          <h2>Почему выбирают Navis Asset?</h2>
          <div className="advantages__grid">
            <div className="advantage-card">
              <span className="advantage-card__number">01</span>
              <h3>Восстановим ваш заблокированный кошелёк</h3>
              <p>Наша панель пользователя позволяет вам загружать данные в любое время.</p>
            </div>
            <div className="advantage-card">
              <span className="advantage-card__number">02</span>
              <h3>Ваш кошелёк будет защищен воздушной прослойкой</h3>
              <p>Гарантируем, что резервная копия зашифрованного кошелька будет храниться в сервере.</p>
            </div>
            <div className="advantage-card">
              <span className="advantage-card__number">03</span>
              <h3>Ваш забытый пароль будет восстановлен</h3>
              <p>Наша панель пользователя позволяет вам загружать данные в любое время.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="services">
        <div className="container">
          <h2>Мы поможем вам, если</h2>
          <div className="services__grid">
            <div className="service-card service-card--red">
              <div className="service-icon"><span className="icon-symbol">⚿</span></div>
              <h3>Если ваш пароль не работает</h3>
              <p>Вы думали, что знаете свой пароль, но теперь он не разблокирует ваш кошелек.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><span className="icon-symbol">💬</span></div>
              <h3>Частичное восстановление исходной фразы</h3>
              <p>Вы записали список слов, а парольная фраза – это некая комбинация этих слов.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><span className="icon-symbol">✕</span></div>
              <h3>Потеряли доступ к кошельку крупной сети</h3>
              <p>Вы потеряли доступ к обычному криптоактиву, такому как Bitcoin, Ethereum, Litecoin.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><span className="icon-symbol">🛡️</span></div>
              <h3>Вас обманули мошенники</h3>
              <p>Мы предлагаем услуги по розыску (а не по взысканию) для тех, кто хочет раскрыть личность мошенника.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Вопрос-Ответ) */}
      <section className="faq-page" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '40px', color: '#333' }}>Ответы на часто задаваемые вопросы</h1>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div onClick={() => toggleFaq(0)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                <span>Как это все работает?</span>
                <span style={{ backgroundColor: '#e74c3c', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  {openFaq === 0 ? "−" : "+"}
                </span>
              </div>
              {openFaq === 0 && (
                <div style={{ padding: '0 20px 20px 20px', color: '#666', lineHeight: '1.6' }}>
                  Методы, которые мы используем для восстановления учетных записей наших клиентов, сильно различаются в зависимости от конкретного случая.
                </div>
              )}
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div onClick={() => toggleFaq(1)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                <span>Я должен ли вам сказать свой пароль полностью?</span>
                <span style={{ backgroundColor: '#e74c3c', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  {openFaq === 1 ? "−" : "+"}
                </span>
              </div>
              {openFaq === 1 && (
                <div style={{ padding: '0 20px 20px 20px', color: '#666', lineHeight: '1.6' }}>
                  Нет, вы не обязаны сообщать нам свой полный пароль. Мы можем работать с частичной информацией.
                </div>
              )}
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <div onClick={() => toggleFaq(2)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                <span>Сколько времени занимает восстановление кошелька?</span>
                <span style={{ backgroundColor: '#e74c3c', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  {openFaq === 2 ? "−" : "+"}
                </span>
              </div>
              {openFaq === 2 && (
                <div style={{ padding: '0 20px 20px 20px', color: '#666', lineHeight: '1.6' }}>
                  Восстановление обычно занимает от 3 до 7 рабочих дней в зависимости от сложности случая.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Новости */}
      <section className="news">
        <div className="container">
          <h2>Новости</h2>
          <div className="news__grid">
            <div className="news__main">
              <img src={news1} alt="Новости" />
              <h3>Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты</h3>
              <p>11.06.2024 12:30</p>
              <button className="btn btn-ghost">Подробнее</button>
            </div>
            <div className="news__list">
              <div className="news__item">
                <img src={news2} alt="Новости" />
                <div>
                  <h3>Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты</h3>
                  <p>11.06.2024 12:30</p>
                </div>
              </div>
              <div className="news__item">
                <img src={news3} alt="Новости" />
                <div>
                  <h3>Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты</h3>
                  <p>11.06.2024 12:30</p>
                </div>
              </div>
              <div className="news__item">
                <img src={news4} alt="Новости" />
                <div>
                  <h3>Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты</h3>
                  <p>11.06.2024 12:30</p>
                </div>
              </div>
              <div className="news__item">
                <img src={news5} alt="Новости" />
                <div>
                  <h3>Команда отец-сын говорит, что им удалось восстановить $6 млн утраченной криптовалюты</h3>
                  <p>11.06.2024 12:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Оранжевый баннер */}
      <section className="cta">
        <div className="container">
          <div className="cta__inner">
            <div className="cta__text">
              <h2>Ваши деньги<br />обратно в вашем<br />кармане!</h2>
            </div>
            <div className="cta__image">
              <div className="wallet-3d">
                <div className="wallet-coin">₿</div>
              </div>
            </div>
            <div className="cta__right">
              <p>Возьми свои финансы снова под контроль. Нажми на "Оставить заявку", чтобы получить помощь.</p>
              <button className="btn btn-white">Оставить заявку</button>
            </div>
          </div>
        </div>
      </section>

      {/* Форма обратной связи (НОВАЯ) */}
      <section style={{ padding: '60px 0', backgroundColor: '#fff' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Остались вопросы?</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>Оставьте свои данные, и мы свяжемся с вами в ближайшее время.</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Ваше имя" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }} />
            <input type="tel" placeholder="Ваш телефон" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px' }} />
            <button type="button" className="btn btn-red" style={{ padding: '15px', fontSize: '18px', cursor: 'pointer' }}>Отправить заявку</button>
          </form>
        </div>
      </section>

      {/* Подвал */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__col footer__col--wide">
              <div className="footer__logo">
                <img src={logo} alt="Navis Asset" />
                <span className="footer__logo-text">Navis<br />Asset</span>
              </div>
              <p className="footer__desc">Это международный сервис, где вам быстро и надежно восстановят ваш забытый криптокошелёк</p>
              <p className="footer__email">NAVISASSET@MAIL.COM</p>
            </div>
            <div className="footer__col">
              <h3>Основное</h3>
              <a href="#">О нас</a>
              <a href="#">Контакты</a>
              <a href="#">Партнеры</a>
              <a href="#">Почему NavisAsset?</a>
            </div>
            <div className="footer__col">
              <h3>Пользователям</h3>
              <a href="#">Услуги</a>
              <a href="#">Отзывы</a>
              <a href="#">Прайс</a>
              <a href="#">Новости</a>
            </div>
            <div className="footer__col">
              <h3>Мы в соцсетях</h3>
              <div className="footer__socials" style={{ display: 'flex', gap: '10px' }}>
                <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#25D366', color: 'white', borderRadius: '50%', textDecoration: 'none', fontWeight: 'bold' }}>WA</a>
                <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#0088cc', color: 'white', borderRadius: '50%', textDecoration: 'none', fontWeight: 'bold' }}>TG</a>
                <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#E1306C', color: 'white', borderRadius: '50%', textDecoration: 'none', fontWeight: 'bold' }}>IG</a>
                <a href="#" className="social-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', backgroundColor: '#000000', color: 'white', borderRadius: '50%', textDecoration: 'none', fontWeight: 'bold' }}>TT</a>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© 2024 NavisAsset. Все права защищены</p>
            <p>Made with <span className="heart">❤</span> by <span className="navis-dev">NavisDevs</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;