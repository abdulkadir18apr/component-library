// Sidebar.js

import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-white text-black w-64 min-h-screen border-r border-gray-900">
      <ul className="mt-4">
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/avatar">Avatars</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/alerts">Alerts</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/badges">Badges</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800  hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/buttons">Buttons</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/cards">Cards</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/headings">Headings</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/texts">Texts</Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-800 hover:text-white cursor-pointer transition duration-300 ease-in-out">
          <Link to="/components/images">Images</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
