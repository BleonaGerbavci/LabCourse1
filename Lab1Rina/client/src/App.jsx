// import Home from './features/Home/Home';
import Pompa  from './features/Pompa/Pompa';
import PompaUpdate from './features/Pompa/PompaUpdate';
import PompaAdd from './features/Pompa/PompaAdd';
import Garazha from './features/Garazha/Garazha';
import GarazhaUpdate from './features/Garazha/GarazhaUpdate';
import GarazhaAdd from './features/Garazha/GarazhaAdd';
import Rezervimi  from './features/Pompa/Pompa';
import RezervimiUpdate from './features/Pompa/PompaUpdate';
import RezervimiAdd from './features/Pompa/PompaAdd';
// import RezervoAutobusin from './features/Garazha/Garazha';
// import RezervoAutobusinUpdate from './features/Garazha/GarazhaUpdate';
// import RezervoAutobusinAdd from './features/Garazha/GarazhaAdd';
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';



function App() {
  return (
   
    <div className="App container">
      <h1>Dashboard</h1> 
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
          </li>

         <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Pompa">
             Pompa
            </NavLink>
          </li>

          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Garazha">
             Garazha
            </NavLink>
          </li>

          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/Rezervimi">
             Rezervimi
            </NavLink>
          </li>

          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/RezervoAutobusin">
             RezervoAutobusin
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path='/' element={<Home />} /> */}

        <Route path='/Pompa' element={<Pompa />}/>
        <Route path='/PompaUpdate' element={<PompaUpdate />}/>
        <Route path='/PompaAdd' element={<PompaAdd />} />

        <Route path='/Garazha' element={<Garazha />} />
        <Route path='/GarazhaUpdate' element={<GarazhaUpdate />} />
        <Route path='/GarazhaAdd' element={<GarazhaAdd />} />

        <Route path='/Rezervimi' element={<Pompa />}/>
        <Route path='/RezervimiUpdate' element={<PompaUpdate />}/>
        <Route path='/RezervimiAdd' element={<PompaAdd />} />

        {/* <Route path='/RezervoAutobusin' element={<Garazha />} />
        <Route path='/RezervoAutobusinUpdate' element={<GarazhaUpdate />} />
        <Route path='/RezervoAutobusinAdd' element={<GarazhaAdd />} />  */}

 
      </Routes>
    </div>
    
   
    );
    
  }
export default App;
