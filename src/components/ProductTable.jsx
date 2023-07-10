import React from "react";

const ProductTable = ({ item }) => {
  return (
    <>
      <tbody >
        <tr className=" text-textColor ">
          <th
            scope="row"
            className="px-6 py-4 font-medium  whitespace-nowrap "
          >
            <div className="">
              <h1>{item.name}</h1>
            </div>
          </th>
          <td className="px-6 py-4 font-semibold">{item.id}</td>
          <td className="px-6 py-4 font-semibold">{item.date}</td>
          <td className={`px-6 py-4 text-center`}>${item.price}</td>
          <td className="px-6 py-4  ">
            <button
              className={`bg-secondary px-4 py-2 text-xs  rounded-lg `}
            >
              {item.status}
            </button>
          </td>
          <td className="px-6 py-4 font-semibold">{item.qty} PCS</td>
        </tr>
      </tbody>
    </>
  );
};

export default ProductTable;
