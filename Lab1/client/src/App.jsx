import Home from './Home';
import Kompania from './Kompania';
import KompaniaUpdate from './KompaniaUpdate';
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';
import KompaniaAdd from './KompaniaAdd';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
      ㅤㅤ
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/kompania">
              Kompania
            </NavLink>
          </li>
        
        </ul>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/kompania' element={<Kompania />}/>
        <Route path='/kompaniaUpdate' element={<KompaniaUpdate />}/>
        <Route path='/kompaniaAdd' element={<KompaniaAdd />}/>
       
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
