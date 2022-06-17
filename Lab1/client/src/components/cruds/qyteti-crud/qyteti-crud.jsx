import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Qyteti from './Qyteti'
import QytetiAdd from './QytetiAdd'
import QytetiUpdate from './QytetiUpdate'


export default function QytetiCrud(){
    return(
        <div>
    
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/qyteti">
              Qyteti
            </NavLink>
          </li>
 
        </ul>
        </nav>
      <Routes>   
            <Route path='/qyteti' element={<Qyteti />}/>
            <Route path='/qytetiUpdate' element={<QytetiUpdate />}/>
            <Route path='/qytetiAdd' element={<QytetiAdd />}/>
      </Routes>


        </div>
    )
}