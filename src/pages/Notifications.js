import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
    const navigate = useNavigate();


    const notifications = [
        { id: 1, title: 'Збір "Прибирання парку" завершено!', text: 'Дякуємо за вашу підтримку! Звіт про використання коштів вже доступний.', time: '2 години тому', icon: '✓', isRead: false },
        { id: 2, title: 'Новий звіт доступний', text: 'Волонтер Марія Коваленко завантажила звіт для збору "Навчання комп\'ютерної грамотності".', time: '1 годину тому', icon: '📄', isRead: false },
        { id: 3, title: 'Організація подякувала вам', text: 'Благодійний фонд "Допомога" подякував за ваш внесок у збір "Допомога дітям".', time: '5 годин тому', icon: '♥', isRead: false },
        { id: 4, title: 'Збір досяг 50% цілі!', text: 'Збір "Медичне обладнання" досяг половини необхідної суми завдяки вашій підтримці.', time: 'Вчора', icon: '📈', isRead: true },
    ];

    return (
        <div className="max-w-2xl mx-auto px-6 font-sans pb-32 pt-8">
            {/* ШАПКА */}
            <header className="flex justify-between items-start mb-8 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-4">
                    {/* Кнопка НАЗАД */}
                    <button onClick={() => navigate('/home')} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    </button>
                    <div>
                        <h1 className="text-2xl font-medium text-black mb-1">Сповіщення</h1>
                        <p className="text-gray-400 text-xs">У вас 3 непрочитаних сповіщень</p>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                    </div>
                    <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-black">3</span>
                </div>
            </header>

            {/* СПИСОК СПОВІЩЕНЬ */}
            <div className="flex flex-col gap-4">
                {notifications.map(n => (
                    <div key={n.id} className={`border rounded-[20px] p-5 transition-all ${!n.isRead ? 'border-gray-300 shadow-sm' : 'border-gray-100 opacity-60'}`}>
                        <div className="flex gap-4">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white ${!n.isRead ? 'bg-black' : 'bg-gray-300'}`}>
                                {n.icon}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-[15px] text-black">{n.title}</h3>
                                    {!n.isRead && <div className="w-2 h-2 bg-black rounded-full mt-2"></div>}
                                </div>
                                <p className="text-gray-500 text-xs leading-relaxed mb-2">{n.text}</p>
                                <p className="text-gray-400 text-[10px]">{n.time}</p>
                                
                                {/* Кнопка всередині картки (як на скріншоті) */}
                                {!n.isRead && (
                                    <button className="mt-4 w-full bg-black text-white py-3 rounded-xl text-xs font-bold transition-transform hover:scale-[1.01]">
                                        Переглянути звіт
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;