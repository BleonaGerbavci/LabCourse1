import TextField from '@mui/material/TextField';

import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function KompaniaAdd(){ 




    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
     const [emri, setEmri] = useState('');
     const [emaili, setEmaili] = useState('');
     const [nrTelefonit, setNrTelefonit] = useState('');
     const [nrAdreses, setNrAdreses] = useState('');
     const [emriRruges, setEmriRruges] = useState('');
     const [zipCode, setZipCode] = useState('');
     const [pompaId, setPompaId] = useState('');

     
     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const kompania = { emri, emaili, nrTelefonit, nrAdreses, emriRruges,zipCode,pompaId };
 
         axios.post('https://localhost:7138/api/Kompania/ShtoKompani', kompania)
             .then(() => {
                window.alert('Kompania u shtua me sukses!');
                navigate('../kompania');
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
                   Shto Kompani
                   </h4>
            <br />
            <br />
                        <TextField
                           
                            id="margin-dense"
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
                            id="margin-dense"
                            label="Email"
                            value={emaili}
                            onChange={(e) => setEmaili(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                           
                        /> 
                        <TextField
                            id="margin-dense"
                            label="Numri kontaktues"
                            type="number"
                            value={nrTelefonit}
                            onChange={(e) => setNrTelefonit(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                        <TextField
                            id="margin-dense"
                            label="Numri i adreses"
                            value={nrAdreses}
                            onChange={(e) => setNrAdreses(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                         <TextField
                            id="filled"
                            label="Rruga"
                            value={emriRruges}
                            onChange={(e) => setEmriRruges(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                         <TextField
                            id="filled"
                            label="Zip Kodi"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',
                            }}
                        /> 
                         <TextField
                            id="filled"
                            label="Pompa Id"
                            value={pompaId}
                            onChange={(e) => setPompaId(e.target.value)}
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