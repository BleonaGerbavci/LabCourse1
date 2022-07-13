import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RezervoAutobusinUpdate() {

    const [refreshKey, setRefreshKey] = useState('0');
    
    const navigate = useNavigate();

    const[rezervimiId, setRezervimiId] = useState();
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/RezervoAutobusin/GetRezervoAutobusin')
        .then(response => {
            setRezervoAutobusin(response.data);
        })
}, [refreshKey])

    const [dataRezervimit, setDataRezervimit] = useState('');
    const [dataKthimit, setDataKthimit] = useState('');
    const [userId, setUserId] = useState();
    const [autobusiId, setAutobusiId] = useState();
    
        const handleEdit = (e) => {
            e.preventDefault();
            const RezervoAutobusin = { rezervimiId,dataRezervimit,dataKthimit,userId,autobusiId}; 
            RezervoAutobusin.map((rezervoAutobusin) => {
                if (rezervoAutobusinId == rezervoAutobusin.rezervoAutobusinId) {
                    axios.put('https://localhost:7147/api/RezervoAutobusin/UpdateRezervoAutobusin', RezervoAutobusin)
                    .then(() => {
                        window.alert('RezervoAutobusin u perditesua me sukses!')
                        navigate('../rezervoAutobusin');
                    })
                }
            })
            
        }
    

        return (
            <form onSubmit={handleEdit}>
                       <h4 className="d-flex justify-content m-3">
                       Perditeso RezervoAutobusin
                       </h4>
                       <br />
                       <br />

                                <TextField
                                    required
                                    id="filled-required"
                                    label="Id"
                                    value={rezervimiId}
                                    onChange={(e) => setRezervimiId(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',   
                                        marginBottom:'20px'                          
                                    }}
                                />
                                
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Data Rezervimit"
                                    value={dataRezervimit}
                                    onChange={(e) => setDataRezervimit(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                                <TextField
                                    required
                                    id="filled-number"
                                    label="Data Kthimit"
                                    value={dataKthimit}
                                    onChange={(e) => setDataKthimit(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />
                                
                                <TextField
                                    id="filled-required"
                                    label="User Id"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                                <TextField
                                    id="filled-required"
                                    label="Autobusi Id"
                                    value={autobusiId}
                                    onChange={(e) => setAutobusiId(e.target.value)}
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
    
