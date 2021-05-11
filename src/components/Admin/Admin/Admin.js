import React, { useState } from 'react';
import About from '../../Home/About/About';
import './Admin.css'
import NewsLetter from '../../Home/NewsLetter/NewsLetter';
import AddServices from '../AddServices/AddServices';
import AddTechnician from '../AddTechnician/AddTechnician';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Appointments from '../Appoinments/Appointments';
const Admin = () => {

    const [URL, setURL] = useState('service');

    return (
        <div>
           
            <div class="sidebar">
            <h6 className="text-white m-3">PlumbStars Admin</h6>
            
            <hr />
                <p onClick={() => setURL('service')}>Service</p>
                <p onClick={() => setURL('tech')}>Technician</p>
                <p onClick={() => setURL('admin')}>Admin</p>
                <p onClick={() => setURL('apps')}>Appointments</p>
            </div>

            
            <div class="content">
                {
                    URL=='tech'? <AddTechnician></AddTechnician>
                    : URL=='admin'?  <MakeAdmin></MakeAdmin>
                    : URL=='apps'?  <Appointments></Appointments>
                    :<AddServices></AddServices>
                }
            </div>
        </div>
    );
};

export default Admin;