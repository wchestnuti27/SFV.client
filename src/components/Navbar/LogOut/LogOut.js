import React from 'react';
import './LogOut.css';

import logoutPic from '../../../Assets/Log.png';

const Logout = (props) => {
    return (
        <div>
            <img onClick={() => props.setSession(undefined)} id="logout" className="logout" src={logoutPic} alt="power button" />
        </div>
    )
}

export default Logout;