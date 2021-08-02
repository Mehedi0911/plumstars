import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
const AllAdmins = () => {
    const [adminsData, setAdminData] = useState([])

    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/admins')
        .then(res => res.json())
        .then(data =>{
            setAdminData(data);
        })
    },[adminsData])

    const handleDeleteAdmin = (id) => {
        fetch(`https://arcane-reef-18482.herokuapp.com/deleteAdmin/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        })
    }
    return (
        <div>
            <h5>All Admins</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        adminsData.map(admin =>
                            <tr>
                                <th scope="row">#</th>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.role}</td>
                                <button className="btn btn-warning mr-3 mt-2 p-0 pl-2 pr-2 text-white"><FontAwesomeIcon className="text-white" icon={faEdit} /> Edit</button>
                                <button onClick={() => {handleDeleteAdmin(admin._id)}} className="btn btn-danger mt-2 p-0 pl-2 pr-2"><FontAwesomeIcon className="text-white" icon={faTrash} /> Delete</button>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllAdmins;