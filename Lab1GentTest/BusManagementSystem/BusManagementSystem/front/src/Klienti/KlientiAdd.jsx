import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';

export default function KlientiAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [Name, setName] = useState('');
  const [Surname,setSurname] = useState('');
  const [PhoneNumber,setPhoneNumber] = useState('');
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const klienti = { Name,Surname,PhoneNumber,Email,Password };

      axios.post('https://localhost:7041/api/Klienti/ShtoKlienta', klienti)
          .then(() => {
             window.confirm('Klienti u shtua me sukses')
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }

      return(
          

          <form onSubmit={handleAdd}>
                              <TextField
                                  required
                                  id="filled-required"
                                  label="name"
                                  variant="standard"
                                  value={Name}
                                  onChange={(e) => setName(e.target.value)}
                              />
                          <TextField
                              id="filled-number"
                              label="surname"
                              variant="standard"
                              value={Surname}
                              onChange={(e) => setSurname(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="phoneNumber"
                              variant="standard"
                              value={PhoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                         <TextField
                              id="filled"
                              label="email"
                              variant="standard"
                              value={Email}
                              onChange={(e) => setEmail(e.target.value)}
                          />
                           <TextField
                              id="filled"
                              label="password"
                              variant="standard"
                              value={Password}
                              onChange={(e) => setPassword(e.target.value)}
                          />
                       
                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Klientin
                          </button>
              </form>
      )}