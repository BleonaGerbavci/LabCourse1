import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function RezervoAutobusinAdd(){

const [refreshKey, setRefreshKey] = useState('0');

const navigate = useNavigate();

  //Set data to database
  const [dataRezervimit, setDataRezervimit] = useState('');
  const [dataKthimit, setDataKthimit] = useState('');
  const [userId, setUserId] = useState('');
  const [autobusiId, setAutobusiId] = useState('');
 
  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const rezervoAutobusin = { dataRezervimit,dataKthimit,userId,autobusiId}; 

      axios.post('https://localhost:7147/api/RezervoAutobusin/ShtoRezervoAutobusin', rezervoAutobusin)
          .then(() => {
             window.alert('RezervoAutobusin u shtua me sukses!')
             navigate('../rezervoAutobusin');
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }

      return(
          
          <form onSubmit={handleAdd}>
                   <h4 className="text-h4">
                   Shto RezervoAutobusin
                   </h4>
            <br />
            <br />
            
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Data e Rezervimit"
                                    value={dataRezervimit}
                                    onChange={(e) => setDataRezervimit(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px', 
                                        marginBottom: '20px'                            
                                    }}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Data e Kthimit"
                                    value={dataKthimit}
                                    onChange={(e) => setDataKthimit(e.target.value)}
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
                                    label="Autobusi Id"
                                    value={autobusiId}
                                    onChange={(e) => setAutobusiId(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                               <br /> <br />

                         
                         <button type="submit" className="button">
                             Add
                          </button>
              </form>
    )}