import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function StacioniUpdate() { 

    const[stacioni, setStacioni] = useState([]); 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
    //get data from database
    useEffect(() => { 
        axios.get('https://localhost:7138/api/Stacioni/GetStacionet')
            .then(response => {
                setStacioni(response.data);
            })
    }, [refreshKey])

    
    const [stacioniId, setStacioniId] = useState('');
    const [emriRruges, setEmriRruges] = useState('');
    const [zipCode, setZipCode] = useState('');
    
        const handleEdit = (e) => {
            e.preventDefault();
            const stacionii = { stacioniId, emriRruges, zipCode };
            stacioni.map((stacioni) => {
                if (stacioniId == stacioni.stacioniId) {
                        axios.put('https://localhost:7138/api/Stacioni/UpdateStacion', stacionii)
                        .then(() => {
                            window.alert('Stacioni u perditesua me sukses!');
                            navigate('../stacioni');
                        }) 
                }
            }) 
            
        }
    return (
        <form onSubmit={handleEdit} >
                <h4 className="d-flex justify-content m-3">
                Perditeso Stacioni
                </h4>
               <br />
               <br />
                        <TextField
                        required
                        id="filled-required"
                        label="Id"
                        value={stacioniId}
                        onChange={(e) => setStacioniId(e.target.value)}
                         />
                        <TextField
                        id="filled"
                        label="Rruga"
                        value={emriRruges}
                        onChange={(e) => setEmriRruges(e.target.value)}
                        /> 
                        <TextField
                        id="filled"
                        label="Zip Kodi"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        /> 
             <br /><br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
               Ruaj ndryshimet
            </button>
        </form>
    );
}
