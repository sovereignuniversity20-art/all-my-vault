import './App.css';
import { useState } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [items, setItems] = useState ([]);
  const [accounts, setAccounts] = useState ([])
  const [isAuthorized, setIsAuthorized] = useState (false);

  if (isAuthorized) {
  return (
    <main className='App'>
     <DashboardPage />
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
