import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import PanelHeader from '../PanelHeader/PanelHeader';
import AddServices from './AddServices';
import EditService from './EditService';

const ServiceList = () => {
    const [serviceToEdit, setServiceToEdit] = useState({})
  
    const [serviceData, setServiceData] = useState([]);
    const [canEdit, setCanEdit] = useState(false)
    useEffect(() => {
        fetch('https://arcane-reef-18482.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                console.log(data);
            })
    }, [serviceData])

  

    const handleEditBtnClick = (id) => {
            fetch(`https://arcane-reef-18482.herokuapp.com/editService/${id}`)
                .then(res => res.json())
                .then(data => {
                    setServiceToEdit(data[0]);
                    console.log(data);
                })
        setCanEdit(true)
    }

    const handleDeleteBtnClick = (id) => {
        fetch(`https://arcane-reef-18482.herokuapp.com/delete/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully');
        })
    }

    return (
        <section className="container pt-5">
            <PanelHeader header={"Add Service"}></PanelHeader>
            {
                !canEdit &&
                <div className="row">
                    <div className="col-md-8">
                        <div>
                            <h5>Service List</h5>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        serviceData.map(service =>
                                            <tr >
                                                <th scope="row">#</th>
                                                <td>{service.title}</td>
                                                <td>{service.price}</td>
                                                <td>{service.uploadDate}</td>
                                                <button onClick={() => handleEditBtnClick(service._id)} className="btn btn-warning mr-3 mt-2 p-0 pl-2 pr-2 text-white"><FontAwesomeIcon className="text-white" icon={faEdit} /> Edit</button>
                                                <button onClick={() => handleDeleteBtnClick(service._id)} className="btn btn-danger mt-2 p-0 pl-2 pr-2"><FontAwesomeIcon className="text-white" icon={faTrash} /> Delete</button>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <AddServices></AddServices>
                    </div>
                </div>
            }

            {
                canEdit &&
                <EditService serviceToEdit={serviceToEdit} setCanEdit={setCanEdit}></EditService>
            }
        </section>

    );
};

export default ServiceList;