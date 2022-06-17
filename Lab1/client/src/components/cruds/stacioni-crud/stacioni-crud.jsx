import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Stacioni from './Stacioni'
import StacioniAdd from './StacioniAdd'
import StacioniUpdate from './StacioniUpdate'


export default function StacioniCrud(){
    return(
        <div>
    
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/stacioni">
              Stacioni
            </NavLink>
          </li>
 
        </ul>
        </nav>
      <Routes>   
            <Route path='/stacioni' element={<Stacioni />}/>
            <Route path='/stacioniUpdate' element={<StacioniUpdate />}/>
            <Route path='/stacioniAdd' element={<StacioniAdd />}/>
      </Routes>


        </div>
    )
}