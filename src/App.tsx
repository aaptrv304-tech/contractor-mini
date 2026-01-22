import { useState, useEffect } from 'react';

function App() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if ((window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      tg.expand();

      // Убираем стандартные отступы Telegram, если есть
      document.body.style.margin = '0';
      document.body.style.padding = '0';
      document.body.style.backgroundColor = tg.themeParams.bg_color || '#ffffff';
    }
  }, []);

  const handleLogin = () => {
    if (phone && password) {
      alert(`Вход для ${phone}...`);
    } else {
      alert('Заполните все поля');
    }
  };

  return (
    <div
  style={{
    width: '100%',
    maxWidth: '500px', // ограничиваем ширину на больших экранах
    margin: '0 auto',   // центрируем по горизонтали
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box', // важно!
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    color: '#000',
  }}
>
      {/* Иконка */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          backgroundColor: '#0088cc',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          color: 'white',
          fontSize: '24px',
        }}
      >
        🏗️
      </div>

      <h1
        style={{
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '32px',
          textAlign: 'center', // ← на случай длинного названия
        }}
      >
        ПОГОССТРОЙ2.01
      </h1>

      <input
        type="tel"
        placeholder="+7 (999) 123-45-67"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '300px',
          padding: '12px 16px',
          marginBottom: '16px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '16px',
          boxSizing: 'border-box', // ← чтобы padding не увеличивал ширину
        }}
      />

      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '300px',
          padding: '12px 16px',
          marginBottom: '24px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          fontSize: '16px',
          boxSizing: 'border-box',
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: '100%',
          maxWidth: '300px',
          padding: '14px',
          backgroundColor: '#0088cc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
      >
        Зайти
      </button>
    </div>
  );
}

export default App;
