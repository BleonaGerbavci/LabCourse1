import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function RezervoAutobusinUpdate() {
    
    const location = useLocation();


    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const[rezervimiId, setRezervimiId] = useState();
    
    //get data from database
    useEffect(() => {
        if(location.state != null){
            setRezervimiId(location.state.rezervimiId);
        }
    }, [rezervimiId])

    const [dataRezervimit, setDataRezervimit] = useState('');
    const [dataKthimit, setDataKthimit] = useState('');
    const [userId, setUserId] = useState();
    const [autobusiId, setAutobusiId] = useState();
    
        const handleEdit = (e) => {
            e.preventDefault();
            const RezervoAutobusin = { rezervimiId,dataRezervimit,dataKthimit,userId,autobusiId}; 
            
            console.log(RezervoAutobusin);
               
                        axios.put('https://localhost:7147/api/RezervoAutobusin/UpdateRezervoAutobusin', RezervoAutobusin)
                        .then((response) => {
                            console.log((RezervoAutobusin));
                           
                    }).then(() => {
                        window.confirm('RezervoAutobusin u perditesua me sukses!')
                        navigate('../rezervoAutobusin');
                    })
                
            
            
        }
    

        return (
            <>
                <br />
                       <h4 className="d-flex justify-content m-3">
                       Perditeso RezervoAutobusin
                       </h4>
                <br />
    
         <form onSubmit={handleEdit}>
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Id"
                                    value={rezervimiId}
                                    disabled
                                />
                                
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Data Rezervimit"
                                    variant="standard"
                                    value={dataRezervimit}
                                    onChange={(e) => setDataRezervimit(e.target.value)}
                                />

                                <TextField
                                    required
                                    id="filled-number"
                                    label="Data Kthimit"
                                    variant="standard"
                                    value={dataKthimit}
                                    onChange={(e) => setDataKthimit(e.target.value)}
                                />
                                
                                <TextField
                                    id="filled-required"
                                    label="User Id"
                                    variant="standard"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                />

                                <TextField
                                    id="filled-required"
                                    label="Autobusi Id"
                                    variant="standard"
                                    value={autobusiId}
                                    onChange={(e) => setAutobusiId(e.target.value)}
                                />
                            
                           
            <br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
                 Ruaj ndryshimet
            </button>

        </form>
        </>
    );
}
    
