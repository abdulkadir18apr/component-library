import React from 'react';
import {CodeBlock} from './components/CodeBlock'
import Home from './pages/Home/Home';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Components } from './pages/Components/Components';
import Avatar from './pages/Avatar/Avatar';


function App() {
  const code = `function greet() {
    console.log("Hello, world!");
  }`;

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/components' element={<Components/>}/>
        <Route path='/components/avatar' element={<Avatar/>}/>

      </Routes>
      
    </div>
  );
}

export default App