
import React from 'react';
import './Aboutus.css'
import employ from '../images/employ.svg'
import map from '../images/map.svg'
import manlogo from '../images/manlogo.svg'
import busi from '../images/busi.svg'
import exp from'../images/exp.svg'
import location from '../images/location.svg'
import logo from'../images/logo.svg'


export default function Aboutus() {
  return <div text-wrapper>
  <h1 className='text-1'>Rreth Nesh</h1>;
  <div className='text-2'>
<p>Rrezergo nje kompani  me pervoje shumevjecare qe tashme operone ne tere kosoven
<br></br>
Mbi 15 vite eksperience nje nga arsyet qe na dallon prej tjereve.Mbi 7 zyre ne tere kosoven ku klienten jo vetem qe munde te sherbehen online
<br></br>
Por per qfardo arsye munde te drejtohen ne zyrat tona.
<br></br>
Tani duke ju ofruar klienteve sherbime online qe ata te ken me te lehte te kryejn sherbimet e tyre
</p>


</div>

<div className='Logo' >
<img src={logo} alt="logo" />

</div>

   
   <div  className='foto' >
    <div className='employ' >
   <img src={employ}  alt="employ" />
   <h2 className='employy'> + 2600 employees</h2></div>
   </div>


   <div className='map'>
    <div className='mapp'>
      <img src={map} alt="map"/>
      <h2 className='map-text'> + Në Gjithë Kosovën</h2>
    </div>
</div>

<div className='man'>
    <div className='mann'>
      <img src={manlogo} alt="manlogo" />
      <h2 className='man-text'>+ 6000 Km Udhëtime Çdo Vitë </h2>
    </div>
</div>

<div className='busi'>
    <div className='busii'>
      <img src={busi} alt="buss"/>
      <h2 className='bus-text'>+ 100 Linja Çdo Ditë  </h2>
    </div>
</div>

<div className='exp'>
    <div className='expp'>
      <img src={exp} alt="experience"/>
      <h2 className='exp-text'>+ 15 Vite Eksperiencë  </h2>
    </div>
</div>

<div className='location'>
    <div className='locationn'>
      <img src={location} alt="location"/>
      <h2 className='location-text'>+ 7 Zyre Në Tërë Kosovën  </h2>
    </div>
</div>








</div>
}