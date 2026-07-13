import './App.css';
import { useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import sampleItems from './data/sampleData.js';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [items, setItems] = useState (sampleItems);
  const [accounts, setAccounts] = useState ([]);
  const [isAuthorized, setIsAuthorized] = useState (false);
  const [isAboutOpen, setIsAboutOpen] = useState (false);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setItems(items.filter((item) => id !== item.id))
  };
  const handleAdd = (newItem) => {
    setItems([...items, newItem])
  };
  const handleEdit = (updatedItem) => {
    setItems(items.map((item) => item.id === updatedItem.id ? updatedItem : item));
  };
  const handleLogin = (userInfo) => {
    setCurrentUser(userInfo);
    setIsAuthorized(true)
    navigate('/dashboard');
  };

  const handleLogout = () => {
   setCurrentUser(null);
    setIsAuthorized(false)
    navigate('/');
  };

  const handleOpenAbout = () => {
    setIsAboutOpen(true);
  };
 
  return (
    <main className='App'>
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={isAuthorized ? <DashboardPage items={items} 
        currentUser={currentUser} onAdd={handleAdd} onDelete={handleDelete} 
        onEdit={handleEdit} onLogout={handleLogout} 
    onOpenAbout={handleOpenAbout}/> 
        : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>


  )
};

export default App;

