import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function UserUpdate() { 

    const[user, setUser] = useState([]); 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
    //get data from database
    useEffect(() => { 
        axios.get('https://localhost:7138/api/User/GetUsers')
            .then(response => {
                setUser(response.data);
            })
    }, [refreshKey])

    const [userId, setUserId] = useState('');
    const [emri, setEmri] = useState('');
    const [mbiemri, setMbiemri] = useState('');
    const [emaili, setEmaili] = useState('');
    const [passwordi, setPasswordi] = useState('');
    const [nrTelefonit, setNrTelefonit] = useState('');
    const [roliId, setRoliId] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [orari, setOrari] = useState('');
    const [ditetEpushimit, setDitetEpushimit] = useState('');
    
        const handleEdit = (e) => {
            e.preventDefault();
            const userii = { userId,emri,mbiemri,emaili,passwordi,nrTelefonit,roliId,
                            zipCode,orari,ditetEpushimit };
            user.map((useri) => {
                if (userId == user.userId) {
                        axios.put('https://localhost:7138/api/User/UpdateUserin', userii)
                        .then(() => {
                            window.alert('Useri u perditesua me sukses!');
                            navigate('../user');
                        }) 
                }
            }) 
            
        }
    return (
        <form onSubmit={handleEdit} >
                <h4 className="d-flex justify-content m-3">
                Perditeso Userin
                </h4>
               <br />
               <br />
                        <TextField
                            id="filled"
                            label="User Id"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Emri"
                            value={emri}
                            onChange={(e) => setEmri(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Mbiemri"
                            value={mbiemri}
                            onChange={(e) => setMbiemri(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Emaili"
                            value={emaili}
                            onChange={(e) => setEmaili(e.target.value)}
                        />  
                       
                        <TextField
                            id="filled"
                            label="Passwordi"
                            value={passwordi}
                            onChange={(e) => setPasswordi(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Numri i Telefonit"
                            value={nrTelefonit}
                            onChange={(e) => setNrTelefonit(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Roli Id"
                            value={roliId}
                            onChange={(e) => setRoliId(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="ZipKodi"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Orari"
                            value={orari}
                            onChange={(e) => setOrari(e.target.value)}
                        /> 
                        <TextField
                            id="filled"
                            label="Ditet e pushimit"
                            type="number"
                            value={ditetEpushimit}
                            onChange={(e) => setDitetEpushimit(e.target.value)}
                        />                     
             <br /><br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
               Ruaj ndryshimet
            </button>
        </form>
    );
}
