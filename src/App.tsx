import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Инициализация Telegram WebApp
    if ((window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp;
      tg.ready();
      tg.expand();
    }
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Моя Mini App</h1>
      <p>Привет из Telegram!</p>
      <button onClick={() => (window as any).Telegram?.WebApp?.close()}>
        Закрыть
      </button>
    </div>
  );
}

export default App;
