import TextField from '@mui/material/TextField';
import { React,  useState } from 'react';
import axios from 'axios';


export default function PushimetAdd(){
const [refreshKey, setRefreshKey] = useState('0');
  //Set data to database
  const [DataFilimit, setDataFilimit] = useState('');
  const [DataMbarimit,setDataMbarimit] = useState('');
  const [UserId,setUserId] = useState('');
  
  
  <br></br>
  

  const handleAdd = (e) => {
      e.preventDefault();
      const pushimi= {DataFilimit,DataMbarimit,UserId };

      axios.post('https://localhost:7041/api/Pushimet/ShtoPushime',pushimi)
          .then(() => {
             window.confirm('Pushimi u shtua me sukses')
          })
          .then(() => {
          setRefreshKey(refreshKey => refreshKey + 1)
      })
  }
 

      return(
        

          <form onSubmit={handleAdd}>
               <br></br>
                              <TextField
                                  required
                                  id="filled-basic"
                                  label="DataFilimit"
                                  variant="filled"
                                  value={DataFilimit}
                                  onChange={(e) => setDataFilimit(e.target.value)}
                              />
                              < br/> < br/>
                          
    
                          <TextField
                              id="filled-basic"
                              label="DataMbarimit"
                              variant="filled"
                              value={DataMbarimit}
                              onChange={(e) => setDataMbarimit(e.target.value)}
                          />
                          < br/> < br/>
                       
                           <TextField
                             id="filled-basic"
                              label="UserId"
                              variant="filled"
                              value={UserId}
                              onChange={(e) => setUserId(e.target.value)}
                          />
                         < br/>< br/>
                         <button type="submit" className="btn btn-outline-primary">
                             Shto Pushimin
                          </button>
              </form>
      )}