import React from 'react';
import './Navbar.css';

import sfvPic from '../../Assets/SFV pic.jpg';
import Logout from './LogOut/LogOut';

const Navbar = (props) => {
    console.log(props);
    return(
        <div>
            <nav>
                <img id="sfvPic" src={sfvPic} alt="SFV" />
                <Logout setSession={props.setSession} />
            </nav>
            <br />
            <br />
        </div>
    )
}



export default Navbar;