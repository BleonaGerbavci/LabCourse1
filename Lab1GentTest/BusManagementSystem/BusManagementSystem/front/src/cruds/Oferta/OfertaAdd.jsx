import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';

export default function OfertaAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [Description, setDescription] = useState('');
  const [Price,setPrice] = useState('');
  const [KompaniaId,setKompaniaId] = useState('');
  const [LinjaId,setLinjaId] = useState('');
  
  

  
  

  const handleAdd = (e) => {
      e.preventDefault();
      const oferta = { Description,Price,KompaniaId,LinjaId};

      axios.post('https://localhost:7041/api/Ofertat/ShtoOferta', oferta)
          .then(() => {
             window.confirm('Oferta u shtua me sukses')
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
                                  label="description"
                                  variant="standard"
                                  value={Description}
                                  onChange={(e) => setDescription(e.target.value)}
                              />
                          <TextField
                              id="filled-number"
                              label="Price"
                              variant="standard"
                              value={Price}
                              onChange={(e) => setPrice(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="KompaniaId"
                              variant="standard"
                              value={KompaniaId}
                              onChange={(e) => setKompaniaId(e.target.value)}
                          />
                         <TextField
                              id="filled"
                              label="LinjaId"
                              variant="standard"
                              value={LinjaId}
                              onChange={(e) => setLinjaId(e.target.value)}
                          />
                          
                         <button type="submit" className="btn btn-outline-secondary">
                             Shto Oferten
                          </button>
              </form>
      )}