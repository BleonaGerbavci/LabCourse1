import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


export default function AutobusiUpdate() {

    const[autobusi, setAutobusi] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7041/api/Autobusi/GetAutobusat')
            .then(response => {
                setAutobusi(response.data);
            })
    }, [refreshKey])

    const [id, setId] = useState('');
    const [number, setnumber] = useState('');
    const [capacity,setcapacity] = useState('');
    const [fuelCapacity,setfuelCapacity] = useState('');
    const [garazhaId,setgarazhaId] = useState('');
    const [kompaniaId,setkompaniaId] = useState('');
    const [pompaId,setpompaId] = useState('');
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Autobusi= { id, number, capacity, fuelCapacity,garazhaId,kompaniaId,pompaId };
            autobusi.map((autobusiUpdate) => {
                if (id == autobusiUpdate.id) {
                        axios.put('https://localhost:7041/api/Autobusi/UpdateAutobusa',Autobusi)
                        .then((response) => {
                            console.log((Autobusi));
                           
                    }).then(() => {
                        window.confirm('Autobusi u perditesua me sukses!')
                    })
                }
            })
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
                id="filled-required"
                label="Id"
                variant="standard"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
             <TextField
                                  required
                                  id="filled-required"
                                  label="number"
                                  variant="standard"
                                  value={number}
                                  onChange={(e) => setnumber(e.target.value)}
                              />
                          <TextField
                              id="filled-number"
                              label="capacity"
                              variant="standard"
                              value={capacity}
                              onChange={(e) => setcapacity(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="fuelCapacity"
                              variant="standard"
                              value={fuelCapacity}
                              onChange={(e) => setfuelCapacity(e.target.value)}
                          />
                         <TextField
                              id="filled"
                              label="garazhaId"
                              variant="standard"
                              value={garazhaId}
                              onChange={(e) => setgarazhaId(e.target.value)}
                          />
                           <TextField
                              id="filled"
                              label="kompaniaId"
                              variant="standard"
                              value={kompaniaId}
                              onChange={(e) => setkompaniaId(e.target.value)}
                          />
                           <TextField
                          id="filled"
                          label="pompaId"
                          variant="standard"
                          value={pompaId}
                          onChange={(e) => setpompaId(e.target.value)}
                      />
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}
