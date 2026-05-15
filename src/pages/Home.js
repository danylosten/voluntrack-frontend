import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';

// --- СПІЛЬНІ КОМПОНЕНТИ ІКОНОК ---
const StarIcon = () => <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
const ChartIcon = () => <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M17 7h4v4" /></svg>;
const DollarIcon = () => <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const UsersIcon = () => <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;

// --- 1. КОНТЕНТ ДЛЯ ВОЛОНТЕРА ---
const VolunteerContent = ({ navigate, setShowCloseModal }) => (
  <>
    <header className="px-6 pt-10 pb-6 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-medium text-black mb-1">Мої проєкти</h1>
        <p className="text-gray-500 text-sm">Керуйте вашими зборами та проєктами</p>
      </div>
      <button className="bg-black rounded-full shadow-lg flex items-center justify-center w-14 h-14"><StarIcon /></button>
    </header>

    <div className="px-6 mb-8">
      <button onClick={() => navigate('/create-project')} className="w-full py-4 bg-black text-white rounded-full font-medium text-lg shadow-xl hover:bg-zinc-800 transition-all">+ Створити новий збір</button>
    </div>

    <div className="px-6 grid grid-cols-3 gap-4 mb-12">
      <div className="bg-white border border-gray-100 rounded-2xl py-6 flex flex-col items-center">
        <div className="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center mb-3"><ChartIcon /></div>
        <p className="text-2xl font-medium">2</p>
        <p className="text-gray-500 text-[10px] font-bold uppercase">Активні</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl py-6 flex flex-col items-center">
        <div className="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center mb-3"><DollarIcon /></div>
        <p className="text-2xl font-medium">18.5K</p>
        <p className="text-gray-500 text-[10px] font-bold uppercase">Зібрано</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-2xl py-6 flex flex-col items-center">
        <div className="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center mb-3"><UsersIcon /></div>
        <p className="text-2xl font-medium">156</p>
        <p className="text-gray-500 text-[10px] font-bold uppercase">Підписники</p>
      </div>
    </div>

    <div className="px-6">
      <h3 className="font-medium text-xl mb-4">Мої публікації</h3>
      <div className="border border-gray-100 rounded-[32px] overflow-hidden bg-white shadow-sm">
        <div className="p-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-medium">M</div>
            <div>
              <p className="font-medium">Марія Коваленко</p>
              <p className="text-gray-400 text-xs">Волонтер</p>
            </div>
          </div>
          <div className="bg-gray-500 text-white text-[10px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">Проєкт</div>
        </div>
        <div className="px-4"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600" className="w-full h-48 object-cover rounded-[24px]" alt="project" /></div>
        <div className="p-5">
          <button onClick={() => setShowCloseModal(true)} className="w-full py-3 text-gray-400 text-sm font-medium border border-gray-50 rounded-xl">Закрити проєкт</button>
        </div>
      </div>
    </div>
  </>
);

// --- 2. КОНТЕНТ ДЛЯ ОРГАНІЗАЦІЇ ---
const OrganizationContent = ({ navigate, setShowCloseModal }) => (
  <>
    {/* Шапка організації */}
    <header className="px-6 pt-10 pb-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold text-black">Панель організації</h1>
        <p className="text-gray-400 text-xs font-medium">Керуйте проєктами та зборами</p>
      </div>
      <div className="bg-black p-2.5 rounded-xl shadow-md">
        <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
    </header>

    {/* Кнопка створення проекту — використовує CreateProject.js */}
    <div className="px-6 mb-8">
      <button 
        onClick={() => navigate('/create-project')}
        className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-all"
      >
        <span className="text-xl">+</span> Створити новий проєкт
      </button>
    </div>

    {/* Статистика */}
    <div className="px-6 grid grid-cols-3 gap-3 mb-10 text-center">
      <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm">
        <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">Активні</p>
        <p className="text-xl font-bold text-black">5</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm">
        <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">Зібрано</p>
        <p className="text-xl font-bold text-black">127K</p>
      </div>
      <div className="bg-white border border-gray-100 rounded-3xl p-4 shadow-sm">
        <p className="text-gray-400 text-[10px] uppercase font-bold mb-1">Підписники</p>
        <p className="text-xl font-bold text-black">3.4K</p>
      </div>
    </div>

    {/* Список проєктів */}
    <div className="px-6 flex flex-col gap-4">
      <h3 className="font-bold text-lg text-black mb-1">Активні проєкти</h3>
      
      <div className="border border-gray-100 rounded-[35px] overflow-hidden shadow-sm bg-white">
        <div className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">Б</div>
          <div>
            <h4 className="font-bold text-sm text-black uppercase tracking-tight">Благодійний фонд "Допомога"</h4>
            <p className="text-gray-400 text-[10px] font-bold">ОРГАНІЗАЦІЯ</p>
          </div>
        </div>
        
        <div className="px-4">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000" 
            alt="Project" 
            className="w-full h-44 object-cover rounded-[25px]"
          />
        </div>

        <div className="p-5">
           <div className="grid grid-cols-2 gap-3 mb-3">
              {/* Кнопка Редагувати — використовує EditProject.js */}
              <button 
                onClick={() => navigate('/edit-project')}
                className="py-4 bg-[#E5E7EB] text-black rounded-2xl font-bold text-xs hover:bg-gray-300 transition-colors"
              >
                Редагувати
              </button>
              <button 
                onClick={() => navigate('/project-stats')}
                className="py-4 bg-[#E5E7EB] text-black rounded-2xl font-bold text-xs hover:bg-gray-300 transition-colors"
              >
                Статистика
              </button>
           </div>

           <button 
              onClick={() => setShowCloseModal(true)}
              className="w-full py-4 border border-gray-100 rounded-2xl text-[11px] font-bold text-gray-300 hover:text-red-400 transition-colors"
           >
              Закрити збір
           </button>
        </div>
      </div>
    </div>
  </>
);
// --- 3. КОНТЕНТ ДЛЯ КОРИСТУВАЧА (СТРІЧКА) ---
const UserContent = ({ navigate }) => (
  <>
    <header className="px-6 pt-10 pb-6">
      <h1 className="text-3xl font-medium text-black mb-1">Стрічка зборів</h1>
      <p className="text-gray-500 text-sm">Знайдіть проєкт, який хочете підтримати</p>
    </header>

    {/* Пошук / Фільтри */}
    <div className="px-6 mb-8">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Пошук зборів..." 
          className="w-full p-4 pl-12 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:border-black transition-all"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
      </div>
    </div>

    {/* Список доступних зборів */}
    <div className="px-6 space-y-6">
      {[1, 2].map((item) => (
        <div key={item} className="border border-gray-100 rounded-[32px] overflow-hidden bg-white shadow-sm">
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold">Ф</div>
            <div>
              <p className="font-bold text-sm">Фонд "Крила Надії"</p>
              <p className="text-[10px] text-blue-500 font-bold uppercase">Активний збір</p>
            </div>
          </div>
          
          <img 
            src={item === 1 ? "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600" : "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600"} 
            className="w-full h-48 object-cover px-4 rounded-[24px]" 
            alt="project" 
          />

          <div className="p-5">
            <h4 className="font-bold text-lg mb-2">Медичне обладнання для дитячої лікарні</h4>
            <div className="w-full h-2 bg-gray-100 rounded-full mb-4">
              <div className="w-[45%] h-full bg-black rounded-full"></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold">12 400 / 30 000 грн</span>
              <button className="px-6 py-2 bg-black text-white rounded-xl font-bold text-sm">Підтримати</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);

// --- ГОЛОВНИЙ КОМПОНЕНТ HOME ---
export const Home = () => {
  const navigate = useNavigate();
  const [showCloseModal, setShowCloseModal] = useState(false);
  
  // Тимчасово беремо роль з localStorage, або ставимо 'volunteer' за замовчуванням
  const [userRole,] = useState(localStorage.getItem('userRole') || 'volunteer');

  return (
    <div className="min-h-screen bg-white flex flex-col pb-32 relative">
      
      {/* ДИНАМІЧНИЙ ВМІСТ */}
    <main className="flex-1">
      {userRole === 'volunteer' && (
        <VolunteerContent navigate={navigate} setShowCloseModal={setShowCloseModal} />
      )}
      {userRole === 'organization' && (
        <OrganizationContent navigate={navigate} setShowCloseModal={setShowCloseModal} />
      )}
      {userRole === 'user' && (
        <UserContent navigate={navigate} /> // Тепер тут стрічка
      )}
    </main>

      {/* МОДАЛКА (Спільна для всіх) */}
      {showCloseModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
          <div className="bg-white rounded-[40px] w-full max-w-md p-10 flex flex-col items-center text-center shadow-2xl">
             <h2 className="text-2xl font-bold mb-4">Закрити проєкт?</h2>
             <div className="grid grid-cols-2 gap-4 w-full mt-4">
                <button onClick={() => setShowCloseModal(false)} className="py-4 border rounded-2xl">Скасувати</button>
                <button onClick={() => setShowCloseModal(false)} className="py-4 bg-black text-white rounded-2xl">Закрити</button>
             </div>
          </div>
        </div>
      )}

      {/* НИЖНЯ НАВІГАЦІЯ (Спільна для всіх ролей) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 px-10 py-4 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1.5" onClick={() => navigate('/home')}>
          <div className="bg-black p-2.5 rounded-2xl shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-black">Головна</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 text-gray-400">
          <div className="relative mt-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
          </div>
          <span className="text-[10px] font-bold uppercase mt-1">Сповіщ.</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 text-gray-400">
          <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          <span className="text-[10px] font-bold uppercase mt-1">Чат</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 text-gray-400">
          <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <span className="text-[10px] font-bold uppercase mt-1">Профіль</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;