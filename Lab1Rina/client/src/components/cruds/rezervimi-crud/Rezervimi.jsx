import React,{Component, useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './RezervimiUpdate';
import { Link } from 'react-router-dom';
import rezervimiAdd from '../../../images/crud-img/add-qytet.svg'


export default function Rezervimi() {

    const[rezervimi, setRezervimi] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/Rezervimi/GetRezervimi')
            .then(response => {
                setRezervimi(response.data);
            })
    }, [refreshKey])




    //Delete data in database    
    function deleteRezervimi(rezervimiId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini rezervimin me id  " + rezervimiId  +"?  " 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7147/api/Rezervimi/FshijRezervimi?rezervimiId=' + rezervimiId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a rezervimi canceled !!");
        }
    }

    return(
 
            <div>
                <div className='link'>
                 <Link to="/rezervimiAdd">
                    <img src ={rezervimiAdd} alt="rezervimi-add" className='icons' />
                    <p> Shto Rezervim</p>
                </Link>
                </div>
   
                <div className='table-container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Emaili</th>
                            <th>Numri i Telefonit</th>
                            <th>User</th>
                            <th>Linja</th>
                            <th>Opsionet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rezervimi.map(rezervimi=>(
                           <tr key={rezervimi.rezervimiId}>
                               <td>{rezervimi.rezervimiId}</td>
                               <td>{rezervimi.emri}</td>
                               <td>{rezervimi.mbiemri}</td>
                               <td>{rezervimi.emaili}</td>
                               <td>{rezervimi.nrTelefonit}</td>
                               <td>{rezervimi.userId}</td>
                               <td>{rezervimi.linjaId}</td>
                               
                               
                               <td>
                               <Link to="/RezervimiUpdate" state={{rezervimiID:rezervimi.rezervimiId}}>
                                    <button type="button"className='btn1' onClick={handleEdit}>
                                     Update
                                    </button>
                                </Link>
                                </td>

                                <td>   
                                    <button type="button" onClick={() => deleteRezervimi(rezervimi.rezervimiId)}
                                    className="btn2">
                                       Delete
                                    </button>
                               </td>
                           </tr>
        
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        
    )
    
}