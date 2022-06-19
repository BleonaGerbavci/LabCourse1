import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function PompaUpdate() {
    
    const location = useLocation();

    // const[pompa, setPompa] = useState([]);   A me fshi qeto
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const[pompaId, setPompaId] = useState();
    
    //get data from database
    useEffect(() => {
        if(location.state != null){
            setPompaId(location.state.pompaId);
        }
    }, [pompaId])

    const [emri, setEmri] = useState('');
    const [emriRruges, setEmriRruges] = useState('');
    const [zipCode, setZipCode] = useState('');

        const handleEdit = (e) => {
            e.preventDefault();
            const Pompa= { pompaId,emri, emriRruges,zipCode};
            
            console.log(Pompa);
               
                        axios.put('https://localhost:7147/api/Pompa/UpdatePompa', Pompa)
                        .then((response) => {
                            console.log((Pompa));
                           
                    }).then(() => {
                        window.confirm('Pompa u perditesua me sukses!')
                        navigate('../pompa');
                    })
                
            
            
        }
    

        return (
            <>
                <br />
                       <h4 className="d-flex justify-content m-3">
                       Perditeso Pompa
                       </h4>
                <br />
    
         <form onSubmit={handleEdit}>
            <TextField
                required
                id="filled-required"
                label="Id"
                value={pompaId}
                disabled
            />
            <TextField
                id="filled-required"
                label="Emri"
                variant="standard"
                value={emri}
                onChange={(e) => setEmri(e.target.value)}
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
            
                            
                           
            <br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
                 Ruaj ndryshimet
            </button>

        </form>
        </>
    );
}
    
