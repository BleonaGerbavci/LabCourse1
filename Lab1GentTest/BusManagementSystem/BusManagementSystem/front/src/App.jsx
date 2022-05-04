import Orari from './Orari';
import OrariUpdate from './OrariUpdate';
import OrariAdd from './OrariAdd';
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
          </li>

        </ul>
      </nav>

      <Routes>
     <Route path='/Orari' element={<Orari />}/>
     <Route path='/OrariUpdate' element={<OrariUpdate />}/>
     <Route path='/OrariAdd' element={<OrariAdd />}/>

      </Routes>
    </div>
    </BrowserRouter>
    );
  }

export default App;
