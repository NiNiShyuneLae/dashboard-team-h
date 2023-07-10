import React from "react";

const UserTable = ({ user }) => {
  return (
    <>
      <tbody>
        <tr className="   ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={user.image}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="mb-1 text-white font-semibold hover:text-primary cursor-pointer">
                  {user.name}
                </h1>
                <h1 className="text-textColor text-xs ">{user.gamil}</h1>
              </div>
            </div>
          </th>
          <td className="px-6 py-4 font-semibold text-white">{user.date}</td>
          <td className="px-6 py-4 font-semibold text-white">{user.amount}</td>
          <td className={`px-6 py-4 `}>
            <button
              className={`px-4 py-2 text-xs  font-medium  rounded-lg  ${
                user.status === "approved"
                  ? "text-green-700 bg-green-100"
                  : "text-red-700 bg-red-100"
              }`}
            >
              {user.status}
            </button>
          </td>
          <td className="px-6 py-4 ">
            <button className="bg-primary px-4 py-2 text-xs font-textColor font-medium text-white rounded-lg">
              View
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UserTable;
