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
import User from '../cruds/user-crud/User';
import UserCrud from '../cruds/user-crud/user-crud';
import UserAdd from '../cruds/user-crud/UserAdd';
import UserUpdate from '../cruds/user-crud/UserUpdate';
import Navbar from '../Navbar';
import Footer from '../footer/footer';
import KompaniaIcon from '../../images/crud-img/kompania-crud.svg'
import LinjaIcon from '../../images/crud-img/linja-icon.svg'
import PompaIcon from '../../images/crud-img/pompa-icon.svg'
import StacioniIcon from '../../images/crud-img/stacioni-icon.svg'
import QytetiIcon from '../../images/crud-img/qyteti-icon.svg'
import UsersIcon from '../../images/crud-img/user-icon.svg'
import './dashboard-style.css'



export default function Dashboard(){
  return (
    <div id="dashboard">
        <Navbar />
       
        <div className ="container">
        

        <div className='navlinks'>
          <NavLink  to="./kompania">
                  <img src ={KompaniaIcon} alt="kompania-img" className='icons' />
                  <p>Kompania</p>
          </NavLink>
          <NavLink  to="./linja">
                  <img src ={LinjaIcon} alt="linja-img" className='icons' />
                  <p>Linja</p>
          </NavLink>

          <NavLink  to="./pompa">
                  <img src ={PompaIcon} alt="pompa-img" className='icons' />
                  <p>Pompa</p>
          </NavLink>
          <NavLink  to="./stacioni">
                  <img src ={StacioniIcon} alt="stacioni-img" className='icons' />
                  <p>Stacioni</p>
          </NavLink>
          <NavLink  to="./qyteti">
                  <img src ={QytetiIcon} alt="qyteti-img" className='icons' />
                  <p>Qyteti</p>
          </NavLink>
          <NavLink  to="./user">
                  <img src ={UsersIcon} alt="users-img" className='icons' />
                  <p>Users</p>
          </NavLink>
        </div>

 

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
            <Route path='/pompa' element={<Pompa />}/>
            <Route path='/pompaUpdate' element={<PompaUpdate />}/>
            <Route path='/pompaAdd' element={<PompaAdd />}/>
            <Route path='/PompaCrud' element={<PompaCrud />}/>
            <Route path='/StacioniCrud/*' element={<StacioniCrud />} />
            <Route path='/stacioni' element={<Stacioni />} />
            <Route path='/stacioniAdd' element={<StacioniAdd />} />
            <Route path='/stacioniUpdate' element={<StacioniUpdate />} />
            <Route path='/QytetiCrud/*' element={<QytetiCrud />} />
            <Route path='/qyteti' element={<Qyteti />} />
            <Route path='/qytetiAdd' element={<QytetiAdd />} />
            <Route path='/qytetiUpdate' element={<QytetiUpdate />} />
            <Route path='/UserCrud/*' element={<UserCrud />} />
            <Route path='/user' element={<User />} />
            <Route path='/userAdd' element={<UserAdd />} />
            <Route path='/userUpdate' element={<UserUpdate />} />           
            

        </Routes>
       
    </div>
  )
}