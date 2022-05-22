import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function PompaUpdate() {

    const[pompa, setPompa] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');

    const navigate = useNavigate();
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7138/api/Pompa/GetPompa')
            .then(response => {
                setPompa(response.data);
            })
    }, [refreshKey])

   
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [adress,setAdress] = useState('');
   

    
        const handleEdit = (e) => {
            e.preventDefault();
            const Pompa= { id, name, adress  };
            pompa.map((pompaUpdate) => {
                if (id == pompaUpdate.id) {
                        axios.put('https://localhost:7138/api/Pompa/UpdatePompa', Pompa)
                        .then((response) => {
                            console.log((Pompa));
                           
                    }).then(() => {
                        window.alert('Pompa u perditesua me sukses!');
                        navigate('../pompa');
                    })
                }
            })
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                            <br />
                            <br />
                                <h4 className="d-flex justify-content m-3">
                                Perditeso pompen
                                </h4>
                            <br />
                            <br />
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
                                    label="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            <TextField
                                id="filled-number"
                                label="Adress"
                                value={adress}
                                onChange={(e) => setAdress(e.target.value)}
                            />
                           
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}