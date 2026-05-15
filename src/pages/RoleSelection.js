import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

// Іконки (можеш вставити свої SVG тут, як було раніше)
const StarIcon = () => <span className="w-6 h-6">⭐</span>;
const OrganizationIcon = () => <span className="w-6 h-6">🏢</span>;
const UserIcon = () => <span className="w-6 h-6">👤</span>;

const roles = [
  {
    id: 'volunteer',
    title: 'Волонтер',
    description: 'Я хочу допомагати та брати участь у проєктах',
    features: ['Доступ до волонтерських можливостей', 'Збір досягнень', 'Відстеження годин'],
    icon: <StarIcon />,
    path: '/register/volunteer'
  },
  {
    id: 'organization',
    title: 'Організація',
    description: 'Я представляю організацію чи фонд',
    features: ['Створення зборів коштів', 'Публікація проєктів', 'Пошук волонтерів'],
    icon: <OrganizationIcon />,
    path: '/register/organization'
  },
  {
    id: 'user',
    title: 'Користувач',
    description: 'Я хочу підтримувати та спостерігати',
    features: ['Підтримка зборів', 'Перегляд проєктів', 'Спілкування'],
    icon: <UserIcon />,
    path: '/login'
  }
];

export const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-12 pb-10 relative overflow-hidden">
      {/* Фонові плями */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-gray-100 rounded-full blur-3xl opacity-60 -translate-x-1/2"></div>
      
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
        <BackButton onClick={() => navigate('/')} />

        <h1 className="text-3xl font-medium text-black mt-6 mb-2 text-center">Приєднуйтесь до Voluntrack</h1>
        
        <p className="text-sm text-gray-500 mb-8 text-center">
          Вже маєте акаунт? <span onClick={() => navigate('/login')} className="font-semibold text-black cursor-pointer hover:underline">Увійти</span>
        </p>

        <div className="w-full space-y-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => navigate(role.path)}
              className="w-full text-left bg-white border border-gray-200 rounded-3xl p-6 flex items-start gap-5 hover:border-black hover:shadow-md transition-all group"
            >
              <div className="bg-gray-50 p-4 rounded-full flex-shrink-0 group-hover:bg-gray-100">
                {role.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg text-black">{role.title}</h3>
                <p className="text-sm text-gray-500">{role.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};