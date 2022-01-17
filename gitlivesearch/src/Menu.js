import React from 'react'

import {NavLink} from 'react-router-dom'

import "./App.css"


const Menu = () => {
    return (
        <div>

           <div className="wrap">
         <div className="nav_style">

         

              <NavLink exact to="/home" activeClassName="active">    home</NavLink>
              <NavLink exact to="/about" activeClassName="active">   about</NavLink>
              <NavLink exact to="/search" activeClasName="active">   search</NavLink>
              <NavLink exact to="/service" activeClassName="active"> service</NavLink>
            
         
            
           </div>

           </div>
         

        
        </div>
    )
}

export default Menu;
