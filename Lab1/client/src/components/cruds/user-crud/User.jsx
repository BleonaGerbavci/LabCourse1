import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import handleEdit from './UserUpdate';
import { Link } from 'react-router-dom';
import userAdd from '../../../images/crud-img/add-user.svg'


export default function User() {

    const[users, setUsers] = useState([]);

    const [refreshKey, setRefreshKey] = useState('0');
    
    //get data from database
    useEffect(() => { 
        axios.get('https://localhost:7138/api/User/GetUsers')
            .then(response => {
                setUsers(response.data);
            })
    }, [refreshKey])




     //Delete data in database    
     function deleteUser(userId) {
        const confirmBox = window.confirm(
            "A jeni te sigurte qe deshironi te fshini userin me id " + userId  +"?  " 
        )
        if (confirmBox === true) {
            axios.delete('https://localhost:7138/api/User/FshijUserin?userId=' + userId)
                .then(() => {
                    setRefreshKey(refreshKey => refreshKey + 1)
                })
        }
        else {
            console.log("Process of deleting a user canceled !!");
        }
    }

   

        return(
            <div>
                <div className='link'>
                <Link  to="../userAdd">
                    <img src ={userAdd} alt="user-add" className='icons' />
                    <p> Shto User</p>
                </Link>
                </div>

                <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Emri</th>
                            <th>Mbiemri</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Numri i telefonit</th>
                            <th>Roli</th>
                            <th>Qyteti</th>
                            <th>Orari</th>
                            <th>Ditet e pushimit</th>

                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(useri=>(
                           <tr key={useri.userId}>
                               <td>{useri.userId}</td>
                               <td>{useri.emri}</td>
                               <td>{useri.mbiemri}</td>
                               <td>{useri.emaili}</td>
                               <td>{useri.passwordi}</td>
                               <td>{useri.nrTelefonit}</td>
                               <td>{useri.roliId}</td>
                               <td>{useri.zipCode}</td>
                               <td>{useri.orari}</td>
                               <td>{useri.ditetEpushimit}</td>
                             
                               <td>
                               <Link to="../UserUpdate" >
                                    <button type="button" className='btn1'  onClick={handleEdit} >
                                        Update
                                    </button>
                                </Link>
                                </td>

                                <td>
                                    <button  type="button" onClick={() => deleteUser(useri.userId)}
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