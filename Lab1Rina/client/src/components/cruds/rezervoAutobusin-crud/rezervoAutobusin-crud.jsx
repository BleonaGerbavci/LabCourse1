import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import RezervoAutobusin from './RezervoAutobusin'
import RezervoAutobusinAdd  from './RezervoAutobusinAdd'
import RezervoAutobusinUpdate from './RezervoAutobusinUpdate'



export default function RezervoAutobusinCrud(){
    return(
        <div>
    
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/rezervoAutobusin">
            RezervoAutobusin
            </NavLink>
          </li>
 
        </ul>
        </nav>
      <Routes>   
            <Route path='/rezervoAutobusin' element={<RezervoAutobusin />}/>
            <Route path='/rezervoAutobusinUpdate' element={<RezervoAutobusinUpdate />}/>
            <Route path='/rezervoAutobusinAdd' element={<RezervoAutobusinAdd />}/>
      </Routes>


        </div>
    )
}