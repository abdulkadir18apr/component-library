import React from 'react'
import { Navbar } from '../../components/Navbar'

import "./Home.css"
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'

export  function Home() {
  return (
    <div className='home'>
        <div className="header">
            <h3>Empower Your Unity with Limitless Components: UnityKit - Where Creativity Meets Efficiency</h3>
           <Link to="/components"><button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Get Started
      </button></Link>
        </div>


    </div>
  )
}
