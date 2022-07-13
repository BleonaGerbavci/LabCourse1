import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LinjaUpdate() {

    const[linja, setLinjat] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
     //get data from database
     useEffect(() => {
        axios.get('https://localhost:7138/api/Linja/GetLinjat')
            .then(response => {
                setLinjat(response.data);
            })
    }, [refreshKey])

    const [linjaId, setLinjaId] = useState('');
    const [vendiINisjes, setVendiINisjes] = useState('');
    const [destinacioni, setDestinacioni] = useState('');
    const [cmimi, setCmimi] = useState(0);
    const [kohaNisjes, setKohaNisjes] = useState('');
    const [kohaMberritjes, setKohaMberritjes] = useState('');
    const [kohezgjatja, setKohezgjatja] = useState('');
    const [autobusiId, setAutobusiId] = useState('');
    const [kompaniaId, setKompaniaId] = useState('');
    

    
        const handleEdit = (e) => {
            e.preventDefault();
            const linjaa = { linjaId, vendiINisjes, destinacioni, cmimi, kohaNisjes,kohaMberritjes,kohezgjatja, autobusiId,kompaniaId };
            linja.map((linja) => {
                if (linjaId == linja.linjaId) {
                        axios.put('https://localhost:7138/api/Linja/UpdateLinje', linjaa)
                        .then(() => {
                            window.alert('Linja u perditesua me sukses!');
                            navigate('../linja');
                        })
                           
                  
                }
            })
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                <h4 className="text-h4">
                Perditeso Linje
                </h4>
                <br />
                <br />
                <TextField
                required
                id="filled-required"
                label="Linja Id"
                value={linjaId}
                onChange={(e) => setLinjaId(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',   
                    marginBottom:'20px'                          
                }}
                />
                <TextField
                required
                id="filled-required"
                label="Vendi i nisjes"
                value={vendiINisjes}
                onChange={(e) => setVendiINisjes(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
                />
                <TextField
                id="filled"
                label="Destinacioni"
                value={destinacioni}
                onChange={(e) => setDestinacioni(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
                />
                <TextField
                id="filled"
                label="Cmimi"
                value={cmimi}
                onChange={(e) => setCmimi(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
                />
                <TextField
                id="filled"
                label="Koha e nisjes"
                value={kohaNisjes}
                onChange={(e) => setKohaNisjes(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
                /> 
                <TextField
                id="filled"
                label="Koha e mberritjes"
                value={kohaMberritjes}
                onChange={(e) => setKohaMberritjes(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
                />
                <TextField
                id="filled"
                label="Kohezgjatja"
                value={kohezgjatja}
                onChange={(e) => setKohezgjatja(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
                />
                <TextField
                id="filled"
                label="Autobusi Id"
                value={autobusiId}
                onChange={(e) => setAutobusiId(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
                />
                <TextField
                id="filled" 
                label="Kompania Id"
                value={kompaniaId}
                onChange={(e) => setKompaniaId(e.target.value)}
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