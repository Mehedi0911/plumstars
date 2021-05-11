import React, { useEffect, useState } from 'react';

const ServiceList = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServiceData(data);
                console.log(data);
            })
    }, [])

    return (
        <div>
            <h5>Service List</h5>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Date Uploaded</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        serviceData.map(service =>
                            <tr>
                                <th scope="row">#</th>
                                <td>{service.title}</td>
                                <td>{service.price}</td>
                                <td>{service.uploadDate}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ServiceList;