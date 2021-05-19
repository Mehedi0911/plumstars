import React, { useEffect, useState } from 'react';

const AllAdmins = () => {
    const [adminsData, setAdminData] = useState([])

    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/admins')
        .then(res => res.json())
        .then(data =>{
            setAdminData(data);
        })
    })
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllAdmins;