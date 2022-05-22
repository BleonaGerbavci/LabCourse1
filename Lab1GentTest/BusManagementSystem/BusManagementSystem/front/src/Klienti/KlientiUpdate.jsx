import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


export default function KlientiUpdate() {

    const[klienti, setKlienti] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7041/api/Klienti/GetKlientat')
            .then(response => {
                setKlienti(response.data);
            })
    }, [refreshKey])

    const [id, setId] = useState('');
    const [name, setname] = useState('');
    const [surname,setsurname] = useState('');
    const [phoneNumber,setphoneNumber] = useState('');
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Klienti= { id, name, surname, phoneNumber,email,password };
            klienti.map((klientiUpdate) => {
                if (id == klientiUpdate.id) {
                        axios.put('https://localhost:7041/api/Klienti/UpdateKlienti',Klienti)
                        .then((response) => {
                            console.log((Klienti));
                           
                    }).then(() => {
                        window.confirm('Klienti u perditesua me sukses!')
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
                                  label="name"
                                  variant="standard"
                                  value={name}
                                  onChange={(e) => setname(e.target.value)}
                              />
                          <TextField
                              id="filled-number"
                              label="surname"
                              variant="standard"
                              value={surname}
                              onChange={(e) => setsurname(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="phoneNumber"
                              variant="standard"
                              value={phoneNumber}
                              onChange={(e) => setphoneNumber(e.target.value)}
                          />
                         <TextField
                              id="filled"
                              label="email"
                              variant="standard"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
                          />
                           <TextField
                              id="filled"
                              label="password"
                              variant="standard"
                              value={password}
                              onChange={(e) => setpassword(e.target.value)}
                          />
                        
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}
