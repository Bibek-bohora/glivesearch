import React from 'react'

import { Routes, Route } from "react-router-dom";
import Search from './Search ';
import Service from './Service';
import About from './About';
import Home from './Home';
import Menu from './Menu';


const App = () => {
  return (
    <div>
          <Menu />

          <Routes>
               
               <Route exact path='/home' element={<Home />}/>
               <Route path='/about' element={<About />}/>
               <Route path='/search' element={<Search />}/>
               <Route path='/service' element={<Service />}/>
               


          </Routes>
    </div>
  )
}

export default App;
