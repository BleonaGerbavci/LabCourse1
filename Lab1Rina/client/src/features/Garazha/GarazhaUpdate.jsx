import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function GarazhaUpdate() {
    
    const[garazha, setGarazha] = useState([]);
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/Garazha/GetGarazha')
            .then(response => {
                setGarazha(response.data);
            })
    }, [refreshKey])

    const[garazhaId,setGarazhaId]=useState('');
    const [emriRruges, setEmriRruges] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [kompaniaId, setKompaniaId] = useState('');
 
    
    
   

    
        const handleEdit = (e) => {
            e.preventDefault();
            const Garazha= { garazhaId, emriRruges,zipCode,kompaniaId};
            
            garazha.map((GarazhaUpdate) => {
                if (garazhaId == GarazhaUpdate.garazhaId) {
                        axios.put('https://localhost:7147/api/Garazha/UpdateGarazha', Garazha)
                        .then((response) => {
                            console.log((Garazha));
                           
                    }).then(() => {
                        window.confirm('Garazha u perditesua me sukses!')
                        navigate('../garazha');
                    })
                }
            })
            
        }
    

        return (
            <>
                <br />
                       <h4 className="d-flex justify-content m-3">
                       Perditeso Garazhen
                       </h4>
                <br />
    
         <form onSubmit={handleEdit}>
            <TextField
                required
                id="filled-required"
                label="Id"
                value={garazhaId}
                onChange={(e) => setGarazhaId(e.target.value)}
            />
            <TextField
                required
                id="filled-required"
                label="Emri i Rruges"
                variant="standard"
                value={emriRruges}
                onChange={(e) => setEmriRruges(e.target.value)}
            />
            <TextField
                 id="filled-number"
                 label="ZipCode"
                 variant="standard"
                 value={zipCode}
                 onChange={(e) => setZipCode(e.target.value)}
            />
            <TextField
                required
                id="filled-required"
                label="Kompania Id"
                variant="standard"
                value={kompaniaId}
                onChange={(e) => setKompaniaId(e.target.value)}
            />
                            
                           
            <br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
                 Ruaj ndryshimet
            </button>

        </form>
        </>
    );
}
    
