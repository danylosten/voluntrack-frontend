import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { WelcomeScreen } from './pages/Welcome';
import { RoleSelection } from './pages/RoleSelection';
import { OrganizationForm } from './pages/OrganizationForm';
import { LoginScreen } from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/register/organization" element={<OrganizationForm />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </div>
  );
}

export default App;