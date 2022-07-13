import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './QytetiUpdate';
import { Link } from 'react-router-dom';
import qytetiAdd from '../../../images/crud-img/add-qytet.svg'



export default function Qyteti() {

    const[qytetet, setQytetet] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => { 
        axios.get('https://localhost:7138/api/Qyteti/GetQytetet')
            .then(response => {
                setQytetet(response.data);
            })
    }, [refreshKey])




     //Delete data in database    
     function deleteQyteti(qytetiId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini qytetin me zipkod " + qytetiId  +"?  " 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7138/api/Qyteti/FshijQytetin?zipcode=' + qytetiId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a qytet canceled !!");
        }
    }

   

        return(
            <div>
                <div className='link'>
                <Link  to="../qytetiAdd">
                    <img src ={qytetiAdd} alt="qyteti-add" className='icons' />
                    <p> Shto Qytet</p>
                </Link>
                </div>

                <div className='table-container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Zip Kodi</th>
                            <th>Emri i qytetit</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {qytetet.map(qyteti=>(
                           <tr key={qyteti.qytetiZipCode}>
                               <td>{qyteti.qytetiZipCode}</td>
                               <td>{qyteti.emriQytetit}</td>
                             
                              
                               <td>
                               <Link to="../QytetiUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                                </td>

                                <td>
                                    <button type="button" onClick={() => deleteQyteti(qyteti.qytetiZipCode)}
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