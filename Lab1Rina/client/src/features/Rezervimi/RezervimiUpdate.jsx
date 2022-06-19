import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function RezervimiUpdate() {
    
    const location = useLocation();


    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const[rezervimiID, setRezervimiID] = useState();
    
    //get data from database
    useEffect(() => {
        if(location.state != null){
            setRezervimiID(location.state.rezervimiID);
        }
    }, [rezervimiID])

  const [emri, setEmri] = useState('');
  const [mbiemri, setMbiemri] = useState('');
  const [emaili, setEmaili] = useState('');
  const [nrtelefonit, setNrTelefonit] = useState('');
  const [userId, setUserId] = useState('');
  const [linjaId, setLinjaId] = useState('');
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Rezervimi = { rezervimiID,emri,mbiemri,emaili,nrtelefonit,userId,linjaId};
            
            console.log(Rezervimi);
               
                        axios.put('https://localhost:7147/api/Rezervimi/UpdateRezervimi', Rezervimi)
                        .then((response) => {
                            console.log((Rezervimi));
                           
                    }).then(() => {
                        window.confirm('Rezervimi u perditesua me sukses!')
                        navigate('../rezervimi');
                    })
                
            
            
        }
    

        return (
            <>
                <br />
                       <h4 className="d-flex justify-content m-3">
                       Perditeso Rezervimin
                       </h4>
                <br />
    
         <form onSubmit={handleEdit}>
            <TextField
                required
                id="filled-required"
                label="Id"
                value={rezervimiID}
                disabled
            />
           <TextField
                                    required
                                    id="filled-required"
                                    label="Emri"
                                    variant="standard"
                                    value={emri}
                                    onChange={(e) => setEmri(e.target.value)}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Mbiemri"
                                    variant="standard"
                                    value={mbiemri}
                                    onChange={(e) => setMbiemri(e.target.value)}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Emaili"
                                    variant="standard"
                                    value={emaili}
                                    onChange={(e) => setEmaili(e.target.value)}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Numri i telefonit"
                                    variant="standard"
                                    value={nrtelefonit}
                                    onChange={(e) => setNrTelefonit(e.target.value)}
                                />
                                
                                <TextField
                                    id="filled-required"
                                    label="Useri Id"
                                    variant="standard"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                />

                                <TextField
                                    id="filled-required"
                                    label="Linja Id"
                                    variant="standard"
                                    value={linjaId}
                                    onChange={(e) => setLinjaId(e.target.value)}
                                />
                            
                           
            <br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
                 Ruaj ndryshimet
            </button>

        </form>
        </>
    );
}
    
