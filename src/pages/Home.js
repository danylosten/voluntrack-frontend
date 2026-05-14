import React from 'react';

// --- Іконки для навігації ---
// Використовуємо strokeWidth="2" для активної іконки і "1.5" для неактивних, щоб підкреслити стан
const HomeIcon = () => (
  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const ChatIcon = () => (
  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white relative pb-20">
      {/* Тут буде основний контент сторінки. 
        Зараз тут повністю пусто.
      */}
      <div className="p-6">
        
      </div>

      {/* Нижня панель навігації (Tab Bar) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-2 flex justify-between items-center z-50 pb-safe">
        
        {/* Активна кнопка (Головна) */}
        <button className="flex flex-col items-center justify-center text-black w-16 py-1.5 bg-gray-50 rounded-2xl">
          <HomeIcon />
          <span className="text-[10px] font-medium">Головна</span>
        </button>
        
        {/* Кнопка Сповіщення (з бейджем "2") */}
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-black w-16 py-1.5 transition-colors group">
            <BellIcon />
          <span className="text-[10px]">Сповіщення</span>
        </button>
        
        {/* Кнопка Чат */}
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-black w-16 py-1.5 transition-colors">
          <ChatIcon />
          <span className="text-[10px]">Чат</span>
        </button>
        
        {/* Кнопка Профіль */}
        <button className="flex flex-col items-center justify-center text-gray-400 hover:text-black w-16 py-1.5 transition-colors">
          <UserIcon />
          <span className="text-[10px]">Профіль</span>
        </button>

      </div>
    </div>
  );
};

export default Home;