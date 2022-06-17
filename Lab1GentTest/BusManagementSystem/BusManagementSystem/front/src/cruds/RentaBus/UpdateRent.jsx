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

    const [rentId, setrentId] = useState('');
    const [pickupDate,setpickupDate] = useState('');
    const [dropDate,setdropDate] = useState('');
    const [cmimi,setcmimi] = useState('');
    const [userId,setuserId] = useState('');
  

    
    
        const handleEdit = (e) => {
            e.preventDefault();
            const Rent= { rentId, pickupDate,dropDate,cmimi,userId };
            rent.map((UpdateRent) => {
                if (rentId == UpdateRent.rentId) {
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
                label="rentId"
                variant="standard"
                value={rentId}
                onChange={(e) => setrentId(e.target.value)}
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
                              label="cmimi"
                              variant="standard"
                              value={cmimi}
                              onChange={(e) => setcmimi(e.target.value)}
                          />
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
