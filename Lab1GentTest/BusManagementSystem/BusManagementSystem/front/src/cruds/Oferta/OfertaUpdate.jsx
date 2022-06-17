import TextField from '@mui/material/TextField';
import { React, useEffect, useState } from 'react';
import axios from 'axios';


export default function OfertaUpdate() {

    const[oferta, setOferta] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7041/api/Ofertat/GetOfertat')
            .then(response => {
                setOferta(response.data);
            })
    }, [refreshKey])

    const [ofertaId, setofertaId] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const [kompaniaId,setkompaniaId] = useState('');
    const [linjaId,setlinjaId] = useState('');

    
        const handleEdit = (e) => {
            e.preventDefault();
            const Oferta= { ofertaId,description,price,kompaniaId,linjaId};
            oferta.map((ofertaUpdate) => {
                if (ofertaId == ofertaUpdate.ofertaId) {
                        axios.put('https://localhost:7041/api/Ofertat/UpdateOferta',Oferta)
                        .then((response) => {
                            console.log((Oferta));
                           
                    }).then(() => {
                        window.confirm('Oferta u perditesua me sukses!')
                    })
                }
            })
            
        }
    

    return (
        <form onSubmit={handleEdit} >
                  <TextField
            required
                id="filled-required"
                label="ofertaId"
                variant="standard"
                value={ofertaId}
                onChange={(e) => setofertaId(e.target.value)}
            /> 
            <TextField
            required
            id="filled-required"
            label="description"
            variant="standard"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
        />
             <TextField
                                  required
                                  id="filled-required"
                                  label="price"
                                  variant="standard"
                                  value={price}
                                  onChange={(e) => setprice(e.target.value)}
                              />
                          <TextField
                              id="filled-number"
                              label="kompaniaId"
                              variant="standard"
                              value={kompaniaId}
                              onChange={(e) => setkompaniaId(e.target.value)}
                          />
                          <TextField
                              id="filled"
                              label="linjaId"
                              variant="standard"
                              value={linjaId}
                              onChange={(e) => setlinjaId(e.target.value)}
                          />
                        
                            <br /><br /><br />
                           
                           <button type="submit" className="btn btn-outline-secondary">
                               Ruaj ndryshimet
                            </button>
        </form>
    );
}
