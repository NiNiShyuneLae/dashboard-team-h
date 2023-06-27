import React from "react";

const UserCard = ({ user }) => {
  return (
    <div key={user.id} className="bg-white text-center py-10 px-16">
      <div className="mb-3">
        <img
          src={user.image}
          className="w-16 h-16 rounded-full mx-auto"
          alt=""
        />
      </div>

      <h1 className="font-semibold mb-2">{user.name}</h1>
      <h1 className="text-sm mb-3">{user.positon}</h1>
      <div className="flex items-center justify-center mb-3">
        <div className="border bg-white p-3 mx-auto border-dashed w-28 ">
          <h1 className="font-semibold text-gray-700 text-sm">
            {user.earning}
          </h1>
          <h1 className="text-textColor font-semibold text-sm">Earnings</h1>
        </div>
        <div className="border bg-white p-3 mx-auto border-dashed w-28 ">
          <h1 className="font-semibold text-gray-700 text-sm">{user.tasks}</h1>
          <h1 className="text-textColor font-semibold text-sm">Tasks</h1>
        </div>
        <div className="border bg-white p-3 mx-auto border-dashed w-28 ">
          <h1 className="font-semibold text-gray-700 text-sm">{user.sale}</h1>
          <h1 className="text-textColor font-semibold text-sm">Sales</h1>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
