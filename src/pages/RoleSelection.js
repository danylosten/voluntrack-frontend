// src/pages/RoleSelection.js
import React from 'react';
import { BackButton } from '../components/BackButton';

// Прості SVG іконки для карток
const StarIcon = () => (
  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const OrganizationIcon = () => (
  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" opacity="0.3" />
    <path d="M12 2a10 10 0 000 20V2z" />
  </svg>
);

const MainLogoIcon = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Дані для карток
const roles = [
  {
    id: 'volunteer',
    title: 'Волонтер',
    description: 'Я хочу допомагати та брати участь у проєктах',
    features: ['Доступ до волонтерських можливостей', 'Збір досягнень та нагород', 'Відстеження годин волонтерства'],
    icon: <StarIcon />
  },
  {
    id: 'organization',
    title: 'Організація',
    description: 'Я представляю організацію чи фонд',
    features: ['Створення зборів коштів', 'Публікація волонтерських проєктів', 'Пошук волонтерів'],
    icon: <OrganizationIcon />
  },
  {
    id: 'user',
    title: 'Користувач',
    description: 'Я хочу підтримувати та спостерігати',
    features: ['Підтримка зборів коштів', 'Перегляд проєктів', 'Спілкування з спільнотою'],
    icon: <UserIcon />
  }
];

export const RoleSelection = ({ onLogin, onSelectRole, onBack }) => {
  return (
      <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-12 pb-10 relative overflow-hidden">
      {/* Фонові плями */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-60 -translate-x-1/2"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-60"></div>

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        
        {/* 3. Вставляємо кнопку "Назад" */}
        {onBack && <BackButton onClick={onBack} />}

        {/* Логотип */}
        <div className="bg-black p-3 rounded-2xl shadow-lg mb-6 flex items-center justify-center w-14 h-14">
          <MainLogoIcon />
        </div>

        {/* Заголовок */}
        <h1 className="text-3xl font-medium text-black mb-2 text-center">Приєднуйтесь до Voluntrack</h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Оберіть, як ви хочете користуватися платформою
        </p>

        {/* Посилання на вхід */}
        <p className="text-sm text-gray-500 mb-8 text-center">
          Вже маєте акаунт? <span onClick={onLogin} className="font-semibold text-black cursor-pointer hover:underline">Увійти</span>
        </p>

        {/* Картки вибору ролі */}
        <div className="w-full space-y-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.id)}
              className="w-full text-left bg-white border border-gray-200 rounded-3xl p-6 flex items-start gap-5 hover:border-black hover:shadow-md transition-all duration-200 group"
            >
              {/* Іконка */}
              <div className="bg-gray-50 p-4 rounded-full flex-shrink-0 group-hover:bg-gray-100 transition-colors">
                {role.icon}
              </div>
              
              {/* Контент картки */}
              <div className="flex-1 mt-1">
                <h3 className="font-medium text-lg text-black mb-1">{role.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{role.description}</p>
                
                {/* Список можливостей */}
                <ul className="space-y-1.5">
                  {role.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};