import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PompaAdd(){
 
const [refreshKey, setRefreshKey] = useState('0');

const navigate = useNavigate();

  //Set data to database
  const [Name, setName] = useState('');
  const [Adress,setAdress] = useState('');
  

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const pompa = { Name,Adress };

      axios.post('https://localhost:7138/api/Pompa/ShtoPompa', pompa)
          .then(() => {
             window.alert('Pompa u shtua me sukses');
             navigate('../pompa');
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }

      return(
          <>
          <br /> <br />
          <h4 >Shto Pompe</h4> <br /> <br />

          <form onSubmit={handleAdd}>
                              <TextField
                                  required
                                  id="filled-required"
                                  label="Name"
                                  value={Name}
                                  onChange={(e) => setName(e.target.value)}
                              /> <br /> <br />
                              <TextField
                              id="filled-required"
                              label="Adress"
                              value={Adress}
                              onChange={(e) => setAdress(e.target.value)}
                          />
                          <br /> <br />

                         
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Pompen
                          </button>
              </form>
        </>
)}