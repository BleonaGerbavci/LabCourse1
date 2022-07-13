import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Garazha from './Garazha';
import GarazhaUpdate from './GarazhaUpdate';
import GarazhaAdd from './GarazhaAdd';
import GarazhaIcon from '../../../images/crud-img/Garazha-crud.svg'

export default function GarazhaCrud (){
  return (
    <div>
          <NavLink  to="./garazha">
                  <img src ={GarazhaIcon} alt="Garazha-img" className='icons' />
                  <p>Garazha</p>
          </NavLink>

      <Routes>
         
            <Route path='/garazha' element={<Garazha />}/>
            <Route path='/garazhaUpdate' element={<GarazhaUpdate />}/>
            <Route path='/garazhaAdd' element={<GarazhaAdd />}/>
      </Routes>

    </div>
  )
}

