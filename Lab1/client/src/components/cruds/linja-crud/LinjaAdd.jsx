import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LinjaAdd(){

    const [refreshKey, setRefreshKey] = useState('0');
    
    const navigate = useNavigate();
     //Set data to database
     
     const [pickupLocation, setPickupLocation] = useState('');
     const [destinationLocaion, setDestinationLocaion] = useState('');
     const [price, setPrice] = useState(0);
     const [duration, setDuration] = useState('');
 
     const handleAdd = (e) => {
         e.preventDefault();
         const linja = { pickupLocation, destinationLocaion,price, duration };
 
         axios.post('https://localhost:7138/api/Linja/ShtoLinje', linja)
             .then(() => {
                window.alert('Linja u shtua me sukses!');
                navigate('../linja');
             })
             .then(() => {
             setRefreshKey(refreshKey => refreshKey + 1);
         })
     }

     return(
      
        <form onSubmit={handleAdd}>
            <br />
            <br />

                <h4 className="d-flex justify-content m-3">
                Shto Linje
                </h4>
               <br />
               <br />
            
               
                <TextField
                required
                id="filled-required"
                label="Vendi i nisjes"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                />
                <TextField
                id="filled"
                label="Destinacioni"
                value={destinationLocaion}
                onChange={(e) => setDestinationLocaion(e.target.value)}
                />
                <TextField
                id="filled"
                label="Cmimi"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                id="filled"
                label="Koha e nisjes & mberritjes"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                />
                
             <br /><br /><br />
                           
             <button type="submit" className="btn btn-outline-secondary">
                   Add
              </button>
        </form>
  
)}