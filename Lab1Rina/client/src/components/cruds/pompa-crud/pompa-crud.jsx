import React from 'react'
import { Route ,NavLink, Routes } from 'react-router-dom'
import Pompa from './Pompa';
import PompaUpdate from './PompaUpdate';
import PompaAdd from './PompaAdd';

export default function PompaCrud (){
  return (
    <div>
        
         <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/pompa">
              Pompa
            </NavLink>
          </li>
         
        </ul>
      </nav>
      <Routes>
         
            <Route path='/pompa' element={<Pompa />}/>
            <Route path='/pompaUpdate' element={<PompaUpdate />}/>
            <Route path='/pompaAdd' element={<PompaAdd />}/>
      </Routes>
       

    </div>
  )
}
