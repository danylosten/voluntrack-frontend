import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // Показуємо панель ТІЛЬКИ на цих сторінках
    const showNav = ['/home', '/notifications', '/chat', '/profile'].includes(location.pathname);

    if (!showNav) return null;

    // Спеціальна функція, яка перевіряє, чи ми зараз на цій сторінці
    const isActive = (path) => location.pathname === path;

    // Функція, яка видає правильний дизайн квадратика для іконки
    const getIconClass = (path) => {
        return `transition-all duration-200 flex items-center justify-center ${
            isActive(path) 
            ? "bg-black p-2.5 rounded-2xl shadow-md text-white" 
            : "p-2.5 text-gray-400 hover:text-black"
        }`;
    };

    // Функція для стилю підпису під іконкою
    const getTextClass = (path) => {
        return `text-[10px] font-bold uppercase tracking-wider mt-1 transition-colors ${
            isActive(path) ? 'text-black' : 'text-gray-400'
        }`;
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 px-8 py-2 flex justify-between items-center z-50">
            
            {/* 1. ГОЛОВНА */}
            <button className="flex flex-col items-center w-16" onClick={() => navigate('/home')}>
                <div className={getIconClass('/home')}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </div>
                <span className={getTextClass('/home')}>Головна</span>
            </button>

            {/* 2. СПОВІЩЕННЯ */}
            <button className="flex flex-col items-center w-16" onClick={() => navigate('/notifications')}>
                <div className={`${getIconClass('/notifications')} relative`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    
                    {/* Бейджик, який інвертує кольори, щоб не зливатися з чорним фоном */}
                    <span className={`absolute -top-1.5 -right-1.5 text-[9px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold border-2 ${
                        isActive('/notifications') ? 'bg-white text-black border-black' : 'bg-black text-white border-white'
                    }`}>
                        3
                    </span>
                </div>
                <span className={getTextClass('/notifications')}>Сповіщ.</span>
            </button>

            {/* 3. ЧАТ */}
            <button className="flex flex-col items-center w-16" onClick={() => navigate('/chat')}>
                <div className={getIconClass('/chat')}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                </div>
                <span className={getTextClass('/chat')}>Чат</span>
            </button>

            {/* 4. ПРОФІЛЬ */}
            <button className="flex flex-col items-center w-16" onClick={() => navigate('/profile')}>
                <div className={getIconClass('/profile')}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <span className={getTextClass('/profile')}>Профіль</span>
            </button>

        </nav>
    );
};

export default BottomNav;