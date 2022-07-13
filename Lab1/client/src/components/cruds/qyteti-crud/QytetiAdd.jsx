import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function QytetiAdd(){ 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();

     //Set data to database
    const [qytetiZipCode, setQytetiZipCode] = useState('');
    const [emriQytetit, setEmriQytetit] = useState('');
 
    const handleAdd = (e) => {
         e.preventDefault();
         const qyteti = { qytetiZipCode,emriQytetit };
 
         axios.post('https://localhost:7138/api/Qyteti/ShtoQytet', qyteti)
             .then(() => {
                window.alert('Qyteti u shtua me sukses!');
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
                   Shto Qytet
                   </h4>
            <br />
            <br />
                         <TextField
                            id="filled"
                            label="Zipkodi"
                            value={qytetiZipCode}
                            onChange={(e) => setQytetiZipCode(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        />
                         <TextField
                            id="filled"
                            label="Emri i qytetit"
                            value={emriQytetit}
                            onChange={(e) => setEmriQytetit(e.target.value)}
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