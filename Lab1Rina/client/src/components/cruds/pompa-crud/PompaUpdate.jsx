import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PompaUpdate() {
    

    const[pompa, setPompa] = useState([]);  
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const[pompaId, setPompaId] = useState();
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/Pompa/GetPompa')
            .then(response => {
                setLinjat(response.data);
            })
    }, [refreshKey])

    const [emri, setEmri] = useState('');
    const [emriRruges, setEmriRruges] = useState('');
    const [zipCode, setZipCode] = useState('');

        const handleEdit = (e) => {
            e.preventDefault();
            const Pompa= { pompaId,emri, emriRruges,zipCode};
            pompa.map((pompa) => {
                if (pompaId == pompa.pompaId) {
                        axios.put('https://localhost:7147/api/Pompa/UpdatePompa', Pompa)
                        .then(() => {
                            window.confirm('Pompa u perditesua me sukses!')
                            navigate('../pompa');
                    })
                
                }
            })
        }
    

        return (
            <form onSubmit={handleEdit}>
                    <h4 className="text-h4">
                    Perditeso Pompa
                    </h4>
                    <br />
                    <br />
            <TextField
                required
                id="filled-required"
                label="Id"
                value={pompaId}
                onChange={(e) => setPompaId(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',   
                    marginBottom:'20px'                          
                }}
             />
            <TextField
                id="filled-required"
                label="Emri"
                value={emri}
                onChange={(e) => setEmri(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
            />
            <TextField
                required
                id="filled-required"
                label="Emri i Rruges"
                value={emriRruges}
                onChange={(e) => setEmriRruges(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
            />
            <TextField
                 id="filled-number"
                 label="ZipCode"
                value={zipCode}
                 onChange={(e) => setZipCode(e.target.value)}
                 sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',                             
                }}
            />
            
                            
                           
            
                           
            <button type="submit" className="button">
                 Ruaj ndryshimet
            </button>

        </form>
        
    );
}
    
