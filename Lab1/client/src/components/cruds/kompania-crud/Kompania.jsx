import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './KompaniaUpdate';
import { Link } from 'react-router-dom';
import '../crud-style.css'
import KompaniaAdd from '../../../images/crud-img/add-company.svg'



export default function Kompania() {

    const[kompanite, setKompanite] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => { 
        axios.get('https://localhost:7138/api/Kompania/GetKompanite')
            .then(response => {
                setKompanite(response.data);
            })
    }, [refreshKey])




     //Delete data in database    
     function deleteKompania(kompaniaId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini kompanine me id " + kompaniaId  +"?  " 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7138/api/Kompania/FshijKompanine?kompaniaId=' + kompaniaId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a company canceled !!");
        }
    }

   

        return(
            <div>
               <div className='link'>
                <Link  to="../kompaniaAdd">
                    <img src ={KompaniaAdd} alt="kompania-add" className='icons ok' />
                    <p> Shto Kompani</p>
                </Link>
                </div>
                
                <div className="table-container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Emri</th>
                            <th>Email</th>
                            <th>Numri kontaktues</th>
                            <th>Numri i adreses</th>
                            <th>Rruga</th>
                            <th>ZipCode</th>
                            <th>Pompa </th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                
                        
                        {kompanite.map(kompania=>(
                           <tr key={kompania.kompaniaId}>
                               <td>{kompania.kompaniaId}</td>
                               <td>{kompania.emri}</td>
                               <td>{kompania.emaili}</td>
                               <td>{kompania.nrTelefonit}</td>
                               <td>{kompania.nrAdreses}</td>
                               <td>{kompania.emriRruges}</td>
                               <td>{kompania.zipCode}</td>
                               <td>{kompania.pompaId}</td>

                               <td>
                               <Link to="../KompaniaUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                                </td>

                                <td>
                                    <button type="button" onClick={() => deleteKompania(kompania.kompaniaId)}
                                    className="btn2" >
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