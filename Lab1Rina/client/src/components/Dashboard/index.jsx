import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import GarazhaCrud from '../cruds/garazha-crud/garazha-crud'
import Garazha from '../../components/cruds/garazha-crud/Garazha';
import GarazhaAdd from '../cruds/garazha-crud/GarazhaAdd';
import GarazhaUpdate from '../cruds/garazha-crud/GarazhaUpdate';
import PompaCrud from '../cruds/pompa-crud/pompa-crud';
import Pompa from '../cruds/pompa-crud/Pompa';
import PompaAdd from '../cruds/pompa-crud/PompaAdd';
import PompaUpdate from '../cruds/popma-crud/PompaUpdate';
import RezervimiCrud from '../cruds/rezervimi-crud/rezervimi-crud';
import Rezervimi from '../cruds/rezervimi-crud/Rezervimi';
import RezervimiAdd from '../cruds/rezervimi-crud/RezervimiAdd';
import RezervimiUpdate from '../cruds/rezervimi-crud/RezervimiUpdate';
import RezervoAutobusin from '../cruds/rezervoAutobusin-crud/RezervoAutobusin';
import RezervoAutobusinCrud from '../cruds/rezervoAutobusin-crud/rezervoAutobusin-crud';
import RezervoAutobusinAdd from '../cruds/rezervoAutobusin-crud/rezervoAutobusinAdd';
import RezervoAutobusinUpdate from '../cruds/rezervoAutobusin-crud/rezervoAutobusinUpdate';
import Navbar from '../Navbar';

import GarazhaIcon from '../../images/crud-img/garazha-crud.svg'
import PompaIcon from '../../images/crud-img/pompa-icon.svg'
import RezervimiIcon from '../../images/crud-img/rezervimi-icon.svg'
import RezervoAutobusinIcon from '../../images/crud-img/rezervoAutobusin-icon.svg'
import './dashboard-style.css'



export default function Dashboard(){
  return (
    <div id="dashboard">
        <Navbar />
       
        <div className ="container">
        

        <div className='navlinks'>
          <NavLink  to="./garazha">
                  <img src ={GarazhaIcon} alt="garazha-img" className='icons' />
                  <p>Garazha</p>
          </NavLink>
          <NavLink  to="./pompa">
                  <img src ={PompaIcon} alt="pompa-img" className='icons' />
                  <p>Pompa</p>
          </NavLink>
          <NavLink  to="./rezervimi">
                  <img src ={RezervimiIcon} alt="rezervimi-img" className='icons' />
                  <p>Rezervimi</p>
          </NavLink>
          <NavLink  to="./rezervoAutobusin">
                  <img src ={RezervoAutobusinIcon} alt="rezervoAutobusin-img" className='icons' />
                  <p>RezervoAutobusin</p>
          </NavLink>
        </div>

 

        </div>
        
        <Routes>
            <Route path='/GarazhaCrud/*' element={<GarazhaCrud />}></Route>
            <Route path='/garazha/*' element={<Garazha />}/>
            <Route path='/garazhaAdd' element={<GarazhaAdd />}/>
            <Route path='/garazhaUpdate' element={<GarazhaUpdate />}/>
            <Route path='/PompaCrud' element={<PompaCrud />}/>
            <Route path='/pompa' element={<Pompa />}/>
            <Route path='/pompaUpdate' element={<PompaUpdate />}/>
            <Route path='/pompaAdd' element={<PompaAdd />}/>
            <Route path='/RezervimiCrud/*' element={<RezervimiCrud />} />
            <Route path='/rezervimi' element={<Rezervimi />} />
            <Route path='/rezervimiAdd' element={<RezervimiAdd />} />
            <Route path='/rezervimiUpdate' element={<RezervimiUpdate />} />
            <Route path='/RezervoAutobusinCrud/*' element={<RezervoAutobusinCrud />} />
            <Route path='/rezervoAutobusin' element={<RezervoAutobusin />} />
            <Route path='/rezervoAutobusinAdd' element={<RezervoAutobusinAdd />} />
            <Route path='/rezervoAutobusinUpdate' element={<RezervoAutobusinUpdate />} />    
            

        </Routes>
       
    </div>
  )
}