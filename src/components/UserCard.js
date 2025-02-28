import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
      <h2 className="text-lg font-semibold mt-2">{user.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
      <p className="text-gray-600 dark:text-gray-300">{user.phone}</p>
      <p className="text-gray-600 dark:text-gray-300">{user.company.name}</p>
    </div>
  );
};

export default UserCard;