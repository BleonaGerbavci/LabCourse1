import React from 'react';
import Home from './pages';
import {BrowserRouter,  Route ,NavLink, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Services from './components/Services';
import SignIn from './components/Signin';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
    <div >

      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/services/*' element={<Services />} />
        <Route path='/signin/*' element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
    
    </BrowserRouter>

  );
}

export default App;
