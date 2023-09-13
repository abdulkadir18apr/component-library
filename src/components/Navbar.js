'use client'

import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'



export function Navbar() {

  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
                <text x="20" y="60" font-family="serif" font-size="40" fill="#007acc">UnityKit</text>
        </svg>

          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">
            <li><Link  to="/" className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">Home</Link></li>
            <li><Link to="/components"  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">Components</Link></li>
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Serach Components"
          ></input>
        </div>
        <div className="ml-2 mt-2 hidden lg:block">

        </div>
      </div>
    </div>
  )
}
