import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

export default function LinjaUpdate() {

    const[linja, setLinjat] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
     //get data from database
     useEffect(() => {
        axios.get('https://localhost:7138/api/Linja/GetLinjat')
            .then(response => {
                setLinjat(response.data);
            })
    }, [refreshKey])

    const [id, setId] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [destinationLocaion, setDestinationLocaion] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    

    
        const handleEdit = (e) => {
            e.preventDefault();
            const linjaa = { id, pickupLocation, destinationLocaion, price, duration };
            linja.map((linja) => {
                if (id == linja.id) {
                        axios.put('https://localhost:7138/api/Linja/UpdateLinje', linjaa)
                        .then(() => {
                            window.confirm('Linja u perditesua me sukses!')
                        })
                           
                  
                }
            })
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                <h4 className="d-flex justify-content m-3">
                    Perditeso Linje
                </h4>
                <br />
                <br />

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
                label="Vendi i nisjes"
                variant="standard"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                />
                <TextField
                id="filled"
                label="Destinacioni"
                variant="standard"
                value={destinationLocaion}
                onChange={(e) => setDestinationLocaion(e.target.value)}
                />
                <TextField
                id="filled"
                label="Cmimi"
                variant="standard"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                id="filled"
                label="Kohezgjatja"
                variant="standard"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                />
                
             <br /><br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
               Ruaj ndryshimet
            </button>
        </form>
    );
}