import React, { useState } from 'react';
const CenteredSquareForm = () => {
  // Хуки стану для логіну та пароля
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // Обробник відправки форми (можна замінити на axios/fetch)
  const handleSubmit = (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    console.log(`Запит на вхід: Логін = ${login}, Пароль = ${password}`);
    // Тут можна викликати FastAPI ендпоінт для аутентифікації
    alert(`Спроба входу для: ${login}`);
  };

  // Стилі для фону (на весь екран)
  const backgroundStyle = {
    display: 'flex',
    justifyContent: 'center', // Центруємо по горизонталі
    alignItems: 'center',     // Центруємо по вертикалі
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f0f2f5', // Легкий сірий фон
    margin: 0,
    padding: '20px',          // Відступ, щоб квадрат не торкався країв на мобільних
    boxSizing: 'border-box'
  };

  // Стилі для білого квадратного поля з формою
  const squareStyle = {
    width: '320px',           // Ширина квадрата
    minHeight: '320px',       // Мінімальна висота (трохи адаптивна)
    height: 'auto',           // Висота підлаштовується під контент
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column', // Елементи всередині йдуть один під одним
    justifyContent: 'center',
    padding: '30px',          // Відступи всередині
    boxSizing: 'border-box'
  };

  // Загальні стилі для полів введення
  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',          // Відступи зверху та знизу
    border: '1px solid #ddd', // Тонка сіра межа
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  // Стилі для кнопки
  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4a90e2', // Синій колір
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.3s ease' // Плавний ефект при наведенні
  };

  return (
    <div style={backgroundStyle}>
      <form style={squareStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Вхід</h2>
        
        {/* Поле Логіну */}
        <input
          type="text"
          placeholder="Логін"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={inputStyle}
          required // Обов'язкове поле
        />
        
        {/* Поле Пароля */}
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required // Обов'язкове поле
        />
        
        {/* Кнопка входу */}
        <button type="submit" style={buttonStyle}>
          Увійти
        </button>
      </form>
    </div>
  );
};

export default CenteredSquareForm;

