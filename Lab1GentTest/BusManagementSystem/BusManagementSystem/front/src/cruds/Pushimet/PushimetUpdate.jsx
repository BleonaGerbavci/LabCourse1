import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


export default function PushimetUpdate() {

    const[pushimi, setPushimi] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7041/api/Pushimet/GetPushimet')
            .then(response => {
                setPushimi(response.data);
            })
    }, [refreshKey])

    const [pushimiId, setpushimiId] = useState('');
     const [dataFilimit,setdataFilimit] = useState('');
    const [dataMbarimit,setdataMbarimit] = useState('');
    const [userId,setuserId] = useState('');

   
    
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Pushimi= { pushimiId,dataFilimit,dataMbarimit,userId };
            pushimi.map((pushimiUpdate) => {
                if (pushimiId == pushimiUpdate.pushimiId) {
                        axios.put('https://localhost:7041/api/Pushimet/UpdatePushimet',Pushimi)
                        .then((response) => {
                            console.log((Pushimi));
                           
                    }).then(() => {
                        window.confirm('Pushimi u perditesua me sukses!')
                    })
                }
            })
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
                id="filled-required"
                label="pushimiId"
                variant="standard"
                value={pushimiId}
                onChange={(e) => setpushimiId(e.target.value)}
            />
            <br />
           
                          <TextField
                              id="filled-number"
                              label="dataFilimit"
                              variant="standard"
                              value={dataFilimit}
                              onChange={(e) => setdataFilimit(e.target.value)}
                          /><br />
                          <TextField
                              id="filled"
                              label="dataMbarimit"
                              variant="standard"
                              value={dataMbarimit}
                              onChange={(e) => setdataMbarimit(e.target.value)}
                          /><br />
                            <TextField
                              id="filled"
                              label="userId"
                              variant="standard"
                              value={userId}
                              onChange={(e) => setuserId(e.target.value)}
                          />
                              
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}
