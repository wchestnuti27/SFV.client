import React from 'react';
import './Navbar.css';

import sfvPic from '../../Assets/Street_Fighter_V_box_artwork.png';
import Logout from './LogOut/LogOut';

const Navbar = (props) => {
    console.log(props);
    return(
        <div>
            <nav>
                <img id="sfvPic" src={sfvPic} alt="SFV" />
                <Logout setSession={props.setSession} />
            </nav>
        </div>
    )
}

export default Navbar;