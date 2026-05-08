// src/pages/auth/WelcomeScreen.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Додаємо хук для навігації

// Іконки-заглушки
const StarIcon = () => <span>⭐</span>;
const MessageIcon = () => <span>💬</span>;
const AwardIcon = () => <span>🏆</span>;

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 bg-white/50 border border-gray-100 rounded-2xl p-4 shadow-inner-sm">
    <div className="bg-gray-100 p-3 rounded-full text-black flex items-center justify-center w-12 h-12">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-base text-black">{title}</h3>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </div>
);

export const WelcomeScreen = () => {
  const navigate = useNavigate(); // Створюємо функцію для перемикання сторінок

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-12 pb-10 relative overflow-hidden">
      {/* Фонові м'які плями */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        {/* Логотип */}
        <div className="bg-black p-4 rounded-3xl shadow-xl mb-6 flex items-center justify-center w-16 h-16">
          <StarIcon />
        </div>

        {/* Заголовок */}
        <h1 className="text-3xl font-bold text-black mb-3 text-center">Voluntrack</h1>
        <p className="text-sm text-gray-600 text-center mb-10 max-w-xs">
          Платформа для волонтерів, організацій та благодійності
        </p>

        {/* Картки переваг */}
        <div className="w-full space-y-4 mb-12">
          <FeatureCard 
            icon={<StarIcon />} 
            title="Знаходьте проєкти" 
            desc="Обирайте волонтерські можливості та збори коштів" 
          />
          <FeatureCard 
            icon={<MessageIcon />} 
            title="Спілкуйтеся" 
            desc="Підтримуйте зв'язок з волонтерами та організаціями" 
          />
          <FeatureCard 
            icon={<AwardIcon />} 
            title="Відстежуйте досягнення" 
            desc="Збирайте значки та піднімайтеся в рейтингу" 
          />
        </div>

        {/* Кнопки дій */}
        <div className="w-full space-y-4">
          <button 
            // Перехід на екран вибору ролі
            onClick={() => navigate('/role-selection')}
            className="w-full py-4 bg-black text-white rounded-2xl font-semibold text-base shadow-lg hover:bg-zinc-800 transition-colors"
          >
            Розпочати
          </button>
          <button 
            // Перехід на екран логіну
            onClick={() => navigate('/login')}
            className="w-full py-4 bg-white text-black rounded-2xl font-semibold text-base border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Увійти
          </button>
        </div>

        {/* Текст знизу */}
        <p className="text-xs text-gray-400 mt-6 text-center">
          Вже маєте акаунт? Натисніть "Увійти" вище
        </p>
      </div>
    </div>
  );
};