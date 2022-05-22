import React from 'react'
import { Route ,NavLink, Routes } from 'react-router-dom'
import Orari from './Orari'
import OrariUpdate from './OrariUpdate'
import OrariAdd from './OrariAdd'

export default function LinjaCrud (){
  return (
    <div>
        
         <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/orari">
              Orari
            </NavLink>
          </li>
         
        
        </ul>
      </nav>
      <Routes>
         
            <Route path='/orari' element={<Orari />}/>
            <Route path='/orariUpdate' element={<OrariUpdate />}/>
            <Route path='/orariAdd' element={<OrariAdd />}/>
      </Routes>
       

    </div>
  )
}
