import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
const ConfirmationBox = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleBtnClick = (link) => {    
            history.push(`/${link}`)
    }
    const handleLogOutBtnClick = () => {    
        setLoggedInUser({});
        history.push('/home')
}
    return (
        <section style={{ height: '100vh' }} className="d-flex justify-content-center align-items-center p-5">
        <div className="bg-dark p-5 text-center shadow-sm">
            <h3 className="text-success">Congrats!</h3>
            <p className="text-white">Your Booking Has Been Placed For review and You'll Get a confirmation Message Soon!</p>
            <p className="text-white">Thank You for Choosing Us !!</p>
            <button onClick={() => handleBtnClick("user")} className="brand-btn-primary">Go To Dashboard</button>
            <button onClick={handleLogOutBtnClick} className="btn btn-warning">LogOut</button>
        </div>
        </section>
    );
};

export default ConfirmationBox;