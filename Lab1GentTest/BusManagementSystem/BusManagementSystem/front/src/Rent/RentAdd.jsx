import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';

export default function RentAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [Name, setName] = useState('');
  const [Surname,setSurname] = useState('');
  const [Email,setEmail] = useState('');
  const [PhoneNumber,setPhoneNumber] = useState('');
  const [PersonalNumber,setPersonalNumber] = useState('');
  const [NumberofPeople,setNumberofPeople] = useState('');
  const [PickupDate,setPickupDate] = useState('');
  const [DropDate,setDropDate] = useState('');
  const [KompaniaId,setKompaniaId] = useState('');

 
  
  

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const rent = { Name,Surname,Email,PhoneNumber,PersonalNumber,NumberofPeople,PickupDate,DropDate,KompaniaId };

      axios.post('https://localhost:7041/api/Rent/ShtoRent', rent)
          .then(() => {
             window.confirm('Rent u shtua me sukses')
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
                              label="email"
                              variant="standard"
                              value={Email}
                              onChange={(e) => setEmail(e.target.value)}
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
                              label="personalNumber"
                              variant="standard"
                              value={PersonalNumber}
                              onChange={(e) => setPersonalNumber(e.target.value)}
                          />
                             <TextField
                              id="filled"
                              label="numberofPeople"
                              variant="standard"
                              value={NumberofPeople}
                              onChange={(e) => setNumberofPeople(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="pickupDate"
                              variant="standard"
                              value={PickupDate}
                              onChange={(e) => setPickupDate(e.target.value)}
                          />
                             <TextField
                              id="filled"
                              label="dropDate"
                              variant="standard"
                              value={DropDate}
                              onChange={(e) => setDropDate(e.target.value)}
                          />
                                     <TextField
                              id="filled"
                              label="kompaniId"
                              variant="standard"
                              value={KompaniaId}
                              onChange={(e) => setKompaniaId(e.target.value)}
                          />
                          
                       
                       
                       
                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Rent
                          </button>
              </form>
      )}