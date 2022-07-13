import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import handleEdit from './GarazhaUpdate';
import { Link } from 'react-router-dom';
import '../crud-style.css'
import GarazhaAdd from '../../../images/crud-img/add-company.svg'


export default function Garazha() {

    const[garazha, setGarazha] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/Garazha/GetGarazha')
            .then(response => {
                setGarazha(response.data);
            })
    }, [refreshKey])




    //Delete data in database    
    function deleteGarazha(garazhaId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini garazhen me id  " + garazhaId  +"?  " 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7147/api/Garazha/FshijGarazha?garazhaId=' + garazhaId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a garazha canceled !!");
        }
    }

    return(
            <div>
                <div className='link'>
                <Link  to="../garazhaAdd">
                    <img src ={GarazhaAdd} alt="garazha-add" className='icons ok' />
                    <p> Shto Garazha</p>
                </Link>
                </div>
   
               
                <div className="table table-striped">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emri i rruges</th>
                            <th>Zip Kodi</th>
                            <th>Kompania</th>
                            <th>Opsionet</th>
                        </tr>
                    </thead>
                    <tbody>

                        {garazha.map(garazha=>(
                           <tr key={garazha.garazhaId}>
                               <td>{garazha.garazhaId}</td>
                               <td>{garazha.emriRruges}</td>
                               <td>{garazha.zipCode}</td>
                               <td>{garazha.kompaniaId}</td>
                               
                               <td>
                               <Link to="../GarazhaUpdate" state={{garazhaID:garazha.garazhaId}}>
                                    <button type="button" className='btn1' onClick={handleEdit} >
                                         Update
                                    </button>
                                </Link>
                                </td>

                                <td>
                                   <button type="button" onClick={() => deleteGarazha(garazha.garazhaId)}
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