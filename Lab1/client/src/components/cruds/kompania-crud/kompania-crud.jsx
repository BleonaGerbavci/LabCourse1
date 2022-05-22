import React from 'react'
import { BrowserRouter,  Route ,NavLink, Routes } from 'react-router-dom'
import Kompania from './Kompania';
import KompaniaUpdate from './KompaniaUpdate';
import KompaniaAdd from './KompaniaAdd';

export default function KompaniaCrud (){
  return (
    <div>
        
         <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/kompania">
              Kompania
            </NavLink>
          </li>
         
        
        </ul>
      </nav>
      <Routes>
         
            <Route path='/kompania' element={<Kompania />}/>
            <Route path='/kompaniaUpdate' element={<KompaniaUpdate />}/>
            <Route path='/kompaniaAdd' element={<KompaniaAdd />}/>
      </Routes>
       

    </div>
  )
}

