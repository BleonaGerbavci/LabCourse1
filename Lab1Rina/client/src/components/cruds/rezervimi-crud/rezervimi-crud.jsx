import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Rezervimi from './Rezervimi'
import RezervimiAdd from './RezervimiAdd'
import RezervimiUpdate from './RezervimiUpdate'


export default function RezervimiCrud(){
    return(
        <div>
    
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/rezervimi">
            Rezervimi
            </NavLink>
          </li>
 
        </ul>
        </nav>
      <Routes>   
            <Route path='/rezervimi' element={<Rezervimi />}/>
            <Route path='/rezervimiUpdate' element={<RezervimiUpdate />}/>
            <Route path='/rezervimiAdd' element={<RezervimiAdd />}/>
      </Routes>


        </div>
    )
}