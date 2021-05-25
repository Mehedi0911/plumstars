import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
const TechniciansTable = () => {
    const [techData, setTechData] = useState([])

    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/technicians')
            .then(res => res.json())
            .then(data => {
                setTechData(data);
                console.log(data);
            })
    }, [techData])

    const handleDeleteTech = (id) => {
        fetch(`http://localhost:5000/deleteTech/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        })
    }
    return (
        <div>
            <h5>All Technicians</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Details</th>
                        <th scope="col">Date Appointed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        techData.map(tech =>
                            <tr>
                                <th scope="row">#</th>
                                <td>{tech.name}</td>
                                <td>{tech.details}</td>
                                <td>{tech.dataAppointed}</td>
                                <button className="btn btn-warning mr-3 mt-2 p-0 pl-2 pr-2 text-white"><FontAwesomeIcon className="text-white" icon={faEdit} /> Edit</button>
                                <button onClick={() => handleDeleteTech(tech._id)} className="btn btn-danger mt-2 p-0 pl-2 pr-2"><FontAwesomeIcon className="text-white" icon={faTrash} /> Delete</button>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TechniciansTable;