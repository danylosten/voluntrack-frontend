import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Імпорти всіх ваших сторінок
import { WelcomeScreen as Welcome } from './pages/Welcome';
import { LoginScreen as Login } from './pages/Login';
import { RoleSelection } from './pages/RoleSelection';
import { EmailVerification } from './pages/EmailVerification'; 
import { OrganizationForm } from './pages/OrganizationForm';
import { VolunteerForm } from './pages/VolunteerForm'; 
import Home from './pages/Home';
import { OrganizationForm } from './pages/OrganizationForm';
import { Home } from './pages/Home';
import { CreateProject } from './pages/CreateProject';
import { EditProject } from './pages/EditProject';
import { ProjectStats } from './pages/ProjectStats';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/register/organization" element={<OrganizationForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register/volunteer" element={<VolunteerForm />} />
        {/* Автоматичне повернення на головну, якщо адреса невірна */}
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/edit-project" element={<EditProject />} />
        <Route path="/project-stats" element={<ProjectStats />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

// ЦЬОГО РЯДКА НЕ ВИСТАЧАЛО:
export default App;