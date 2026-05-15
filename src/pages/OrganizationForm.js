import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailVerification } from './EmailVerification'; // Імпортуємо ваш готовий файл

export const OrganizationForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Стан для зміни екрану

  // Якщо реєстрація "завершена", показуємо ваш готовий екран перевірки пошти
  if (isSubmitted) {
    return (
      <EmailVerification 
        onConfirm={() => {
          localStorage.setItem('userRole', 'organization'); // Зберігаємо роль організації
          navigate('/home');
        }} 
        onLoginInstead={() => navigate('/login')} 
      />
    );
  }

  // Основна форма реєстрації (залишилася без змін, як ви просили)
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-[40px] p-10 relative shadow-2xl">
        
        <button 
          onClick={() => navigate('/role-selection')}
          className="absolute top-8 left-8 text-gray-400 hover:text-black flex items-center gap-1 text-sm font-medium"
        >
          ← Назад
        </button>

        <div className="flex flex-col items-center mb-8 mt-4">
          <div className="bg-black p-4 rounded-2xl mb-4 flex items-center justify-center w-16 h-16 shadow-lg">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-black">Організація</h2>
          <p className="text-gray-400 text-sm font-medium">Заповніть інформацію про себе</p>
        </div>

        <form className="space-y-5 text-left">
          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1 uppercase tracking-wider">Назва організації</label>
            <input type="text" placeholder="Назва вашої організації" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-1 focus:ring-black" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1 uppercase tracking-wider">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-1 focus:ring-black" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1 uppercase tracking-wider">Пароль</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Мінімум 8 символів" 
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-1 focus:ring-black" 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black text-xs font-bold uppercase"
              >
                {showPassword ? "Сховати" : "Показати"}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1 uppercase tracking-wider">Місцезнаходження</label>
            <input type="text" placeholder="Київ, Україна" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-1 focus:ring-black" />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-800 mb-1.5 ml-1 uppercase tracking-wider">Про організацію</label>
            <textarea placeholder="Розкажіть про вашу місію..." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl h-24 resize-none outline-none focus:ring-1 focus:ring-black"></textarea>
          </div>

          <button 
            type="button"
            onClick={() => setIsSubmitted(true)} // Змінюємо екран на підтвердження
            className="w-full py-5 bg-black text-white rounded-[20px] font-bold text-base mt-4 shadow-xl hover:bg-zinc-800 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="text-lg">✓</span> Завершити реєстрацію
          </button>
        </form>
      </div>
    </div>
  );
};