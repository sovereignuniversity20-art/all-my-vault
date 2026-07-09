import './App.css';
import { useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [items, setItems] = useState ([]);
  const [accounts, setAccounts] = useState ([])
  const [isAuthorized, setIsAuthorized] = useState (false);

  const handleDelete = (id) => {
    setItems(items.filter((item) => id !== item.id))
  };
  const handleAdd = (newItem) => {
    setItems([...items, newItem])
  };
  const handleEdit = (updatedItem) => {
    setItems(items.map((item) => item.id === updatedItem.id ? updatedItem : item));
  };



  if (isAuthorized) {
  return (
    <main className='App'>
     <DashboardPage items={items} currentUser={currentUser} onAdd={handleAdd} onDelete={handleDelete} onEdit={handleEdit} />
    </main>
  );
  } else {
    return (
    <main className='App'>
      <LoginPage onLogin={setIsAuthorized} />
    </main>
);
}

};

export default App
