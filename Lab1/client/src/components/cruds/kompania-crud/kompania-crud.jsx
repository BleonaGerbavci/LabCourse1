import React from 'react'
import {Route ,NavLink, Routes } from 'react-router-dom'
import Kompania from './Kompania';
import KompaniaUpdate from './KompaniaUpdate';
import KompaniaAdd from './KompaniaAdd';
import KompaniaIcon from '../../../images/crud-img/kompania-crud.svg'

export default function KompaniaCrud (){
  return (
    <div>
          <NavLink  to="./kompania">
                  <img src ={KompaniaIcon} alt="kompania-img" className='icons' />
                  <p>Kompania</p>
          </NavLink>

      <Routes>
         
            <Route path='/kompania' element={<Kompania />}/>
            <Route path='/kompaniaUpdate' element={<KompaniaUpdate />}/>
            <Route path='/kompaniaAdd' element={<KompaniaAdd />}/>
      </Routes>

    </div>
  )
}

