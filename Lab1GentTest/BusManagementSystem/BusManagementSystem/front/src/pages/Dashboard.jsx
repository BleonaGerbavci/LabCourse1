import React from 'react';
import Autobusi from '../cruds/Autobusi/Autobusi';
import AutobusiUpdate from '../cruds/Autobusi/AutobusiUpdate';
import AutobusiAdd from '../cruds/Autobusi/AutobusiAdd';
import Oferta from '../cruds/Oferta/Oferta';
import OfertaUpdate from '../cruds/Oferta/OfertaUpdate';
import OfertaAdd from '../cruds/Oferta/OfertaAdd';
import Pushimi from '../cruds/Pushimet/Pushimet';
import PushimetUpdate from '../cruds/Pushimet/PushimetUpdate';
import PushimetAdd from '../cruds/Pushimet/PushimetAdd';
import Rent from '../cruds/RentaBus/RentAutobusin';
import UpdateRent from '../cruds/RentaBus/UpdateRent';
import RentAdd from '../cruds/RentaBus/RentAdd';
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';





export default function Dashboard() {
  return (
    <div id="dashboard">
    <div>
      <br /> 
    <nav className="navbar navbar-expand-sm bg-light navbar-dark">
    <ul className="navbar-nav">
  <li className="nav-item- m-2">
        
           
            <NavLink className="btn btn-light btn-outline-primary" to="./Autobusi">
      Autobusi
            </NavLink>
            &nbsp; 
            &nbsp; 
            <NavLink className="btn btn-light btn-outline-primary" to="./Oferta">
      Ofertat
            </NavLink>
            &nbsp; 
            &nbsp; 
            <NavLink className="btn btn-light btn-outline-primary" to="./Rent">
      Rent a Bus
            </NavLink>
            &nbsp;
            &nbsp;
            <NavLink className="btn btn-light btn-outline-primary" to="./Pushimet">
      Pushimet
            </NavLink>
          
            
       
            
          </li>

        </ul>
      </nav>
</div>

      

      <Routes>
    
     <Route path='/Autobusi' element={<Autobusi />}/>
     <Route path='/AutobusiUpdate' element={<AutobusiUpdate />}/>
     <Route path='/AutobusiAdd' element={<AutobusiAdd />}/>

     <Route path='/Oferta' element={<Oferta />}/>
     <Route path='/OfertaUpdate' element={<OfertaUpdate />}/>
     <Route path='/OfertaAdd' element={<OfertaAdd />}/>

     <Route path='/Rent' element={<Rent/>}/>
     <Route path='/UpdateRent' element={<UpdateRent />}/>
     <Route path='/RentAdd' element={<RentAdd />}/>
     <Route path='/Pushimet' element={<Pushimi />}/>
     <Route path='/PushimetAdd' element={<PushimetAdd />}/>
     <Route path='/PushimetUpdate' element={<PushimetUpdate />}/>




      </Routes>
  </div>
  )
}









