import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';

export default function RentAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
 
  const [PickupDate,setPickupDate] = useState('');
  const [DropDate,setDropDate] = useState('');
  const [Cmimi,setCmimi]= useState('');
  const [UserId,setUserId] = useState('');

 
  
  

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const rent = { PickupDate,DropDate,Cmimi,UserId };

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
                              label="Cmimi"
                              variant="standard"
                              value={Cmimi}
                              onChange={(e) => setCmimi(e.target.value)}
                          />
                                       <TextField
                              id="filled"
                              label="UserId"
                              variant="standard"
                              value={UserId}
                              onChange={(e) => setUserId(e.target.value)}
                          />
                          
                          
                       
                       
                       
                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Rent
                          </button>
              </form>
      )}