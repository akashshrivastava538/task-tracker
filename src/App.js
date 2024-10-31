import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskManager from './components/TaskManager';
import { Login } from './components/Login';
import './styles/style.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Provider store={store}>
      <div className="app-container">
        {isLoggedIn ? (
          <>
            <h1>Task Tracker</h1>
            <TaskForm />
            <TaskManager />
          </>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    </Provider>
  );
}

export default App;









