import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RezervimiAdd(){

const [refreshKey, setRefreshKey] = useState('0');
const navigate = useNavigate();

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
              window.alert('Rezervimi u shtua me sukses!')
              navigate('../qyteti');
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }

      return(
          
          <form onSubmit={handleAdd}>
            <br />
            <br />
                   <h4 className="text-h4">
                   Shto Rezervimin
                   </h4>
            <br />
            <br />
            
                                <TextField
                                    required
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
                                <br></br> 

                         <button type="submit" className="button">
                          Add
                         </button>
              </form>
    )}