import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const PanelHeader = ({header}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{ color: 'white' }} className="bg-dark shadow p-2 mb-5 d-flex justify-content-between">
            <h5 className="mt-2 ml-3">{header}</h5>
            <div className="d-flex justify-content-center align-items-center">
                <h6 className="mr-3 mt-2">{loggedInUser.displayName}</h6>
                <img className="mr-3" style={{ height: '30px', borderRadius: '50%' }} src={loggedInUser.photoURL} alt="" />
            </div>
        </div>
    );
};

export default PanelHeader;