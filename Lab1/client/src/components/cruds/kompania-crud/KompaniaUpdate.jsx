import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function KompaniaUpdate() { 

    const[kompania, setKompanite] = useState([]); 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7138/api/Kompania/GetKompanite')
            .then(response => {
                setKompanite(response.data);
            })
    }, [refreshKey])

    const [kompaniaId, setKompaniaId] = useState('');
    const [emri, setEmri] = useState('');
    const [emaili, setEmaili] = useState('');
    const [nrTelefonit, setNrTelefonit] = useState('');
    const [nrAdreses, setNrAdreses] = useState('');
    const [emriRruges, setEmriRruges] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [pompaId, setPompaId] = useState('');

    
        const handleEdit = (e) => {
            e.preventDefault();
            const kompaniaa = { kompaniaId, emri, emaili, nrTelefonit, nrAdreses, emriRruges,zipCode,pompaId };
            kompania.map((kompania) => {
                if (kompaniaId == kompania.kompaniaId) {
                        axios.put('https://localhost:7138/api/Kompania/UpdateKompanine', kompaniaa)
                        .then(() => {
                            window.alert('Kompania u perditesua me sukses!');
                            navigate('../kompania');
                        }) 
                }
            }) 
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                <h4 className="d-flex justify-content m-3">
                Perditeso Kompanine
                </h4>
               <br />
               <br />
                        <TextField
                        required
                        id="filled-required"
                        label="Id"
                        value={kompaniaId}
                        onChange={(e) => setKompaniaId(e.target.value)}
                         />
                        <TextField
                            required
                            id="filled-required"
                            label="Emri"
                            value={emri}
                            onChange={(e) => setEmri(e.target.value)}
                        /> 
                        <TextField
                            id="filled-number"
                            label="Email"
                            value={emaili}
                            onChange={(e) => setEmaili(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Numri kontaktues"
                            type="number"
                            value={nrTelefonit}
                            onChange={(e) => setNrTelefonit(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Numri i adreses"
                            value={nrAdreses}
                            onChange={(e) => setNrAdreses(e.target.value)}
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
                         <TextField
                            id="filled"
                            label="Pompa Id"
                            value={pompaId}
                            onChange={(e) => setPompaId(e.target.value)}
                        />  
             <br /><br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
               Ruaj ndryshimet
            </button>
        </form>
    );
}