import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';


export default function RezervimiAdd(){

const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [emri, setEmri] = useState('');
  const [mbiemri, setMbiemri] = useState('');
  const [emaili, setEmaili] = useState('');
  const [nrtelefonit, setNrTelefonit] = useState('');
  const [userId, setUserId] = useState('');
  const [linjaId, setLinjaId] = useState('');
 
  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const rezervimi = { emri,mbiemri,emaili,nrtelefonit,userId,linjaId};

      axios.post('https://localhost:7147/api/Rezervimi/ShtoRezervimi', rezervimi)
          .then(() => {
             window.confirm('Rezervimi u shtua me sukses!')
   
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }

      return(
          
          <form onSubmit={handleAdd}>
            <br />
            <br />
                   <h4 className="d-flex justify-content m-3">
                   Shto Rezervimin
                   </h4>
            <br />
            <br />
            
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

                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Rezervimin
                          </button>
              </form>
    )}