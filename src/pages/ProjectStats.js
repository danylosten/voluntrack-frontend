import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ProjectStats = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col pb-24 relative">
      <header className="px-6 pt-8 pb-4 flex items-center border-b border-gray-50">
        <button onClick={() => navigate('/home')} className="text-2xl mr-4 text-black">←</button>
        <h1 className="text-2xl font-bold text-black text-center flex-1 pr-10">Статистика зборів</h1>
      </header>

      <div className="px-6 flex gap-2 my-8 justify-center">
        <button className="px-6 py-2 bg-black text-white rounded-full text-xs font-bold uppercase">Активний збір</button>
        <button className="px-6 py-2 bg-gray-50 text-gray-400 rounded-full text-xs font-bold uppercase border border-gray-100">Завершений збір</button>
      </div>

      <div className="px-6">
        <div className="border border-gray-100 rounded-[40px] p-8 shadow-sm text-left">
          <h2 className="text-xl font-bold text-black mb-2">Навчання комп’ютерної грамотності для людей похилого віку</h2>
          <p className="text-gray-400 text-sm mb-8 font-medium">Збиранмо кошти на купівлю ноутбуків та програмного забезпечення</p>

          <div className="mb-10">
            <div className="flex justify-between items-end mb-3">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Зібрано</p>
                <p className="text-xl font-bold text-black font-black">18 500 / 30 000 грн</p>
              </div>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <div className="w-[62%] h-full bg-black rounded-full"></div>
            </div>
            <p className="text-[10px] font-bold text-gray-400 mt-2">📈 62% від цілі</p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-b border-gray-50 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-gray-50 p-3 rounded-full">👤</div>
              <div>
                <p className="text-xl font-bold">47</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Донорів</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-gray-50 p-3 rounded-full">💰</div>
              <div>
                <p className="text-xl font-bold">394</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase">Сер. донат, грн</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-500 font-medium">
            <p className="text-xs">📅 Початок: <span className="text-black font-bold">1 травня 2026</span></p>
            <p className="text-xs">🏁 Кінець: <span className="text-black font-bold">31 травня 2026</span></p>
          </div>
        </div>
      </div>

      {/* Нижня навігація як на фото */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-10 py-4 flex justify-between items-center z-50">
        <button onClick={() => navigate('/home')} className="flex flex-col items-center gap-1 opacity-30">
          <span className="text-xl">🏠</span>
          <span className="text-[9px] font-bold uppercase tracking-tighter">Головна</span>
        </button>
        <button className="flex flex-col items-center gap-1">
          <div className="relative">
            <span className="text-xl">🔔</span>
            <span className="absolute -top-1 -right-1 bg-black text-white text-[8px] w-3 h-3 flex items-center justify-center rounded-full">2</span>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-tighter">Сповіщення</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-30">
          <span className="text-xl">💬</span>
          <span className="text-[9px] font-bold uppercase tracking-tighter">Чат</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-30 font-bold">
          <span className="text-xl">👤</span>
          <span className="text-[9px] font-bold uppercase tracking-tighter">Профіль</span>
        </button>
      </nav>
    </div>
  );
};