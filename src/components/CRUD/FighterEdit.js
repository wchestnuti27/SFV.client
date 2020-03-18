import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../helpers/environment';

const FighterUpdate = (props) => {
    const[editFighter, setEditFighter] = useState();
    const[editFighterRatings, setFighterRatings] = useState();

    const handleSubmit= (e) => {
        e.preventDefault();
        fetch(`${APIURL}/ratings/${fighter.id}`, {
            method: 'POST',
            body: JSON.stringify({log: {fighter: editFighter, fighterRatings: editFighterRatings}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((logData) => {
            console.log(logData);
            setEditFighter('');
            setFighterRatings('');
        })
    }


return(
    <Form onSubmit = {handleSubmit}>
        <FormGroup>
            <Label htmlFor = "editFighter"/>
            <Input name = "fighter" value = {fighter} onChange = {(e) => setEditFighter(e.target.value)}/>                             
        </FormGroup>
        <FormGroup>
            <Label htmlFor = "fighterRating"/>
            <Input type = "select" name = "rating" value = {rating} onChange = {(e) => setFighterRatings(e.target.value)}>
            </Input>
        </FormGroup>
        <Button type = "submit">click to Submit</Button>
    </Form>
  )
}


export default FighterUpdate;