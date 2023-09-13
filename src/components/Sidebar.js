// Sidebar.js

import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white text-black w-64 min-h-screen border-r border-gray-900">

      <ul className="mt-4">
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <a href="#avatars">Avatars</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800  hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <a href="#buttons">Buttons</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <a href="#cards">Cards</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <a href="#headings">Headings</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <a href="#texts">Texts</a>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <a href="#images">Images</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
