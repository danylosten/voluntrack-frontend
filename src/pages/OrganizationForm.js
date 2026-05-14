import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const OrganizationForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Стан для зміни екрану

  // Якщо реєстрація "завершена", показуємо екран перевірки пошти
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Фонові плями як на макеті */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
          <div className="bg-gray-50 p-6 rounded-full mb-8">
            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h2 className="text-3xl font-medium mb-3">Перевірте вашу пошту</h2>
          <p className="text-gray-500 mb-2">Ми відправили лист з підтвердженням на адресу:</p>
          <p className="font-bold mb-8 text-black text-lg">your@email.com</p>

          <p className="text-gray-400 text-sm mb-10 px-4">
            Натисніть на посилання у листі, щоб завершити реєстрацію. Якщо ви не бачите листа, перевірте папку "Спам".
          </p>

          <div className="w-full space-y-4">
            <button 
              onClick={() => navigate('/home')} 
              className="w-full py-4 bg-black text-white rounded-full font-bold shadow-lg hover:bg-zinc-800 transition-all"
            >
              Підтвердити email (демо)
            </button>
            
            <button className="w-full py-4 bg-white border border-gray-100 rounded-full font-bold text-gray-700 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              <span className="text-lg">↻</span> Відправити лист повторно
            </button>
          </div>

          <button 
            onClick={() => setIsSubmitted(false)}
            className="mt-8 text-gray-400 hover:text-black font-medium transition-colors"
          >
            Вже підтвердили? <span className="text-black font-bold underline">Увійти</span>
          </button>
        </div>
      </div>
    );
  }

  // Основна форма реєстрації
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