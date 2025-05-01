import React from 'react';

export const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
};
