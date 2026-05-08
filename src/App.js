import React, { useState } from 'react';
import { WelcomeScreen as Welcome } from './pages/Welcome';
import { LoginScreen as Login } from './pages/Login';
import { RoleSelection } from './pages/RoleSelection';
import { EmailVerification } from './pages/EmailVerification'; // 1. Імпортуємо новий екран
import Home from './pages/Home';
import './App.css';

function App() {
  // Додали стан 'verify-email'
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleRoleSelect = (roleId) => {
    console.log('Вибрана роль:', roleId);
    // Після вибору ролі зазвичай йде реєстрація, але поки залишимо так
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <Welcome 
          onStart={() => setCurrentScreen('role-selection')} 
          onLogin={() => setCurrentScreen('login')} 
        />
      )}

      {currentScreen === 'role-selection' && (
        <RoleSelection 
          onLogin={() => setCurrentScreen('login')}
          onSelectRole={handleRoleSelect}
          onBack={() => setCurrentScreen('welcome')}
        />
      )}

      {currentScreen === 'login' && (
        <Login 
          onBack={() => setCurrentScreen('welcome')}
          // 2. ЗМІНА ТУТ: Після успішного входу йдемо на екран перевірки пошти
          onSuccess={() => setCurrentScreen('verify-email')} 
        />
      )}

      {/* 3. ДОДАЄМО ЕКРАН ПЕРЕВІРКИ ПОШТИ */}
      {currentScreen === 'verify-email' && (
        <EmailVerification
          onConfirm={() => setCurrentScreen('home')} // Демо-перехід на головну після "підтвердження"
          onLoginInstead={() => setCurrentScreen('login')}
        />
      )}

      {currentScreen === 'home' && (
        <Home onLogout={() => setCurrentScreen('welcome')} />
      )}
    </div>
  );
}

export default App;