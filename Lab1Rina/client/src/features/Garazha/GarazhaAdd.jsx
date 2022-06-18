import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';


export default function GarazhaAdd(){

const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [emriRruges, setEmriRruges] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [kompaniaId, setKompaniaId] = useState('');
 
  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const garazha = { emriRruges,zipCode,kompaniaId};

      axios.post('https://localhost:7147/api/Garazha/ShtoGarazha', garazha)
          .then(() => {
             window.confirm('Garazha u shtua me sukses!')
   
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
                   Shto Garazhen
                   </h4>
            <br />
            <br />
            
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
                                
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Kompania Id"
                                    variant="standard"
                                    value={kompaniaId}
                                    onChange={(e) => setKompaniaId(e.target.value)}
                                />

                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Garazha
                          </button>
              </form>
    )}