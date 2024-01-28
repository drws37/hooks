import React from 'react';
import { UserData } from './typeUsers';

function User({
  user,
  onHandleDelete,
}: {
  user: UserData;
  onHandleDelete: (id: number) => void;
}): JSX.Element {
  return (
    <div className="profile-card">
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <button onClick={() => onHandleDelete(user.id)} type="button">
        Delete
      </button>
    </div>
  );
}

export default User;
