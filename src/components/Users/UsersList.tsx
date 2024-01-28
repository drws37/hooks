/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useState } from 'react';
import User from './User';
import type { UserData } from './typeUsers';

function UsersList({
  users,
  setUsers,
}: {
  users: UserData[];
  setUsers: (user: UserData[]) => void;
}): JSX.Element {
  // хуки для инпутов
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // функция добавления юзера
  const addUser = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch('https://65b6163eda3a3c16ab002eec.mockapi.io/api/app/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
      }),
    })
      .then((response) => response.json())
      .then((data) => setUsers([...users, data]));
  };

  const onHandleDelete = (id: number):void => {
    setUsers(users.filter((user)=> user.id !== id))

    fetch(`https://65b6163eda3a3c16ab002eec.mockapi.io/api/app/users/${id}`, {
      method: 'DELETE',
    })
  }

  return (
    <>
      <div className="add-form">
        <form onSubmit={addUser}>
          <input placeholder='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input placeholder='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input placeholder='phone' type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button type="submit">add profile</button>
        </form>
      </div>
      <div className='profiles-list'>
        {users.map((user) => (
          <User user={user} onHandleDelete={onHandleDelete} key={user.id} />
        ))}
      </div>
    </>
  );
}

export default UsersList;
