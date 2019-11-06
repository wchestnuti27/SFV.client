import React, {useState} from 'react';
// import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../helpers/environment';

const FighterUpdate = (props) => {

    const[editFighter, setEditFighter] = useState();
    const[editFighterRatings, setFighterRatings] = useState();

    const updateFighter = (event, fighter) => {
        event.preventDefault();
        fetch(`${APIURL}/ratings/${fighter.id}`, {
            method: 'PUT',
            body: JSON.stringify({fighter: editFighter, fighterRatings: editFighterRatings}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
            .then(res => console.log(res))
        })
    }

return(
    <div>
    
    </div>
    )
}

export default FighterUpdate;