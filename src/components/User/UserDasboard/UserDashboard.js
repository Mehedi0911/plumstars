import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Bookings from '../Bookings/Bookings';
import Review from '../Review/Review';

const UserDashboard = () => {
    const [URL, setURL] = useState('bookings');
    
    return (
        <div>
           
            <div class="sidebar pt-5">
            <h6 className="text-white m-3"><span className="brand-text">PlumbStars</span> User Dashboard</h6>
            
            <hr />
                <p onClick={() => setURL('bookings')}>Bookings</p>  
                <p onClick={() => setURL('review')}>Review</p>  
            </div>

            
            <div class="content">
                {
                    URL=='review'? <Review></Review>
                    :<Bookings></Bookings>
                }
            </div>
        </div>
    );
};

export default UserDashboard;