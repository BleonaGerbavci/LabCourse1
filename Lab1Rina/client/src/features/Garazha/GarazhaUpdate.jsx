import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function GarazhaUpdate() {
    
    const location = useLocation();

    // const[garazha, setGarazha] = useState([]);   A me fshi qeto
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const[garazhaID, setGarazhaID] = useState();
    
    //get data from database
    useEffect(() => {
        if(location.state != null){
            setGarazhaID(location.state.garazhaID);
        }
    }, [garazhaID])

    const [emriRruges, setEmriRruges] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [kompaniaId, setKompaniaId] = useState('');
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Garazha= { garazhaID, emriRruges,zipCode,kompaniaId};
            
            console.log(Garazha);
               
                        axios.put('https://localhost:7147/api/Garazha/UpdateGarazha', Garazha)
                        .then((response) => {
                            console.log((Garazha));
                           
                    }).then(() => {
                        window.confirm('Garazha u perditesua me sukses!')
                        navigate('../garazha');
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
                value={garazhaID}
                disabled
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
    
