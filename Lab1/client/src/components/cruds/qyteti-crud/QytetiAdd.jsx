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
                   <h4 className="d-flex justify-content m-3">
                   Shto Qytet
                   </h4>
            <br />
            <br />
                         <TextField
                            id="filled"
                            label="Zipkodi"
                            value={qytetiZipCode}
                            onChange={(e) => setQytetiZipCode(e.target.value)}
                        />
                         <TextField
                            id="filled"
                            label="Emri i qytetit"
                            value={emriQytetit}
                            onChange={(e) => setEmriQytetit(e.target.value)}
                        />
                       <br /> <br />


                        <button type="submit" className="btn btn-outline-secondary">
                        Add
                        </button>
            </form>
  
)}