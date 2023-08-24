import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Passport from './Passport';
import Home from './Home';
import About from './About';
import Dropdown from './Dropdown';
import Services from './Services';
import Blog from './Blog';
import Contactus from './Contactus';
import Menuone from './Menuone';
import Menutwo from './Menutwo';
import Menuthree from './Menuthree';



export default function Nav() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Passport/>} />
    <Route path='/home' element={<Home/>} />
  <Route path='/about' element={<About/>}/>
    <Route path='/dropdown' element={<Dropdown/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='/contact' element={<Contactus/>} />
    <Route path='/menuone' element={<Menuone/>} />
    <Route path='/menutwo' element={<Menutwo/>} />
    <Route path='/menuthree' element={<Menuthree/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}
