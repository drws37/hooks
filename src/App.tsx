/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react';
import staregeLogo from './assets/starege.png';
import boxLogoRight from './assets/box-R.webp';
import boxLogoLeft from './assets/box-L.webp';
import './App.css';
import UsersList from './components/Users/UsersList';
import type { UserData } from './components/Users/typeUsers';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState('main');
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    fetch('https://65b6163eda3a3c16ab002eec.mockapi.io/api/app/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <button onClick={() => setPage('main')} type="button">
          Home
        </button>
        <button onClick={() => setPage('users')} type="button">
          Users
        </button>
      </div>
      <div>
        <a href="https://github.com/Elbrus-Bootcamp" target="_blank" rel="noreferrer">
          <img src={staregeLogo} className="logo elbrus" alt="Elbrus logo" />
        </a>
      </div>
      <div className='box-card'>
        <img className="box-logo" src={boxLogoRight} alt="" />
        <h2> Учим хуки (hooks) </h2>

        <img className="box-logo" src={boxLogoLeft} alt="" />
      </div>
      {page === 'main' ? (
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
      ) : (
        <div className="profiles-main">
          <UsersList users={users} setUsers={setUsers} />
        </div>
      )}
    </div>
  );
}

export default App;
