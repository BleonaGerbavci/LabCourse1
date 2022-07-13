import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function GarazhaAdd(){

const [refreshKey, setRefreshKey] = useState('0');
const navigate = useNavigate();

  //Set data to database
  const [emriRruges, setEmriRruges] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [kompaniaId, setKompaniaId] = useState('');
 
  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const garazha = { emriRruges,zipCode,kompaniaId};

      axios.post('https://localhost:7147/api/Garazha/ShtoGarazha', garazha)
          .then(() => {
             window.alert('Garazha u shtua me sukses!')
             navigate('../garazha');
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
                   Shto Garazhen
                   </h4>
            <br />
            <br />
            
                                <TextField
                                    required
                                    id="filled-number"
                                    label="Emri i Rruges"
                                    value={emriRruges}
                                    onChange={(e) => setEmriRruges(e.target.value)}
                                    sx={{ 
                                        marginLeft:'20px',
                                        marginRight:'20px',
                                        marginBottom: '20px'
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
                                
                                <TextField
                                    id="filled-required"
                                    label="Kompania Id"
                                    value={kompaniaId}
                                    onChange={(e) => setKompaniaId(e.target.value)}
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