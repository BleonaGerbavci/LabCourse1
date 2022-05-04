import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';

export default function OrariAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [WeekDay, setWeekDay] = useState('');
  const [StartingHour,setStartingHour] = useState('');
  const [EndingHour,setEndingHour] = useState('');

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const orari = { WeekDay,StartingHour,EndingHour };

      axios.post('https://localhost:7041/api/Orari/ShtoOrarin', orari)
          .then(() => {
             window.confirm('Orari u shtua me sukses')
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
                                  label="WeekDay"
                                  variant="standard"
                                  value={WeekDay}
                                  onChange={(e) => setWeekDay(e.target.value)}
                              />
                          <TextField
                              id="filled-number"
                              label="StartingHour"
                              variant="standard"
                              value={StartingHour}
                              onChange={(e) => setStartingHour(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="EndingHour"
                              variant="standard"
                              value={EndingHour}
                              onChange={(e) => setEndingHour(e.target.value)}
                          />
                         
                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Orarin
                          </button>
              </form>
      )}