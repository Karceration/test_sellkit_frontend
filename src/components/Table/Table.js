import React, { useState } from 'react';

 import Users from '../Table/users.json';
const Table = () => {

    const [users,setUsers] = useState(Users);
    const [count,setcount] = useState(users.length);

    const deleteUser = (el) => {
        
        const newUsers = users.filter(e => e.id !== el.id);
        setUsers(newUsers);
        setcount(count-1);
    }
    return (
        <div className='container'>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Adress</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th>
                <th scope="col">Company</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
            {users.map(e => {
                            return(
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.address.city}</td>
                                    <td>{e.phone}</td>
                                    <td>{e.website}</td>
                                    <td>{e.company.name}</td>
                                    <td><button onClick={()=>deleteUser(e)} className="btn btn-danger">Delete</button></td>
                            </tr>
                            )
                        })}
            </tbody>
        </table>

        </div>
        
        
        
    );
}
 
export default Table;

