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

    const [autobusiId, setautobusiId] = useState('');
     const [nrUleseve,setnrUleseve] = useState('');
    const [fuelCapacity,setfuelCapacity] = useState('');
    const [kompaniaId,setkompaniaId] = useState('');
    const [stacioniId,setstacioniId] = useState('');
    const [garazhaId,setgarazhaId] = useState('');
   
    
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Autobusi= { autobusiId,nrUleseve, fuelCapacity,garazhaId,kompaniaId,stacioniId };
            autobusi.map((autobusiUpdate) => {
                if (autobusiId == autobusiUpdate.autobusiId) {
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
                label="autousiId"
                variant="standard"
                value={autobusiId}
                onChange={(e) => setautobusiId(e.target.value)}
            />
            <br />
           
                          <TextField
                              id="filled-number"
                              label="nrUleseve"
                              variant="standard"
                              value={nrUleseve}
                              onChange={(e) => setnrUleseve(e.target.value)}
                          /><br />
                          <TextField
                              id="filled"
                              label="fuelCapacity"
                              variant="standard"
                              value={fuelCapacity}
                              onChange={(e) => setfuelCapacity(e.target.value)}
                          /><br />
                            <TextField
                              id="filled"
                              label="kompaniaId"
                              variant="standard"
                              value={kompaniaId}
                              onChange={(e) => setkompaniaId(e.target.value)}
                          /><br />
                              <TextField
                          id="filled"
                          label="stacioniId"
                          variant="standard"
                          value={stacioniId}
                          onChange={(e) => setstacioniId(e.target.value)}
                      /><br/>
                          
                         <TextField
                              id="filled"
                              label="garazhaId"
                              variant="standard"
                              value={garazhaId}
                              onChange={(e) => setgarazhaId(e.target.value)}
                          /><br />
                         
                          
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}
