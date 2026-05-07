import React, { useState } from 'react';
import { WelcomeScreen as Welcome } from './pages/Welcome';
import { LoginScreen as Login } from './pages/Login';
import { RoleSelection } from './pages/RoleSelection'; // Імпортуємо новий екран
import Home from './pages/Home';
import './App.css';

function App() {
  // Стани: 'welcome', 'login', 'role-selection', 'home'
  const [currentScreen, setCurrentScreen] = useState('welcome');

  // Функція для обробки вибору конкретної ролі
  const handleRoleSelect = (roleId) => {
    console.log('Вибрана роль:', roleId);
    // Наступним кроком тут буде перехід на форму реєстрації для конкретної ролі
    // setCurrentScreen(`register-${roleId}`); 
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <Welcome 
          onStart={() => setCurrentScreen('role-selection')} // Переходимо на вибір ролі
          onLogin={() => setCurrentScreen('login')} 
        />
      )}

      {currentScreen === 'role-selection' && (
        <RoleSelection 
          onLogin={() => setCurrentScreen('login')}
          onSelectRole={handleRoleSelect}
          onBack={() => setCurrentScreen('welcome')} // Додай цей рядок
        />
      )}

      {currentScreen === 'login' && (
        <Login 
          onBack={() => setCurrentScreen('welcome')}
          onSuccess={() => setCurrentScreen('home')} 
        />
      )}

      {currentScreen === 'home' && (
        <Home onLogout={() => setCurrentScreen('welcome')} />
      )}
    </div>
  );
}

export default App;