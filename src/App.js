import React, { useState } from 'react';

function App() {
  // Створюємо стан для лічильника
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f0f2f5'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    marginTop: '20px'
  };

  return (
    <div style={containerStyle}>
      <h1>Тест React для Voluntrack 🚀</h1>
      <p>Якщо ти бачиш це, твій фронтенд-проєкт запущено успішно.</p>
      
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Кількість тестів: {count}
      </div>

      <button 
        style={buttonStyle}
        onClick={() => setCount(count + 1)}
      >
        Натисни мене!
      </button>
    </div>
  );
}

export default App;
