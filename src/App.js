import React from 'react';
import {CodeBlock} from './components/CodeBlock'
import {Home} from './pages/Home/Home';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Components } from './pages/Components/Components';
import Avatar from './pages/Avatar/Avatar';
import Buttons from './pages/Buttons/Buttons';
import Cards from './pages/Cards/Card';
import Headings from './pages/Headings/Headings';
import Texts from './pages/TextsView/Texts'
import Image from './pages/Images/Image';


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
        <Route path='/components/button' element={<Buttons/>}/>
        <Route path='/components/cards' element={<Cards/>}/>
        <Route path='/components/headings' element={<Headings/>}/>
        <Route path='/components/texts' element={<Texts/>}/>
        <Route path='/components/images' element={<Image/>}/>

      </Routes>
      
    </div>
  );
}

export default App