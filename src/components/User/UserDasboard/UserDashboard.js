import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Bookings from '../Bookings/Bookings';
import Review from '../Review/Review';
import { useHistory } from 'react-router';

const UserDashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [URL, setURL] = useState('bookings');
    const handleLogout = () => {
        setLoggedInUser({});
    }

    let history = useHistory();
    const handleHomeBtn = () => {
        history.push('/home');
    }
    return (
        <div>

            <div class="sidebar pt-5">
                <h6 className="text-white m-3"><span className="brand-text">PlumbStars</span> User Dashboard</h6>

                <hr />
                <p onClick={() => setURL('bookings')}>Bookings</p>
                <p onClick={() => setURL('review')}>Review</p>
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