// src/components/ui/Input.js
import React from 'react';

// Простий компонент іконки (можна замінити на Heroicons або React Icons)
const IconWrapper = ({ icon, className }) => {
  return <span className={`absolute left-4 text-gray-400 ${className}`}>{icon}</span>;
};

export const Input = ({ label, icon, type = "text", error, ...props }) => {
  return (
    <div className="w-full mb-4">
      {label && <label className="block text-left text-sm font-medium text-gray-700 mb-1.5">{label}</label>}
      <div className="relative flex items-center">
        {icon && <IconWrapper icon={icon} />}
        <input
          type={type}
          {...props}
          className={`
            w-full px-4 py-3 border rounded-xl text-base placeholder:text-gray-400
            transition-all duration-200 outline-none
            ${icon ? 'pl-11' : 'pl-4'}
            ${error ? 'border-red-500 focus:ring-1 focus:ring-red-200' : 'border-gray-200 focus:border-black focus:ring-1 focus:ring-black/10'}
          `}
        />
        {type === "password" && (
           <button type="button" className="absolute right-4 text-gray-400 hover:text-black">
             {/* Іконка ока для показу пароля */}
             👁️
           </button>
        )}
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};