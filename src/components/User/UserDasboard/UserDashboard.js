import React, { useContext, useState } from 'react';
import logo from '../../../Images/logo.svg'
import { UserContext } from '../../../App';
import Bookings from '../Bookings/Bookings';
import Review from '../Review/Review';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
const UserDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [URL, setURL] = useState('bookings');
    const handleLogout = () => {
        setLoggedInUser({});
        history.push('/home');
    }

    let history = useHistory();
    const handleHomeBtn = () => {
        history.push('/home');
    }
    return (
        <div style={{fontFamily:'sans-serif'}}>

            <div class="sidebar pt-5">
                <img style={{height:'35px'}} src={logo} alt="" />
                <h6 className="text-white ml-3 mt-2">User Dashboard</h6>

                <hr />
                <p onClick={() => setURL('bookings')}><FontAwesomeIcon className="brand-text mr-2" icon={faCalendarCheck} /> Bookings</p>
                <p onClick={() => setURL('review')}><FontAwesomeIcon className="brand-text mr-2" icon={faStar} /> Review</p>
                <div className="pt-5 mt-5 ml-2">
                    <button onClick={handleHomeBtn} className="brand-btn-primary mr-2">Home</button>
                    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </div>
            </div>


            <div class="content">
                {
                    URL == 'review' ? <Review></Review>
                        : <Bookings></Bookings>
                }

            </div>
        </div>
    );
};

export default UserDashboard;