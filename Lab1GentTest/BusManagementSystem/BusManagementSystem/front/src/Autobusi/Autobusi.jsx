import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material';
import handleEdit from './AutobusiUpdate';
import { Link } from 'react-router-dom';



export default function Autobusi() {

    const[autobusi, setAutobusi] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7041/api/Autobusi/GetAutobusat')
            .then(response => {
                setAutobusi(response.data);
            })
    }, [refreshKey])




 //Delete data in database    
 function deleteAutobusi(autobusiId) {
    const confirmBox = window.confirm(
        "A jeni i sigurte qe deshironi  me fshi Autobusin me id " + autobusiId
    )
    if (confirmBox === true) {
        axios.delete('https://localhost:7041/api/Autobusi/FshijeAutobusin?id=' + autobusiId)
            .then(() => {
                setRefreshKey(refreshKey => refreshKey + 1)
            })
    }
    else {
        console.log("Process of deleting 'Autobusi' canceled !!");
    }
}
return(
    <div>
        <br /><br />
                          <Link to="/AutobusiAdd">
                           <button  type="button " 
                                className="btn btn-outline-secondary">
                                    Shto Autobusㅤ
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                                
                           </button>
                           </Link>
   
        <br />
        <br />
   
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Number</th>
                            <th>Capacity</th>
                            <th>Fuel-Capacity</th>
                            <th>Garazha-Id</th>
                            <th>Kompania-Id</th>
                            <th>Pompa-Id</th>
                            <th>Opsionet</th>



                        </tr>
                    </thead>
                    <tbody>
                        {autobusi.map(Autobusi=>(
                           <tr key={Autobusi.id}>
                               {console.log(Autobusi)}
                               <td>{Autobusi.id}</td>
                               <td>{Autobusi.number}</td>
                               <td>{Autobusi.capacity}</td>
                               <td>{Autobusi.fuelCapacity}</td>
                               <td>{Autobusi.garazhaId}</td>
                               <td>{Autobusi.kompaniaId}</td>
                               <td>{Autobusi.pompaId}</td>
                            
                               <td>
                               <Link to="/AutobusiUpdate">
                                  <button type="button"  onClick={handleEdit}  
                                   className="btn btn-light mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                   </button>
                                   </Link>

                                   <button type="button" onClick={() => deleteAutobusi(Autobusi.id)}
                                   className="btn btn-light mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                   </button>
                               </td>
                           </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    )
    
}