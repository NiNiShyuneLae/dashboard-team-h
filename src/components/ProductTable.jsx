import React from 'react'

const ProductTable = ({ item }) => {
    //  {
    //                               let colorClass = '';

    //                               switch (item.status) {
    //                                   case "In stock":
    //                                       colorClass = 'text-green-500';
    //                                       break;
    //                                   case "Out of Stock":
    //                                       colorClass = 'text-red-500';
    //                                       break;
    //                                   case "Low Stock":
    //                                       colorClass = 'text-yellow-500';
    //                                       break;
    //                                   default:
                                          
                                         
    //                               }
    //                           }
  return (
    <>
          <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <div className=''>
                          <h1>{item.name}</h1>
                      </div>
                            </th>
                            <td className="px-6 py-4 font-semibold">
                                {item.id}
                            </td>
                            <td className="px-6 py-4 font-semibold">
                               {item.date}
                            </td>
                  <td className={`px-6 py-4 text-center`} >
                      ${item.price}
                     
                            </td>
                            <td className="px-6 py-4 text-right ">
                      <button className={`bg-gray-100 px-4 py-2 text-xs font-textColor font-medium hover:bg-gray-200 text-textColor rounded-lg `}>
                          {item.status}
                               </button>
                  </td>
                  <td className="px-6 py-4 font-semibold">
                               {item.qty} PCS
                            </td>
                        </tr>
                    
                    </tbody>
      </>
  )
}

export default ProductTable