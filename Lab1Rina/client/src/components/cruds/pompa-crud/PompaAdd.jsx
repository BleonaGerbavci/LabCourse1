import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PompaAdd(){

  const [refreshKey, setRefreshKey] = useState('0');
  const navigate = useNavigate();

  //Set data to database
  const [emri, setEmri] = useState('');
  const [emriRruges, setEmriRruges] = useState('');
  const [zipCode, setZipCode] = useState('');

 
  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const pompa = { emri,emriRruges,zipCode};

      axios.post('https://localhost:7147/api/Pompa/ShtoPompa', pompa)
          .then(() => {
            window.alert('Pompa u shtua me sukses!')
            navigate('../linja');
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
                                    value={emri}
                                    onChange={(e) => setEmri(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',
                                        marginBottom: '20px'                             
                                    }}
                                />
            
                                <TextField
                                    required
                                    id="filled-required"
                                    label="Emri i Rruges"
                                    value={emriRruges}
                                    onChange={(e) => setEmriRruges(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />

                                <TextField
                                    id="filled-number"
                                    label="ZipCode"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',                             
                                    }}
                                />
        
                        <br /><br /><br />
                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Add
                          </button>
        </form>
)}