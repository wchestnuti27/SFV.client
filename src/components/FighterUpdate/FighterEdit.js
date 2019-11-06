import React from 'react';
import {Table, Button} from 'reactstrap';
import FighterCreate from '../FighterUpdate/FighterCreate';

const FighterTable = (props)=> {
    const deleteFighter = (fighter) => {
        fetch(`${APIURL}/Ratings/`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchFighters())
}

const FighterMapper = () => {
    return props.fighter.map((fighter, index) => {
        return(
            <tr key={index}>
                <th scope="row">{fighter, id}</th>
                <td>{fighter.fighterName}</td>
                <td>{fighter.fighterRating}</td>
                <td>
                    <Button color="warning">Update</Button>
                    <Button color="danger" onClick={() => {deleteFighter(fighter)}}>Delete</Button>
                </td>
            </tr>
        )
    })
}

return(
    <>
    <h3>Global Rating</h3>
    <hr/>
    <Table striped>
        <thead>
            <tr>
                <th>Fighter Name</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
        {FighterMapper()}
        </tbody>
    </Table>
    </>
    )
}

export default FighterEdit;