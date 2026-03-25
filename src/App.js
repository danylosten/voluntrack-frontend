import React, { useState } from 'react';

const CenteredSquareForm = () => {
  // Хуки стану для полів
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Стан: вхід чи реєстрація

  // Обробник відправки форми
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegistering) {
      console.log(`Реєстрація: Логін = ${login}, Пароль = ${password}`);
      alert(`Користувача ${login} успішно зареєстровано! Тепер увійдіть.`);
      setIsRegistering(false); // Після реєстрації перемикаємо на вхід
    } else {
      console.log(`Вхід: Логін = ${login}, Пароль = ${password}`);
      alert(`Спроба входу для: ${login}`);
    }
  };

  // Стилі (залишаємо ваші, додаємо лише для текстового посилання)
  const backgroundStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f0f2f5',
    margin: 0,
    padding: '20px',
    boxSizing: 'border-box'
  };

  const squareStyle = {
    width: '320px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '30px',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: isRegistering ? '#28a745' : '#4a90e2', // Зелений для реєстрації, синій для входу
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '15px',
    transition: 'background-color 0.3s ease'
  };

  const toggleTextStyle = {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '14px',
    color: '#666',
    cursor: 'pointer',
    textDecoration: 'underline'
  };

  return (
    <div style={backgroundStyle}>
      <form style={squareStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>
          {isRegistering ? 'Реєстрація' : 'Вхід'}
        </h2>
        
        <input
          type="text"
          placeholder="Логін"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={inputStyle}
          required
        />
        
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        
        <button type="submit" style={buttonStyle}>
          {isRegistering ? 'Зареєструватися' : 'Увійти'}
        </button>

        {/* Текст для перемикання станів */}
        <p 
          style={toggleTextStyle} 
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering 
            ? 'Вже маєте аккаунт? Увійдіть' 
            : 'Немає аккаунту? Зареєструйтесь'}
        </p>
      </form>
    </div>
  );
};

export default CenteredSquareForm;