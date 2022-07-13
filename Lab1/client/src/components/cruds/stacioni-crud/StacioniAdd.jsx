import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function StacioniAdd(){ 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
     const [emriRruges, setEmriRruges] = useState('');
     const [zipCode, setZipCode] = useState('');
  
     
     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const stacioni = { emriRruges,zipCode };
 
         axios.post('https://localhost:7138/api/Stacioni/ShtoStacion', stacioni)
             .then(() => {
                window.alert('Stacioni u shtua me sukses!');
                navigate('../stacioni');
             })
             .then(() => {
             setRefreshKey(refreshKey => refreshKey + 1)
         })
     }

     return(
      
        <form onSubmit={handleAdd}>
            <br />
            <br />
                   <h4 className=" text-h4">
                   Shto Stacion
                   </h4>
            <br />
            <br />
                 
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
                        
                       <br /> <br />


                        <button type="submit" className="button">
                           Add
                        </button>
            </form>
  
)}