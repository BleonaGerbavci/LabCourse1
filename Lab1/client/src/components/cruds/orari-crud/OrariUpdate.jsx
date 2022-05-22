import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function OrariUpdate() {

    const[orari, setOrari] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7138/api/Orari/GetOraret')
            .then(response => {
                setOrari(response.data);
            })
    }, [refreshKey])

   
    const [id, setId] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [startingHour,setStartingHour] = useState('');
    const [endingHour,setEndingHour] = useState('');

    
        const handleEdit = (e) => {
            e.preventDefault();
            const Orari= { id, weekDay, startingHour, endingHour  };
            orari.map((orariUpdate) => {
                if (id == orariUpdate.id) {
                        axios.put('https://localhost:7138/api/Orari/UpdateOrarin', Orari)
                        .then((response) => {
                            console.log((Orari));
                           
                    }).then(() => {
                        window.alert('Orari u perditesua me sukses!');
                        navigate('../orari');
                    })
                }
            })
            
        }
    

    return (
        <>
           <br />
            <br />
                   <h4 className="d-flex justify-content m-3">
                   Perditeso orarin
                   </h4>
            <br />
            <br />
        <form onSubmit={handleEdit} >

                            <TextField
                            required
                                id="filled-required"
                                label="Id"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                            />
              <TextField
                                    required
                                    id="filled-required"
                                    label="Dita e javes"
                                    value={weekDay}
                                    onChange={(e) => setWeekDay(e.target.value)}
                                />
                            <TextField
                                id="filled-number"
                                label="Ora e fillimit"
                                value={startingHour}
                                onChange={(e) => setStartingHour(e.target.value)}
                            />
                            <TextField
                                id="filled"
                                label="Ora e mbarimit"
                                value={endingHour}
                                onChange={(e) => setEndingHour(e.target.value)}
                            />
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
        </>
    );
}