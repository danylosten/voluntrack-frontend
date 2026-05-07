// src/components/BackButton.js
import React from 'react';

export const BackButton = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="flex items-center text-sm text-gray-500 hover:text-black transition-colors mb-6 self-start group"
    >
      <svg 
        className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Назад
    </button>
  );
};