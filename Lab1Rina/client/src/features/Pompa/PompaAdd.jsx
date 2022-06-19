import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';


export default function PompaAdd(){

const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [emri, setEmri] = useState('');
  const [emriRruges, setEmriRruges] = useState('');
  const [zipCode, setZipCode] = useState('');

 
  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const pompa = { emri,emriRruges,zipCode};

      axios.post('https://localhost:7147/api/Pompa/ShtoPompa', pompa)
          .then(() => {
             window.confirm('Pompa u shtua me sukses!')
   
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
                   Shto Pompa
                   </h4>
            <br />
            <br />
                                <TextField
                                    id="filled-required"
                                    label="Emri"
                                    variant="standard"
                                    value={emri}
                                    onChange={(e) => setEmri(e.target.value)}
                                />
            
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Emri i Rruges"
                                    variant="standard"
                                    value={emriRruges}
                                    onChange={(e) => setEmriRruges(e.target.value)}
                                />

                                <TextField
                                    id="filled-number"
                                    label="ZipCode"
                                    variant="standard"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                />


                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Pompa
                          </button>
              </form>
    )}