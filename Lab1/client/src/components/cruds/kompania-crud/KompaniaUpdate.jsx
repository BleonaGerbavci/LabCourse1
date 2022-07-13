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
                <h4 className="text-h4">
                Perditeso kompanine
                </h4>
               <br />
               <br />
                        <TextField
                       
                        id="filled-required"
                        label="Id"
                        value={kompaniaId}
                        onChange={(e) => setKompaniaId(e.target.value)}
                        sx={{ 
                            marginLeft:'20px',
                            marginRight:'20px',
                            marginBottom: '20px'
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
                                marginBottom: '20px'
                            }}
                        /> 
                        <TextField
                            id="filled-number"
                            label="Email"
                            value={emaili}
                            onChange={(e) => setEmaili(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="Numri kontaktues"
                            type="number"
                            value={nrTelefonit}
                            onChange={(e) => setNrTelefonit(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="Numri i adreses"
                            value={nrAdreses}
                            onChange={(e) => setNrAdreses(e.target.value)}
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
                         <TextField
                            id="filled"
                            label="Pompa Id"
                            value={pompaId}
                            onChange={(e) => setPompaId(e.target.value)}
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