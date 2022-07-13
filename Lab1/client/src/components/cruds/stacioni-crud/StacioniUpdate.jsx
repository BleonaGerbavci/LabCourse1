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
                <h4 className="text-h4">
                 Perditeso stacionin
                </h4>
               <br />
               <br />
                        <TextField
                        
                        id="filled-required"
                        label="Id"
                        value={stacioniId}
                        onChange={(e) => setStacioniId(e.target.value)}
                        sx={{ 
                            marginLeft:'20px',
                            marginRight:'20px',                             
                        }}
                         />
                        <TextField
                        id="filled"
                        label="Rruga"
                        value={emriRruges}
                        onChange={(e) => setEmriRruges(e.target.value)}
                        sx={{ 
                            marginLeft:'20px',
                            marginRight:'20px',                             
                        }}
                        /> 
                        <TextField
                        id="filled"
                        label="Zip Kodi"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        sx={{ 
                            marginLeft:'20px',
                            marginRight:'20px',
                                                       
                        }}
                        /> 
             <br /><br /><br />
                           
            <button type="submit" className="button">
               Ruaj ndryshimet
            </button>
        </form>
    );
}
