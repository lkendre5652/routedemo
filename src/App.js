import React from 'react'
import { Contact } from './common/Contact';
import { About } from './common/About';
import {NavLink, Routes, Route } from 'react-router-dom';
const App = () =>{
  return(<>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>
  <Routes>
    <Route exact path="/about" element={ <About /> } />
    <Route exact path="/contact" element={ <Contact /> } />
  </Routes>    
  </>)
}
export default App;