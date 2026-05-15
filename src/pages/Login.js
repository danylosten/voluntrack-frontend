import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Додаємо імпорт useNavigate
import { Input } from '../components/Input';
import { BackButton } from '../components/BackButton';

const StarIcon = () => <span>⭐</span>;
const MailIcon = () => <span>✉️</span>;
const LockIcon = () => <span>🔒</span>;

// 2. Прибираємо пропси { onBack, onSuccess } з дужок
export const LoginScreen = () => {
  const navigate = useNavigate(); // 3. Ініціалізуємо навігацію
  const [email, setEmail] = useState('your@email.com');
  const [password, setPassword] = useState('********');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', email, password);
    
    // Якщо роль ще не задана, ставимо роль за замовчуванням
    if (!localStorage.getItem('userRole')) {
      localStorage.setItem('userRole', 'user'); 
    }
    
    // 4. Замість onSuccess() просто переходимо на головну сторінку
    navigate('/home'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-12 pb-10 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        
        {/* 5. Замінюємо onBack на navigate(-1) для повернення на попередню сторінку */}
        <BackButton onClick={() => navigate(-1)} />

        <div className="bg-black p-3 rounded-2xl shadow-lg mb-6 flex items-center justify-center w-14 h-14">
          <StarIcon />
        </div>

        <h1 className="text-3xl font-bold text-black mb-2 text-center">З поверненням!</h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Увійдіть до свого акаунту Voluntrack
        </p>

        <form onSubmit={handleLogin} className="w-full">
          <Input 
            label="Email"
            icon={<MailIcon />}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введіть ваш email"
          />

          <Input 
            label="Пароль"
            icon={<LockIcon />}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Введіть пароль"
          />

          <div className="flex justify-between items-center text-xs mb-8">
            <label className="flex items-center gap-2 text-gray-500 cursor-pointer">
              <input type="checkbox" className="accent-black rounded" />
              Запам'ятати мене
            </label>
            <span className="text-gray-500 hover:text-black cursor-pointer">Забули пароль?</span>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-black text-white rounded-2xl font-semibold text-base shadow-lg hover:bg-zinc-800 transition-colors mb-5"
          >
            Увійти
          </button>
        </form>

        <p className="text-xs text-gray-400 mb-6 text-center">
          Немає акаунту? <span onClick={() => navigate('/role-selection')} className="font-semibold text-black hover:underline cursor-pointer">Зареєструватися</span>
        </p>

        <div className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-center">
            <p className="text-xs text-gray-500">
                <span className="font-semibold text-black">Демо режим:</span> Введіть будь-який email та пароль для входу
            </p>
        </div>
      </div>
    </div>
  );
};