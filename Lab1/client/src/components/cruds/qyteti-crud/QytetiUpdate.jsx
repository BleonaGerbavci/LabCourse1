import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function QytetiUpdate() { 

    const[qyteti, setQyteti] = useState([]); 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
    //get data from database
    useEffect(() => { 
        axios.get('https://localhost:7138/api/Qyteti/GetQytetet')
            .then(response => {
                setQyteti(response.data);
            })
    }, [refreshKey])

   
    const [qytetiZipCode, setQytetiZipCode] = useState('');
    const [emriQytetit, setEmriQytetit] = useState('');
    
        const handleEdit = (e) => {
            e.preventDefault();
            const qytetii = { qytetiZipCode,emriQytetit };
            qyteti.map((qyteti) => {
                if (qytetiZipCode == qyteti.qytetiZipCode) {
                        axios.put('https://localhost:7138/api/Qyteti/UpdateQytetin', qytetii)
                        .then(() => {
                            window.alert('Qyteti u perditesua me sukses!');
                            navigate('../qyteti');
                        }) 
                }
            }) 
            
        }
    return (
        <form onSubmit={handleEdit} >
                <h4 className="d-flex justify-content m-3">
                Perditeso Qytetin
                </h4>
               <br />
               <br />
                        <TextField
                        required
                        id="filled-required"
                        label="ZipCode"
                        value={qytetiZipCode}
                        onChange={(e) => setQytetiZipCode(e.target.value)}
                         />
                        <TextField
                        id="filled"
                        label="Emri i qytetit"
                        value={emriQytetit}
                        onChange={(e) => setEmriQytetit(e.target.value)}
                        /> 
                    
                        
             <br /><br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
               Ruaj ndryshimet
            </button>
        </form>
    );
}
