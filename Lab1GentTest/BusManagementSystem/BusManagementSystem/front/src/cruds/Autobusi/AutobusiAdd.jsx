import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';


export default function AutobusiAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [NrUleseve, setNrUleseve] = useState('');
  const [FuelCapacity,setFuelCapacity] = useState('');
  const [KompaniaId,setKompaniaId] = useState('');
  const [StacioniId,setStacioniId] = useState('');
  const [GarazhaId,setGarazhaId] = useState('');

  
  <br></br>
  

  const handleAdd = (e) => {
      e.preventDefault();
      const autobusi = { NrUleseve,FuelCapacity,GarazhaId,KompaniaId,StacioniId };

      axios.post('https://localhost:7041/api/Autobusi/ShtoAutobusa', autobusi)
          .then(() => {
             window.confirm('Autobusi u shtua me sukses')
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }
 

      return(
        

          <form onSubmit={handleAdd}>
               <br></br>
                              <TextField
                                  required
                                  id="filled-basic"
                                  label="nrUleseve"
                                  variant="filled"
                                  value={NrUleseve}
                                  onChange={(e) => setNrUleseve(e.target.value)}
                              />
                              < br/> < br/>
                          
    
                          <TextField
                              id="filled-basic"
                              label="fuelCapacity"
                              variant="filled"
                              value={FuelCapacity}
                              onChange={(e) => setFuelCapacity(e.target.value)}
                          />
                          < br/> < br/>
                       
                           <TextField
                             id="filled-basic"
                              label="kompaniaId"
                              variant="filled"
                              value={KompaniaId}
                              onChange={(e) => setKompaniaId(e.target.value)}
                          />< br/> < br/> 
                           <TextField
                       id="filled-basic"
                          label="stacioniId"
                          variant="filled"
                          value={StacioniId}
                          onChange={(e) => setStacioniId(e.target.value)}
                      />< br/> < br/> 
                       <TextField
                             id="filled-basic"
                              label="garazhaId"
                              variant="filled"
                              value={GarazhaId}
                              onChange={(e) => setGarazhaId(e.target.value)}
                          />
                         
                         < br/>< br/>
                         <button type="submit" className="btn btn-outline-primary">
                             Shto Autobusin
                          </button>
              </form>
      )}