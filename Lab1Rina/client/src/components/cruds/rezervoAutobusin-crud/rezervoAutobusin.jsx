import React,{useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './RezervoAutobusinUpdate';
import { Link } from 'react-router-dom';
import userAdd from '../../../images/crud-img/add-user.svg'

export default function RezervoAutobusin() {

    const[rezervoAutobusin, setRezervoAutobusin] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/RezervoAutobusin/GetRezervoAutobusin')
            .then(response => {
                setRezervoAutobusin(response.data);
            })
    }, [refreshKey])




     //Delete data in database    
     function deleteRezervoAutobusin(rezervimiId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini rezervoAutobusin me id  " + rezervimiId  +"?  " 
        )

        if (confirmBox === true) {
            axios.delete('https://localhost:7147/api/RezervoAutobusin/FshijRezervoAutobusin?rezervimiId=' + rezervimiId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a RezervoAutobusin canceled !!");
        }
    }
    return(
 
            <div>
                 <div className='link'>
                 <Link to="../rezervoAutobusinAdd">
                    <img src ={userAdd} alt="user-add" className='icons' />
                    <p> Shto User</p>
                </Link>
                </div>

                <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Data Rezervimit</th>
                            <th>Data Kthimit</th>
                            <th>User</th>
                            <th>Autobusi</th>
                            <th>Opsionet</th>

                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rezervoAutobusin.map(rezervoAutobusin=>(
                           <tr key={rezervoAutobusin.rezervimiId}>
                               <td>{rezervoAutobusin.rezervimiId}</td>
                               <td>{rezervoAutobusin.dataRezervimit}</td>
                               <td>{rezervoAutobusin.dataKthimit}</td>
                               <td>{rezervoAutobusin.userId}</td>
                               <td>{rezervoAutobusin.autobusiId}</td>
                               
                               <td>
                               <Link to="/RezervoAutobusinUpdate" state={{rezervimiId:rezervoAutobusin.rezervimiId}}>
                                    <button type="button" className="btn1" onClick={handleEdit} >
                                                Update
                                    </button>
                                </Link>
                                </td>

                                <td>
                                   <button type="button" onClick={() => deleteRezervoAutobusin(rezervoAutobusin.rezervimiId)}
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