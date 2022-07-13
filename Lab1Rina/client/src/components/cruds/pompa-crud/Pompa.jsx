import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './PompaUpdate';
import { Link } from 'react-router-dom';


export default function Pompa() {

    const[pompa, setPompa] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7147/api/Pompa/GetPompa')
            .then(response => {
                setPompa(response.data);
            })
    }, [refreshKey])




    //Delete data in database    
    function deletePompa(pompaId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini pompen me id  " + pompaId  +"?  " 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7147/api/Pompa/FshijPompa?pompaId=' + pompaId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a pompa canceled !!");
        }
    }

    return(
            <div>
                <br /><br />
                <div className='link'>
                <Link  to="../pompaAdd">
                    <img src ={pompaAdd} alt="pompa-add" className='icons' />
                    <p> Shto Pompe</p>
                </Link>
                </div>
               
                <div className="table-container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emri</th>
                            <th>Emri i rruges</th>
                            <th>Zip Kodi</th>
                            <th>Opsionet</th>

                        </tr>
                    </thead>
                    <tbody>
                        {pompa.map(pompa=>(
                           <tr key={pompa.pompaId}>
                               <td>{pompa.pompaId}</td>
                               <td>{pompa.emri}</td>
                               <td>{pompa.emriRruges}</td>
                               <td>{pompa.zipCode}</td>
                               
                               <td>
                                   <Link to="/PompaUpdate" state={{pompaId:pompa.pompaId}}>
                                      <button type="button" className='btn1' onClick={handleEdit}>  
                                         Update
                                      </button>
                                   </Link>
                                </td>  
                                <td> 
                                   <button type="button" onClick={() => deletePompa(pompa.pompaId)}
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