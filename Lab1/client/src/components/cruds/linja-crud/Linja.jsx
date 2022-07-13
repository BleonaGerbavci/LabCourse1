import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './LinjaUpdate';
import { Link } from 'react-router-dom';
import linjaAdd from '../../../images/crud-img/add-linje.svg'

export default function Linja(){

    const[linja, setLinja] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => {
        axios.get('https://localhost:7138/api/Linja/GetLinjat')
            .then(response => {
                setLinja(response.data);
            })
    }, [refreshKey])




    //Delete data in database    
    function deleteLinja(linjeId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini linjen me id " + linjeId + '?  ' 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7138/api/Linja/FshijLinje?linjaId=' + linjeId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a line canceled !!");
        }
    }

   

        return(
            <div>
                <div className='link'>
                <Link  to="../linjaAdd">
                    <img src ={linjaAdd} alt="linja-add" className='icons' />
                    <p> Shto Linje</p>
                </Link>
                </div>

                <div className="table-container">
                <table className='table'>
                    <thead>
                        <tr> 
                            <th>Id</th>
                            <th>Vendi i nisjes</th>
                            <th>Destinacioni</th>
                            <th>Cmimi</th>
                            <th>Koha e nisjes</th>
                            <th>Koha e mberritjes</th>
                            <th>Kohezgjatja</th>
                            <th>Autobusi Id</th>
                            <th>Kompania Id</th>
                            <th></th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {linja.map(linjaa=>(
                           <tr key={linjaa.linjaId}>
                               <td>{linjaa.linjaId}</td>
                               <td>{linjaa.vendiInisjes}</td>
                               <td>{linjaa.destinacioni}</td>
                               <td>{linjaa.cmimi}€</td>
                               <td>{linjaa.kohaNisjes}</td>
                               <td>{linjaa.kohaMberritjes}</td>
                               <td>{linjaa.kohezgjatja}</td>
                               <td>{linjaa.autobusiId}</td>
                               <td>{linjaa.kompaniaId}</td>

                             
                               <td>
                                 <Link to="../LinjaUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                               </td>
                               <td>
                                   <button type="button" onClick={() => deleteLinja(linjaa.linjaId)}
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