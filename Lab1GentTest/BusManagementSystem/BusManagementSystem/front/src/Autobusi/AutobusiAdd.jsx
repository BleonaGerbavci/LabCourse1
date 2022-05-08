import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';

export default function AutobusiAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [Number, setNumber] = useState('');
  const [Capacity,setCapacity] = useState('');
  const [FuelCapacity,setFuelCapacity] = useState('');
  const [GarazhaId,setGarazhaId] = useState('');
  const [KompaniaId,setKompaniaId] = useState('');
  const [PompaId,setPompaId] = useState('');

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const autobusi = { Number,Capacity,FuelCapacity,GarazhaId,KompaniaId,PompaId };

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
                              <TextField
                                  required
                                  id="filled-required"
                                  label="number"
                                  variant="standard"
                                  value={Number}
                                  onChange={(e) => setNumber(e.target.value)}
                              />
                          <TextField
                              id="filled-number"
                              label="capacity"
                              variant="standard"
                              value={Capacity}
                              onChange={(e) => setCapacity(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="fuelCapacity"
                              variant="standard"
                              value={FuelCapacity}
                              onChange={(e) => setFuelCapacity(e.target.value)}
                          />
                         <TextField
                              id="filled"
                              label="garazhaId"
                              variant="standard"
                              value={GarazhaId}
                              onChange={(e) => setGarazhaId(e.target.value)}
                          />
                           <TextField
                              id="filled"
                              label="kompaniaId"
                              variant="standard"
                              value={KompaniaId}
                              onChange={(e) => setKompaniaId(e.target.value)}
                          />
                           <TextField
                          id="filled"
                          label="pompaId"
                          variant="standard"
                          value={PompaId}
                          onChange={(e) => setPompaId(e.target.value)}
                      />
                         
                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Autobusin
                          </button>
              </form>
      )}