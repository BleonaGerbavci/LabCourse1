import React from 'react'
import { Route ,NavLink, Routes } from 'react-router-dom'
import Linja from './Linja';
import LinjaUpdate from './LinjaUpdate';
import LinjaAdd from './LinjaAdd';

export default function LinjaCrud (){
  return (
    <div>
        
         <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/linja">
              Linja
            </NavLink>
          </li>
         
        </ul>
      </nav>
      <Routes>
         
            <Route path='/linja' element={<Linja />}/>
            <Route path='/linjaUpdate' element={<LinjaUpdate />}/>
            <Route path='/linjaAdd' element={<LinjaAdd />}/>
      </Routes>
       

    </div>
  )
}
