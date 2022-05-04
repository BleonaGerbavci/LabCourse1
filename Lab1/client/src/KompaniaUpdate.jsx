import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';

export default function KompaniaUpdate() {

    const[kompania, setKompanite] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7138/api/Kompania/GetKompanite')
            .then(response => {
                setKompanite(response.data);
            })
    }, [refreshKey])

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    
        const handleEdit = (e) => {
            e.preventDefault();
            const kompaniaa = { id, name, adress, city, email, contactNumber };
            kompania.map((kompania) => {
                if (id == kompania.id) {
                        axios.put('https://localhost:7138/api/Kompania/UpdateKompanine', kompaniaa)
                        .then(() => {
                            window.confirm('Kompania u perditesua me sukses!')
                        })
                           
                  
                }
            })
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                 <TextField
                required
                id="filled-required"
                label="Id"
                variant="standard"
                value={id}
                onChange={(e) => setId(e.target.value)}
                 />
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
             <br /><br /><br />
                           
            <button type="submit" className="btn btn-outline-secondary">
               Ruaj ndryshimet
            </button>
        </form>
    );
}