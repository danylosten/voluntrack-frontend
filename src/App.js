import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { WelcomeScreen as Welcome } from './pages/Welcome';
import { LoginScreen as Login } from './pages/Login';
import { RoleSelection } from './pages/RoleSelection';
import { EmailVerification } from './pages/EmailVerification'; 
import { OrganizationForm } from './pages/OrganizationForm';
import { VolunteerForm } from './pages/VolunteerForm'; 
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/register/organization" element={<OrganizationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register/volunteer" element={<VolunteerForm />} />
        {/* Автоматичне повернення на головну, якщо адреса невірна */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;