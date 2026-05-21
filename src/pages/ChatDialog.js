import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ChatDialog = () => {
    const { id } = useParams(); // ID співрозмовника з URL
    const navigate = useNavigate();
    const [inputText, setInputText] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const socket = useRef(null);

    const myId = 1; // Твій ID (тимчасово)

    // Тимчасові повідомлення для візуалу (як на твоєму макеті)
    const [messages, setMessages] = useState([
        { text: 'Доброго дня! Дякуємо за ваш внесок у наш проєкт.', isMy: false, time: '10:25' },
        { text: 'Дякую вам за вашу працю! Коли будуть оновлення по проєкту?', isMy: true, time: '10:27' },
        { text: 'Ми плануємо опублікувати звіт наступного тижня.', isMy: false, time: '10:30' },
        { text: 'Також зможете побачити фото та відео з місця виконання робіт.', isMy: false, time: '10:30' },
        { text: 'Чудово! Буду чекати 👍', isMy: true, time: '10:32' },
    ]);

    useEffect(() => {
        // Підключення до твого FastAPI сервера
        socket.current = new WebSocket(`ws://127.0.0.1:8000/ws/${myId}`);

        socket.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const now = new Date();
            const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
            setMessages((prev) => [...prev, { text: data.text, isMy: false, time: timeStr }]);
        };

        return () => socket.current.close();
    }, [myId]);

    const sendMessage = () => {
        if (!inputText.trim()) return;
        
        // Відправляємо на бекенд
        socket.current.send(JSON.stringify({ receiver_id: parseInt(id), text: inputText }));
        
        const now = new Date();
        const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        setMessages((prev) => [...prev, { text: inputText, isMy: true, time: timeStr }]);
        setInputText("");
    };

    return (
        <div className="max-w-4xl mx-auto font-sans h-screen flex flex-col bg-white pb-6 relative">
            {/* ШАПКА ЯК НА СКРІНШОТІ */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-4">
                    <button onClick={() => navigate(-1)} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    </button>
                    
                    <div className="relative">
                        <div className="w-11 h-11 bg-black text-white rounded-full flex items-center justify-center font-bold">Ф</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>

                    <div>
                        <div className="flex items-center gap-1">
                            <h2 className="font-bold text-lg">Фонд "Допомога"</h2>
                            <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        </div>
                        <p className="text-green-500 text-xs font-medium">Онлайн</p>
                    </div>
                </div>

                <div className="relative">
                    <button onClick={() => setShowMenu(!showMenu)} className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                    </button>
                    
                    {/* МЕНЮ (СКАРГА/БЛОКУВАННЯ) */}
                    {showMenu && (
                        <div className="absolute right-0 top-12 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden z-50">
                            <button className="w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 flex items-center gap-2 border-b border-gray-50">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                Поскаржитись
                            </button>
                            <button className="w-full px-4 py-3 text-left text-sm font-medium text-red-500 hover:bg-red-50 flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                                Заблокувати
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {/* ЗОНА ПОВІДОМЛЕНЬ */}
            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
                <div className="flex justify-center mb-2">
                    <span className="bg-gray-200 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        Сьогодні
                    </span>
                </div>

                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.isMy ? 'items-end' : 'items-start'}`}>
                        <div className={`px-5 py-3 max-w-[70%] text-[15px] ${
                            msg.isMy 
                            ? 'bg-black text-white rounded-t-2xl rounded-bl-2xl rounded-br-sm' 
                            : 'bg-white text-black border border-gray-200 rounded-t-2xl rounded-br-2xl rounded-bl-sm'
                        }`}>
                            {msg.text}
                        </div>
                        <span className="text-[10px] text-gray-400 mt-1 mx-1">{msg.time}</span>
                    </div>
                ))}
            </div>

            {/* ВВЕДЕННЯ ТЕКСТУ */}
            <div className="px-6 mt-auto">
                <p className="text-center text-[10px] text-gray-400 mb-3">
                    <span className="font-bold text-gray-600">Нагадування:</span> будьте ввічливими, не використовуйте нецензурну лексику.
                </p>
                <div className="flex gap-3">
                    <input 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder="Напишіть повідомлення..."
                        className="flex-1 border border-gray-200 rounded-full px-6 py-4 outline-none focus:border-black transition-colors"
                    />
                    <button 
                        onClick={sendMessage}
                        className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-transform hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19V6m0 0l-7 7m7-7l7 7"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatDialog;