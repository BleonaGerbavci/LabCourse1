import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function UserAdd(){ 

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
     //Set data to database
     const [emri, setEmri] = useState('');
     const [mbiemri, setMbiemri] = useState('');
     const [emaili, setEmaili] = useState('');
     const [passwordi, setPasswordi] = useState('');
     const [nrTelefonit, setNrTelefonit] = useState('');
     const [roliId, setRoliId] = useState('');
     const [zipCode, setZipCode] = useState('');
     const [orari, setOrari] = useState('');
     const [ditetEpushimit, setDitetEpushimit] = useState('');
     
     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const useri = { emri,mbiemri,emaili,passwordi,nrTelefonit,roliId,zipCode,orari,ditetEpushimit};
 
         axios.post('https://localhost:7138/api/User/AddUsers', useri)
             .then(() => {
                window.alert('Useri u shtua me sukses!');
                navigate('../user');
             })
             .then(() => {
             setRefreshKey(refreshKey => refreshKey + 1)
         })
     }

     return(
      
        <form onSubmit={handleAdd}>
                   <h4 className="text-h4">
                    Shto User
                   </h4>
            <br />
            <br />
                 
                        <TextField
                            id="filled"
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
                            id="filled"
                            label="Mbiemri"
                            value={mbiemri}
                            onChange={(e) => setMbiemri(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="Emaili"
                            value={emaili}
                            onChange={(e) => setEmaili(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        />  
                       
                        <TextField
                            id="filled"
                            label="Passwordi"
                            value={passwordi}
                            onChange={(e) => setPasswordi(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="Numri i Telefonit"
                            value={nrTelefonit}
                            onChange={(e) => setNrTelefonit(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="Roli Id"
                            value={roliId}
                            onChange={(e) => setRoliId(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="ZipKodi"
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="Orari"
                            value={orari}
                            onChange={(e) => setOrari(e.target.value)}
                            sx={{ 
                                marginLeft:'20px',
                                marginRight:'20px',                             
                            }}
                        /> 
                        <TextField
                            id="filled"
                            label="Ditet e pushimit"
                            value={ditetEpushimit}
                            onChange={(e) => setDitetEpushimit(e.target.value)}
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