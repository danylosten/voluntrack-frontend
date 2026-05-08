import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const OrganizationForm = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 relative">
        <BackButton onClick={() => navigate('/role-selection')} />
        
        <div className="flex flex-col items-center mb-8">
          <div className="bg-black p-3 rounded-2xl mb-4">
            <span className="text-white text-2xl">🏢</span>
          </div>
          <h2 className="text-2xl font-bold text-black">Організація</h2>
          <p className="text-gray-500 text-sm">Заповніть інформацію про себе</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Назва організації</label>
            <input type="text" placeholder="Назва вашої організації" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="your@email.com" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Місцезнаходження</label>
            <input type="text" placeholder="Київ, Україна" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Про організацію</label>
            <textarea placeholder="Розкажіть про вашу місію..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm h-24" />
          </div>

          <button type="button" className="w-full py-4 bg-black text-white rounded-2xl font-semibold shadow-lg mt-4">
            ✓ Завершити реєстрацію
          </button>
        </form>
      </div>
    </div>
  );
};