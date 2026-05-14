import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EditProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-10">
      <div className="w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Шапка */}
        <header className="px-8 py-6 border-b border-gray-50 flex justify-between items-center bg-white sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-black">Редагування збору</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">ID: #7721-VO</p>
          </div>
          <button 
            onClick={() => navigate('/home')} 
            className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-black hover:bg-gray-100 transition-all"
          >
            ✕
          </button>
        </header>

        {/* Контент */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="space-y-8">
            
            {/* Секція: Фото */}
            <div className="flex items-center justify-between p-6 bg-gray-50 rounded-[30px]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=100" alt="Current" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold">Головне фото</p>
                  <p className="text-xs text-gray-400">Обкладинка проєкту</p>
                </div>
              </div>
              <button className="px-5 py-2.5 bg-black text-white rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-zinc-800 transition-all">
                Змінити фото
              </button>
            </div>

            {/* Секція: Сума */}
            <div className="p-6 border border-gray-100 rounded-[30px]">
              <label className="block text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">Сума збору</label>
              <div className="flex gap-3">
                <input 
                  type="number" 
                  defaultValue="50000"
                  className="flex-1 p-4 bg-gray-50 border border-transparent rounded-2xl text-sm font-bold focus:border-black outline-none transition-all"
                />
                <button className="px-6 py-4 bg-black text-white rounded-2xl text-xs font-bold hover:bg-zinc-800">
                  Оновити ціль
                </button>
              </div>
            </div>

            {/* Секція: Опис */}
            <div className="p-6 border border-gray-100 rounded-[30px]">
              <label className="block text-[10px] font-bold text-gray-400 uppercase mb-4 tracking-widest">Опис проєкту</label>
              <textarea 
                className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl text-sm leading-relaxed h-40 resize-none focus:border-black outline-none transition-all"
                defaultValue="Навчання комп’ютерної грамотності для людей похилого віку. Збирання коштів на купівлю ноутбуків..."
              />
            </div>

            {/* Додаткові налаштування */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-gray-50 rounded-[24px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Локація</p>
                <input type="text" defaultValue="Київ, Україна" className="bg-transparent font-bold text-sm outline-none w-full" />
              </div>
              <div className="p-5 bg-gray-50 rounded-[24px]">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Дата завершення</p>
                <input type="text" defaultValue="31.05.2026" className="bg-transparent font-bold text-sm outline-none w-full" />
              </div>
            </div>

            {/* Кнопка видалення */}
            <div className="pt-4 border-t border-gray-50 flex flex-col gap-3">
              <button 
                onClick={() => navigate('/home')}
                className="w-full py-5 bg-black text-white rounded-[24px] font-bold shadow-xl hover:scale-[1.01] transition-all"
              >
                Зберегти всі зміни
              </button>
              <button className="w-full py-4 text-red-500 font-bold text-xs uppercase tracking-widest hover:bg-red-50 rounded-[24px] transition-all">
                Видалити цей збір
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};