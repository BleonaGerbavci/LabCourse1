import React from 'react'
import { Route, Routes } from 'react-router-dom'
import KompaniaCrud from '../cruds/kompania-crud/kompania-crud'
import { NavLink } from 'react-router-dom';
import Kompania from '../../components/cruds/kompania-crud/Kompania';
import Linja from '../cruds/linja-crud/Linja';
import LinjaCrud from '../cruds/linja-crud/linja-crud';
import KompaniaAdd from '../cruds/kompania-crud/KompaniaAdd';
import KompaniaUpdate from '../cruds/kompania-crud/KompaniaUpdate';
import LinjaAdd from '../cruds/linja-crud/LinjaAdd';
import LinjaUpdate from '../cruds/linja-crud/LinjaUpdate';
import OrariCrud from '../cruds/orari-crud/orari-crud';
import Orari from '../cruds/orari-crud/Orari';
import OrariAdd from '../cruds/orari-crud/OrariAdd';
import OrariUpdate from '../cruds/orari-crud/OrariUpdate';
import Pompa from '../cruds/pompa-crud/Pompa';
import PompaCrud from '../cruds/pompa-crud/pompa-crud';
import PompaAdd from '../cruds/pompa-crud/PompaAdd';
import PompaUpdate from '../cruds/pompa-crud/PompaUpdate';
import StacioniCrud from '../cruds/stacioni-crud/stacioni-crud';
import Stacioni from '../cruds/stacioni-crud/Stacioni';
import StacioniAdd from '../cruds/stacioni-crud/StacioniAdd';
import StacioniUpdate from '../cruds/stacioni-crud/StacioniUpdate';
import Qyteti from '../cruds/qyteti-crud/Qyteti';
import QytetiCrud from '../cruds/qyteti-crud/qyteti-crud';
import QytetiAdd from '../cruds/qyteti-crud/QytetiAdd';
import QytetiUpdate from '../cruds/qyteti-crud/QytetiUpdate';


export default function Dashboard(){
  return (
    <div id="dashboard">
        <div>
          <br /> 
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
        
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="./kompania">
              Kompania
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="./linja">
              Linja
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="./orari">
              Orari
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="./pompa">
              Pompa
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="./stacioni">
              Stacioni
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-outline-secondary" to="./qyteti">
             Qyteti
            </NavLink>
          </li>
        </ul>
      </nav>

        </div>
        <Routes>
            <Route path='/KompaniaCrud/*' element={<KompaniaCrud />}></Route>
            <Route path='/kompania/*' element={<Kompania />}/>
            <Route path='/kompaniaAdd' element={<KompaniaAdd />}/>
            <Route path='/kompaniaUpdate' element={<KompaniaUpdate />}/>
            <Route path='/LinjaCrud/*' element={<LinjaCrud />}></Route>
            <Route path="/linja" element={<Linja />} />
            <Route path="/linjaAdd" element={<LinjaAdd />} />
            <Route path="/linjaUpdate" element={<LinjaUpdate />} />
            <Route path='/OrariCrud/*' element={<OrariCrud />}></Route>
            <Route path="/orari" element={<Orari />} />
            <Route path="/orariAdd" element={<OrariAdd />} />
            <Route path="/orariUpdate" element={<OrariUpdate />} />
            <Route path='/pompa' element={<Pompa />}/>
            <Route path='/pompaUpdate' element={<PompaUpdate />}/>
            <Route path='/pompaAdd' element={<PompaAdd />}/>
            <Route path='/PompaCrud' element={<PompaCrud />}/>
            <Route path='/StacioniCrud' element={<StacioniCrud />} />
            <Route path='/stacioni' element={<Stacioni />} />
            <Route path='/stacioniAdd' element={<StacioniAdd />} />
            <Route path='/stacioniUpdate' element={<StacioniUpdate />} />
            <Route path='/QytetiCrud' element={<QytetiCrud />} />
            <Route path='/qyteti' element={<Qyteti />} />
            <Route path='/qytetiAdd' element={<QytetiAdd />} />
            <Route path='/qytetiUpdate' element={<QytetiUpdate />} />
            
            

        </Routes>
       
    </div>
  )
}