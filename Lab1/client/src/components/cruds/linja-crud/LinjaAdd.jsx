import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LinjaAdd(){

    const [refreshKey, setRefreshKey] = useState('0');
    
    const navigate = useNavigate();
     //Set data to database
     const [vendiINisjes, setVendiINisjes] = useState('');
     const [destinacioni, setDestinacioni] = useState('');
     const [cmimi, setCmimi] = useState(0);
     const [kohaNisjes, setKohaNisjes] = useState('');
     const [kohaMberritjes, setKohaMberritjes] = useState('');
     const [kohezgjatja, setKohezgjatja] = useState('');
     const [autobusiId, setAutobusiId] = useState('');
     const [kompaniaId, setKompaniaId] = useState('');

 
     const handleAdd = (e) => {
         e.preventDefault();
         const linja = { vendiINisjes, destinacioni, cmimi, kohaNisjes,kohaMberritjes,kohezgjatja, autobusiId,kompaniaId };
 
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
                value={vendiINisjes}
                onChange={(e) => setVendiINisjes(e.target.value)}
                />
                <TextField
                id="filled"
                label="Destinacioni"
                value={destinacioni}
                onChange={(e) => setDestinacioni(e.target.value)}
                />
                <TextField
                id="filled"
                label="Cmimi"
                value={cmimi}
                onChange={(e) => setCmimi(e.target.value)}
                />
     
                <TextField
                id="filled"
                label="Koha e nisjes"
                value={kohaNisjes}
                onChange={(e) => setKohaNisjes(e.target.value)}
                /> 
                <TextField
                id="filled"
                label="Koha e mberritjes"
                value={kohaMberritjes}
                onChange={(e) => setKohaMberritjes(e.target.value)}
                />
                <TextField
                id="filled"
                label="Kohezgjatja"
                value={kohezgjatja}
                onChange={(e) => setKohezgjatja(e.target.value)}
                />
                <TextField
                id="filled"
                label="Autobusi Id"
                value={autobusiId}
                onChange={(e) => setAutobusiId(e.target.value)}
                />
                <TextField
                id="filled"
                label="Kompania Id"
                value={kompaniaId}
                onChange={(e) => setKompaniaId(e.target.value)}
                />
             <br /><br /><br />
                           
             <button type="submit" className="btn btn-outline-secondary">
                   Add
              </button>
        </form>
  
)}