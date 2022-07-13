import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './StacioniUpdate';
import { Link } from 'react-router-dom';
import stacioniAdd from '../../../images/crud-img/add-stacion.svg'


export default function Stacioni() {

    const[stacionet, setStacionet] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => { 
        axios.get('https://localhost:7138/api/Stacioni/GetStacionet')
            .then(response => {
                setStacionet(response.data);
            })
    }, [refreshKey])




     //Delete data in database    
     function deleteStacioni(stacioniId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini stacionin me id " + stacioniId  +"?  " 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7138/api/Stacioni/FshijStacion?stacioniId=' + stacioniId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a stacion canceled !!");
        }
    }

   

        return(
            <div>
                <div className='link'>
                <Link  to="../stacioniAdd">
                    <img src ={stacioniAdd} alt="stacioni-add" className='icons' />
                    <p> Shto Stacion</p>
                </Link>
                </div>

                <div className='table-container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Emri i rruges</th>
                            <th>Zip Kodi</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {stacionet.map(stacioni=>(
                           <tr key={stacioni.stacioniId}>
                               <td>{stacioni.stacioniId}</td>
                               <td>{stacioni.emriRruges}</td>
                               <td>{stacioni.zipCode}</td>
                              
                            
                               <td>
                               <Link to="../StacioniUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                                </td>

                                <td>
                                    <button type="button" onClick={() => deleteStacioni(stacioni.stacioniId)}
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