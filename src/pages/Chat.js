import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const navigate = useNavigate();

    const chats = [
        { id: 1, name: 'Фонд "Допомога"', message: 'Дякуємо за ваш внесок!', time: '10:30', unread: 2, avatarText: 'Ф' },
        { id: 2, name: 'Марія Коваленко', message: 'Коли наступне заняття?', time: 'Вчора', unread: 0, avatarText: 'М' },
        { id: 3, name: 'Екологічна ініціатива', message: 'Чекаємо вас у суботу!', time: '2 дні тому', unread: 1, avatarText: 'Е' },
    ];

    return (
        <div className="max-w-2xl mx-auto px-6 font-sans pb-32 pt-8">
            {/* ШАПКА */}
            <header className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                <button onClick={() => navigate('/home')} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <h1 className="text-2xl font-medium text-black">Чат</h1>
            </header>

            {/* ПОШУК */}
            <div className="relative mb-6">
                <input 
                    type="text" 
                    placeholder="Пошук розмов..." 
                    className="w-full border border-gray-200 rounded-full py-3.5 pl-12 pr-4 text-sm outline-none focus:border-black transition-colors"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>

            {/* СПИСОК ЧАТІВ */}
            <div className="flex flex-col gap-3 mb-8">
                {chats.map(chat => (
                    <div 
                        key={chat.id} 
                        onClick={() => navigate('/chat/' + chat.id)} 
                        className="border border-gray-200 rounded-[20px] p-4 flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                {chat.avatarText}
                            </div>
                            <div>
                                <h3 className="font-bold text-[15px] text-black">{chat.name}</h3>
                                <p className="text-gray-500 text-xs mt-0.5">{chat.message}</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5">
                            <span className="text-gray-400 text-[10px]">{chat.time}</span>
                            {chat.unread > 0 && (
                                <div className="bg-black text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                                    {chat.unread}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* БЛОК ПРАВИЛ */}
            <div className="bg-gray-50 border border-gray-100 rounded-[24px] p-8 flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[250px]">
                    <span className="font-bold text-black">Правила спілкування:</span> будьте ввічливими, не використовуйте нецензурну лексику. Ви можете поскаржитись на користувача у разі порушення правил.
                </p>
            </div>
        </div>
    );
};

export default Chat;