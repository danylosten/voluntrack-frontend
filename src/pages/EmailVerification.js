// src/pages/EmailVerification.js
import React from 'react';

// --- Іконки ---
const EnvelopeIcon = () => (
  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

export const EmailVerification = ({ onConfirm, onLoginInstead }) => {
  // Для демо-версії використовуємо статичний email
  const userEmail = "veronika.uhnich.sa.2025@lpnu.ua";

  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Фонові плями */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-100 rounded-full blur-3xl opacity-60"></div>

      {/* Основний контент */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 w-full max-w-lg mx-auto">
        
        {/* Іконка конверта */}
        <div className="bg-gray-50 border border-gray-100 p-5 rounded-full mb-6">
          <EnvelopeIcon />
        </div>

        {/* Тексти */}
        <h2 className="text-2xl font-medium text-black mb-3 text-center">Перевірте вашу пошту</h2>
        <p className="text-sm text-gray-500 text-center mb-1">
          Ми відправили лист з підтвердженням на адресу:
        </p>
        <p className="text-sm font-semibold text-black mb-8 text-center">
          {userEmail}
        </p>
        <p className="text-xs text-gray-400 text-center mb-10 max-w-sm leading-relaxed">
          Натисніть на посилання у листі, щоб завершити реєстрацію. Якщо ви не бачите листа, перевірте папку "Спам".
        </p>

        {/* Кнопки */}
        <div className="w-full max-w-md space-y-4">
          <button 
            onClick={onConfirm}
            className="w-full py-4 bg-black text-white rounded-2xl font-medium text-base shadow-lg hover:bg-zinc-800 transition-colors"
          >
            Підтвердити email (демо)
          </button>
          
          <button className="w-full flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl font-medium text-base hover:bg-gray-50 transition-colors">
            <RefreshIcon />
            Відправити лист повторно
          </button>
        </div>

        {/* Посилання внизу */}
        <p className="mt-10 text-sm text-gray-500">
          Вже підтвердили? <span onClick={onLoginInstead} className="text-black font-medium cursor-pointer hover:underline">Увійти</span>
        </p>
      </div>
    </div>
  );
};