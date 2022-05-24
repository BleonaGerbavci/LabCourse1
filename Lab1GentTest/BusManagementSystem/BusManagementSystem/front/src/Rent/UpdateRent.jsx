import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


export default function  UpdateRent() {

    const[rent, setRent] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7041/api/Rent/GetRent')
            .then(response => {
                setRent(response.data);
            })
    }, [refreshKey])

    const [id, setId] = useState('');
    const [name, setname] = useState('');
    const [surname,setsurname] = useState('');
    const [email,setemail] = useState('');
    const [phoneNumber,setphoneNumber] = useState('');
    const [personalNumber,setpersonalNumber] = useState('');
    const [numberOfPeople,setnumberOfPeople] = useState('');
    const [pickupDate,setpickupDate] = useState('');
    const [dropDate,setdropDate] = useState('');
    const [kompaniaId,setkompaniaId] = useState('');
  

    
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Rent= { id, name, surname, email,phoneNumber,personalNumber,numberOfPeople,pickupDate,dropDate,kompaniaId };
            rent.map((UpdateRent) => {
                if (id == UpdateRent.id) {
                        axios.put('https://localhost:7041/api/Rent/UpdateRent',Rent)
                        .then((response) => {
                            console.log((Rent));
                           
                    }).then(() => {
                        window.confirm('Rent u perditesua me sukses!')
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
                              label="email"
                              variant="standard"
                              value={email}
                              onChange={(e) => setemail(e.target.value)}
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
                              label="personalNumber"
                              variant="standard"
                              value={personalNumber}
                              onChange={(e) => setpersonalNumber(e.target.value)}
                          />
                             <TextField
                              id="filled"
                              label="numberofPeople"
                              variant="standard"
                              value={numberOfPeople}
                              onChange={(e) => setnumberOfPeople(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="pickupDate"
                              variant="standard"
                              value={pickupDate}
                              onChange={(e) => setpickupDate(e.target.value)}
                          />
                             <TextField
                              id="filled"
                              label="dropDate"
                              variant="standard"
                              value={dropDate}
                              onChange={(e) => setdropDate(e.target.value)}
                          />
                                     <TextField
                              id="filled"
                              label="kompaniId"
                              variant="standard"
                              value={kompaniaId}
                              onChange={(e) => setkompaniaId(e.target.value)}
                          />
                        
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}
