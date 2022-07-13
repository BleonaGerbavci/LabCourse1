import React from 'react';
import {BrowserRouter,  Route ,NavLink, Routes} from 'react-router-dom';
import Dashboard  from './components/Dashboard';
import Footer from './components/footer/footer';

function App() {
  return (
   
    <BrowserRouter>
    <div >
      <Routes>
       
       
        <Route path='/dashboard/*' element={<Dashboard />} />
        
      </Routes>
      <Footer />
    </div>

    </BrowserRouter>

  );
}

export default App;