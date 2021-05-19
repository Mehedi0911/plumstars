import React, { useContext, useEffect, useState } from 'react';
import About from '../../Home/About/About';
import './Admin.css'
import NewsLetter from '../../Home/NewsLetter/NewsLetter';
import AddServices from '../AddServices/AddServices';
import AddTechnician from '../AddTechnician/AddTechnician';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Appointments from '../Appoinments/Appointments';
import { UserContext } from '../../../App';
const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admins, setAdmins] =  useState([])
    const[isAdmin, setIsAdmin] = useState({})
    const [URL, setURL] = useState('service');

    useEffect(() => {
        fetch(`https://arcane-reef-18482.herokuapp.com/admins`)
            .then(res => res.json())
            .then(data => {
                setAdmins(data)
            })
    },[])

    return (
        
        <div>
           {
                admins.find(admin => admin.email === loggedInUser.email)?
               <div>
               <div class="sidebar pt-5">
                <h6 className="text-white m-3">PlumbStars Admin</h6>
                
                <hr />
                    <p onClick={() => setURL('service')}>Service</p>
                    <p onClick={() => setURL('tech')}>Technician</p>
                    {
                       admins.find(admin => admin.email === loggedInUser.email && admin.role==='Admin') && <p onClick={() => setURL('admin')}>Admin</p>
                    }
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
               :
               <h5>You are not and Admin</h5>
           }
            
        </div>
    );
};

export default Admin;