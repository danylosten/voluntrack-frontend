import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const [showCloseModal, setShowCloseModal] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col pb-32 relative">
      {/* Шапка */}
      <header className="px-6 pt-8 pb-4 flex justify-between items-center">
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

      {/* Кнопка створення проекту */}
      <div className="px-6 mb-8">
        <button 
          onClick={() => navigate('/create-project')}
          className="w-full py-4 bg-black text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all"
        >
          <span className="text-xl">+</span> Створити новий проєкт
        </button>
      </div>

      {/* Статистика загальна */}
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

      {/* Картка проєкту */}
      <div className="px-6 flex flex-col gap-4">
        <h3 className="font-bold text-lg text-black mb-1">Активні проєкти</h3>
        
        <div className="border border-gray-100 rounded-[35px] overflow-hidden shadow-sm bg-white">
          <div className="p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">Б</div>
            <div>
              <h4 className="font-bold text-sm text-black uppercase tracking-tight">Благодійний фонд "Допомога"</h4>
              <p className="text-gray-400 text-[10px] font-bold">ОРГАНІЗАЦІЯ</p>
            </div>
            <div className="ml-auto bg-black text-white text-[9px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              Збір коштів
            </div>
          </div>
          
          <div className="px-4">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000&auto=format&fit=crop" 
              alt="Project" 
              className="w-full h-44 object-cover rounded-[25px]"
            />
          </div>

          <div className="p-5">
             <div className="flex justify-between text-[11px] font-bold mb-2 uppercase tracking-wide">
                <span className="text-gray-400">Зібрано</span>
                <span className="text-black">32 500 / 50 000 грн</span>
             </div>
             <div className="w-full h-2.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
                <div className="w-[65%] h-full bg-black rounded-full transition-all duration-500"></div>
             </div>

             <div className="grid grid-cols-2 gap-3 mb-3">
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

      {/* Модальне вікно підтвердження (Close Modal) */}
      {showCloseModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
          <div className="bg-white rounded-[40px] w-full max-w-md p-10 flex flex-col items-center text-center shadow-2xl relative border border-gray-50">
            <button onClick={() => setShowCloseModal(false)} className="absolute top-6 right-6 text-gray-300 hover:text-black transition-colors">✕</button>
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-500 text-3xl font-bold">i</div>
            <h2 className="text-2xl font-bold mb-4 text-black">Закрити збір?</h2>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Ви впевнені, що хочете закрити збір <br/>
              <span className="text-black font-bold">"Навчання комп'ютерної грамотності для людей похилого віку"</span>?
            </p>
            <div className="bg-gray-50 rounded-2xl p-4 mb-8 flex gap-3 text-left">
               <span className="text-blue-500 font-bold">✓</span>
               <p className="text-[10px] text-gray-500 font-medium">
                 Після закриття збору ви зможете завантажити звіт. Всі підписники та донори отримають сповіщення про завершення.
               </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <button onClick={() => setShowCloseModal(false)} className="py-4 border border-gray-100 rounded-2xl font-bold text-sm text-black hover:bg-gray-50 transition-all">Скасувати</button>
              <button onClick={() => {setShowCloseModal(false); navigate('/home');}} className="py-4 bg-black text-white rounded-2xl font-bold text-sm shadow-lg hover:bg-zinc-800 transition-all">Закрити збір</button>
            </div>
          </div>
        </div>
      )}

      {/* Нижня панель навігації */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-50 px-10 py-5 flex justify-between items-center z-50">
        <button className="flex flex-col items-center gap-1.5" onClick={() => navigate('/home')}>
          <div className="bg-black p-2 rounded-xl">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter text-black">Головна</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 opacity-25">
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-black">2</span>
          </div>
          <span className="text-[9px] font-black uppercase tracking-tighter">Сповіщення</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 opacity-25">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="text-[9px] font-black uppercase tracking-tighter">Чат</span>
        </button>

        <button className="flex flex-col items-center gap-1.5 opacity-25">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-[9px] font-black uppercase tracking-tighter text-black">Профіль</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;