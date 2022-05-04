
import Kompania from './Kompania';
import KompaniaUpdate from './KompaniaUpdate';
import {BrowserRouter, Route, Switch,NavLink, Routes} from 'react-router-dom';
import KompaniaAdd from './KompaniaAdd';
import Linja from './Linja';
import LinjaUpdate from './LinjaUpdate';
import LinjaAdd from './LinjaAdd';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
      Dashboard
      </h3>
        
      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/kompania">
              Kompania
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="/linja">
              Linja
            </NavLink>
          </li>
        
        </ul>
      </nav>

      <Routes>
       
        <Route path='/kompania' element={<Kompania />}/>
        <Route path='/kompaniaUpdate' element={<KompaniaUpdate />}/>
        <Route path='/kompaniaAdd' element={<KompaniaAdd />}/>
        <Route path="/linja" element={<Linja />} />
        <Route path="/linjaAdd" element={<LinjaAdd />} />
        <Route path="/linjaUpdate" element={<LinjaUpdate />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
