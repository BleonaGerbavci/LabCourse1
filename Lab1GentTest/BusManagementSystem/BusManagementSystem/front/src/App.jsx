import Orari from './Orari';
import OrariUpdate from './OrariUpdate';
import OrariAdd from './OrariAdd';
import Autobusi from './Autobusi/Autobusi';
import AutobusiUpdate from './Autobusi/AutobusiUpdate';
import AutobusiAdd from './Autobusi/AutobusiAdd';
import Klienti from './Klienti/Klienti';
import KlientiUpdate from './Klienti/KlientiUpdate';
import KlientiAdd from './Klienti/KlientiAdd';

import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Dashboard</h1> 
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
         
          </li>
     <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Orari">
      Orari
            </NavLink>
            &nbsp; 
            &nbsp; 
           
            <NavLink className="btn btn-light btn-outline-primary" to="/Autobusi">
      Autobusi
            </NavLink>
            &nbsp; 
            &nbsp; 
            <NavLink className="btn btn-light btn-outline-primary" to="/Klienti">
      Klienti
            </NavLink>
          </li>

        </ul>
      </nav>

      <Routes>
     <Route path='/Orari' element={<Orari />}/>
     <Route path='/OrariUpdate' element={<OrariUpdate />}/>
     <Route path='/OrariAdd' element={<OrariAdd />}/>
     <Route path='/Autobusi' element={<Autobusi />}/>
     <Route path='/AutobusiUpdate' element={<AutobusiUpdate />}/>
     <Route path='/AutobusiAdd' element={<AutobusiAdd />}/>

     <Route path='/Klienti' element={<Klienti />}/>
     <Route path='/KlientiUpdate' element={<KlientiUpdate />}/>
     <Route path='/KlientiAdd' element={<KlientiAdd />}/>


      </Routes>
    </div>
    </BrowserRouter>
    );
  }

export default App;
