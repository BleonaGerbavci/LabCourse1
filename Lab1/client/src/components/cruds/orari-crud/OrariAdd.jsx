import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function OrariAdd(){

const [refreshKey, setRefreshKey] = useState('0');

const navigate = useNavigate();

  //Set data to database
  const [WeekDay, setWeekDay] = useState('');
  const [StartingHour,setStartingHour] = useState('');
  const [EndingHour,setEndingHour] = useState('');

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const orari = { WeekDay,StartingHour,EndingHour };

      axios.post('https://localhost:7138/api/Orari/ShtoOrarin', orari)
          .then(() => {
             window.alert('Orari u shtua me sukses');
             navigate('../orari');
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }

      return(
          <>
            <br />
            <br />
                   <h4 className="d-flex justify-content m-3">
                   Shto Orar
                   </h4>
            <br />
            <br />
          

          <form onSubmit={handleAdd}>
                              <TextField
                                  required
                                  id="filled-required"
                                  label="WeekDay"
                                  value={WeekDay}
                                  onChange={(e) => setWeekDay(e.target.value)}
                              /> <br /><br />
                          <TextField
                              id="filled-number"
                              label="StartingHour"
                              value={StartingHour}
                              onChange={(e) => setStartingHour(e.target.value)}
                          /> <br /><br />
                          <TextField
                              id="filled"
                              label="EndingHour"
                              value={EndingHour}
                              onChange={(e) => setEndingHour(e.target.value)}
                          /> <br /> <br />
                         
                         
                         <button type="submit" className="btn btn-outline-secondary">
                            Shto 
                          </button>
              </form>
              </>
      )}