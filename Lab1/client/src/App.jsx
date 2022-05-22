import React from 'react';
import Home from './pages';
import {BrowserRouter,  Route ,NavLink, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div >

      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/*' element={<Dashboard />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
