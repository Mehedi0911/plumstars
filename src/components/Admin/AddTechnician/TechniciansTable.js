import React, { useEffect, useState } from 'react';

const TechniciansTable = () => {
    const [techData, setTechData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/technicians')
            .then(res => res.json())
            .then(data => {
                setTechData(data);
                console.log(data);
            })
    }, [])
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TechniciansTable;