import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function GarazhaUpdate() {

    const[garazha, setGarazha] = useState([]); //qeto e shtova 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

    const[garazhaID, setGarazhaID] = useState();//bleona nuk e ka
    
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
            garazha.map((garazha) => {
                if (garazhaId == garazha.garazhaId) {
                        axios.put('https://localhost:7147/api/Garazha/UpdateGarazha', Garazha)
                        .then(() => {
                        window.confirm('Garazha u perditesua me sukses!')
                        navigate('../garazha');
                    })
                }
            }) 
        }
    

        return (
            <form onSubmit={handleEdit} >
                       <h4 className="text-h4">
                       Perditeso Garazhen
                       </h4>
                <br />
                <br/>

            <TextField
                required
                id="filled-required"
                label="Id"
                value={garazhaID}
                onChange={(e)=> setGarazhaID(e.target.value)}
                sx={{ 
                    marginLeft:'20px',
                    marginRight:'20px',
                    marginBottom: '20px'
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
                    marginBottom: '20px'
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
            <TextField
                id="filled-required"
                label="Kompania Id"
                value={kompaniaId}
                onChange={(e) => setKompaniaId(e.target.value)}
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
    
