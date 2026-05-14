import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateProject = () => {
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState('fundraising');
  const [showCloseModal, setShowCloseModal] = useState(false);

  const getBtnStyle = (type) => {
    const isActive = activeType === type;
    return `py-4 border-2 rounded-2xl flex flex-col items-center gap-2 transition-all ${
      isActive ? 'border-black bg-gray-50' : 'border-gray-100 hover:bg-gray-50'
    }`;
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative">
      
      {/* Основна картка створення */}
      <div className={`w-full max-w-2xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all duration-300 ${showCloseModal ? 'blur-md scale-95 opacity-60 pointer-events-none' : 'opacity-100'}`}>
        <header className="px-8 py-6 border-b border-gray-50 flex justify-between items-center sticky top-0 bg-white z-10">
          <h1 className="text-xl font-bold">Створити новий збір</h1>
          <button onClick={() => navigate('/home')} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">✕</button>
        </header>

        <div className="flex-1 overflow-y-auto p-8 pt-6 text-left">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* Вибір типу */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 ml-1">Тип публікації</label>
              <div className="grid grid-cols-3 gap-3">
                <button type="button" onClick={() => setActiveType('fundraising')} className={getBtnStyle('fundraising')}>
                  <span className="text-xl">●</span>
                  <span className="text-[10px] font-bold">Збір коштів</span>
                </button>
                <button type="button" onClick={() => setActiveType('volunteering')} className={getBtnStyle('volunteering')}>
                  <span className="text-xl">◆</span>
                  <span className="text-[10px] font-bold text-gray-400">Волонтерство</span>
                </button>
                <button type="button" onClick={() => setActiveType('project')} className={getBtnStyle('project')}>
                  <span className="text-xl">■</span>
                  <span className="text-[10px] font-bold text-gray-400">Проєкт</span>
                </button>
              </div>
            </div>

            {/* Поля форми */}
            <div className="space-y-4">
               <div>
                 <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1">Назва</label>
                 <input type="text" placeholder="Назва збору..." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:ring-1 focus:ring-black" />
               </div>
               <div>
                 <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1 ml-1">Опис</label>
                 <textarea placeholder="Опис проєкту..." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl h-32 outline-none focus:ring-1 focus:ring-black"></textarea>
               </div>
            </div>

            <div className="pt-6 space-y-4">
              <button type="button" onClick={() => navigate('/home')} className="w-full py-5 bg-black text-white rounded-2xl font-bold shadow-lg">
                Опублікувати
              </button>
              
              {/* КНОПКА ЗАКРИТТЯ - Перевір, щоб тут був onClick={() => setShowCloseModal(true)} */}
              <button 
                type="button" 
                onClick={() => {
                  console.log("Кнопка натиснута!"); // Для перевірки в консолі
                  setShowCloseModal(true);
                }} 
                className="w-full py-4 border border-gray-200 text-gray-400 rounded-2xl font-bold text-xs uppercase tracking-widest hover:text-red-500 transition-all cursor-pointer"
              >
                ✕ Закрити збір
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* МОДАЛЬНЕ ВІКНО ПІДТВЕРДЖЕННЯ */}
      {showCloseModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
          <div className="bg-white rounded-[40px] w-full max-w-md p-10 flex flex-col items-center text-center shadow-2xl border border-gray-50">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl text-blue-500 font-bold">!</span>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-black">Закрити збір?</h2>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">
              Ви впевнені, що хочете закрити цей збір?
            </p>
            
            <div className="grid grid-cols-2 gap-4 w-full">
              <button 
                onClick={() => setShowCloseModal(false)} 
                className="py-4 border border-gray-100 rounded-2xl font-bold text-sm text-black hover:bg-gray-50"
              >
                Скасувати
              </button>
              <button 
                onClick={() => navigate('/home')} 
                className="py-4 bg-black text-white rounded-2xl font-bold text-sm shadow-xl"
              >
                Закрити збір
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};