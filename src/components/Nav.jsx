import React from 'react'
import { useState } from 'react';

import "../style/Nav.css"

const Nav = ({icon,handleClick,toggle}) => {

    
  return (
      <nav className={`nav-bar bg-gray-400 px-[50px] transition-all duration-500 ease-in ${toggle&&"pl-[200px] ease-in-out"} py-2 `} >
      <button onClick={handleClick}>
        {icon}
          </button>
          <div>
              
          </div>
    </nav>
  )
}

export default Nav