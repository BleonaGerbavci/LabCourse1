import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import User from './User'
import UserAdd  from './UserAdd'
import UserUpdate from './UserUpdate'



export default function UserCrud(){
    return(
        <div>
    
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/user">
              User
            </NavLink>
          </li>
 
        </ul>
        </nav>
      <Routes>   
            <Route path='/user' element={<User />}/>
            <Route path='/userUpdate' element={<UserUpdate />}/>
            <Route path='/userAdd' element={<UserAdd />}/>
      </Routes>


        </div>
    )
}