import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const RoleSelection = () => {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'volunteer',
      title: 'Волонтер',
      desc: 'Я хочу допомагати та брати участь у проєктах',
      icon: '⭐',
      path: '/login'
    },
    {
      id: 'organization',
      title: 'Організація',
      desc: 'Я представляю організацію чи фонд',
      icon: '🏢',
      path: '/register/organization' // Шлях до другого фото
    },
    {
      id: 'user',
      title: 'Користувач',
      desc: 'Я хочу підтримувати та спостерігати',
      icon: '👤',
      path: '/login'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-12 pb-10 relative">
      <div className="w-full max-w-2xl flex flex-col items-center">
        <BackButton onClick={() => navigate('/')} />
        
        <h1 className="text-3xl font-medium text-black mt-6 mb-8 text-center">
          Приєднуйтесь до Voluntrack
        </h1>

        <div className="w-full space-y-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => navigate(role.path)}
              className="w-full text-left bg-white border border-gray-100 rounded-[32px] p-6 flex items-start gap-5 hover:border-black transition-all group"
            >
              <div className="bg-gray-50 p-4 rounded-full text-2xl group-hover:bg-gray-100">
                {role.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-black">{role.title}</h3>
                <p className="text-sm text-gray-400">{role.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};