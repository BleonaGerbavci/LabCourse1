import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';


export default function RezervoAutobusinAdd(){

const [refreshKey, setRefreshKey] = useState('0');
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
             window.confirm('RezervoAutobusin u shtua me sukses!')
   
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
                   Shto RezervoAutobusin
                   </h4>
            <br />
            <br />
            
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Data e Rezervimit"
                                    variant="standard"
                                    value={dataRezervimit}
                                    onChange={(e) => setDataRezervimit(e.target.value)}
                                />

                                <TextField
                                    id="filled-number"
                                    label="Data e Kthimit"
                                    variant="standard"
                                    value={dataKthimit}
                                    onChange={(e) => setDataKthimit(e.target.value)}
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
                                    label="Autobusi Id"
                                    variant="standard"
                                    value={autobusiId}
                                    onChange={(e) => setAutobusiId(e.target.value)}
                                />

                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto RezervoAutobusin
                          </button>
              </form>
    )}