import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';


export default function KompaniaAdd(){


    

    const [refreshKey, setRefreshKey] = useState('0');
    

     //Set data to database
     const [name, setName] = useState('');
     const [adress, setAdress] = useState('');
     const [city, setCity] = useState('');
     const [email, setEmail] = useState('');
     const [contactNumber, setContactNumber] = useState('');
     
 
     const handleAdd = (e) => {
         e.preventDefault();
         const kompania = { name, adress, city, email, contactNumber };
 
         axios.post('https://localhost:7138/api/Kompania/ShtoKompani', kompania)
             .then(() => {
                window.confirm('Kompania u shtua me sukses!')
             })
             .then(() => {
             setRefreshKey(refreshKey => refreshKey + 1)
         })
     }

     return(
      
        <form onSubmit={handleAdd}>
            <br />
            <br />
                        <TextField
                                required
                                id="filled-required"
                                label="Name"
                                variant="standard"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                        />
                        <TextField
                            id="filled-number"
                            label="Adress"
                            variant="standard"
                            value={adress}
                            onChange={(e) => setAdress(e.target.value)}
                        />
                        <TextField
                            id="filled"
                            label="City"
                            variant="standard"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <TextField
                            id="filled"
                            label="Email"
                            variant="standard"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                         <TextField
                            id="filled"
                            label="Numri Kontaktues"
                            type="number"
                            variant="standard"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
                       
                        <button type="submit" className="btn btn-outline-secondary">
                           Add
                        </button>
            </form>
  
)}