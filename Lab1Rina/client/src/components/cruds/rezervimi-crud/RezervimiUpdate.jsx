import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RezervimiUpdate() {

    const[rezervimi, setRezervimi] = useState([]); //e kom shtu prj bleones
    
    const [refreshKey, setRefreshKey] = useState('0');
    const navigate = useNavigate();

    const[rezervimiID, setRezervimiID] = useState();
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/Rezervimi/GetRezervimi')
            .then(response => {
            setRezervimiID(response.rezervimiID);
        })
    }, [refreshKey])

  const [emri, setEmri] = useState('');
  const [mbiemri, setMbiemri] = useState('');
  const [emaili, setEmaili] = useState('');
  const [nrtelefonit, setNrTelefonit] = useState('');
  const [userId, setUserId] = useState('');
  const [linjaId, setLinjaId] = useState('');
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Rezervimi = { rezervimiID,emri,mbiemri,emaili,nrtelefonit,userId,linjaId};
            qyteti.map((rezervimi) => {
                if (rezervimi == rezervimi.rezervimiID) { //ka munis mos mu kon mir          
                    axios.put('https://localhost:7147/api/Rezervimi/UpdateRezervimi', Rezervimi)
                    .then(() => {
                        window.alert('Rezervimi u perditesua me sukses!')
                        navigate('../rezervimi');
                    })
                }
            })  
            
        }
    

        return (
            <form onSubmit={handleEdit}>
                    <h4 className="d-flex justify-content m-3">
                       Perditeso Rezervimin
                    </h4>
                <br />
                <br />            
                                <TextField
                                   required
                                   id="filled-required"
                                   label="Id"
                                   value={rezervimiID}
                                   onChange={(e) => setRezervimiID(e.target.value)}
                                   sx={{ 
                                    marginLeft:'20px',
                                    marginRight:'20px', 
                                    marginBottom: '20px'                            
                                }}
                                />

                                <TextField
                                    required
                                    id="filled-required"
                                    label="Emri"
                                    value={emri}
                                    onChange={(e) => setEmri(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Mbiemri"
                                    value={mbiemri}
                                    onChange={(e) => setMbiemri(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Emaili"
                                    value={emaili}
                                    onChange={(e) => setEmaili(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Numri i telefonit"
                                    value={nrtelefonit}
                                    onChange={(e) => setNrTelefonit(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />
                                
                                <TextField
                                    id="filled-required"
                                    label="Useri Id"
                                    value={userId}
                                    onChange={(e) => setUserId(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                                <TextField
                                    id="filled-required"
                                    label="Linja Id"
                                    value={linjaId}
                                    onChange={(e) => setLinjaId(e.target.value)}
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
    
