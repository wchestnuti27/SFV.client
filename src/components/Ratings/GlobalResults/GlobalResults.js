import React, { useState, useEffect } from 'react';
import './GlobalResults.css';
import APIURL from '../../../helpers/environment';
import FighterEdit from '../../CRUD/FighterEdit';
import FighterCreate from '../../CRUD/FighterCreate';
import { Button, Label, Input } from 'reactstrap';
import StreetCards from '../StreetCards';

const GlobalResults = (props) => {
    const [fighter, setFighter] = useState([]);
    const [ratings, setRatings] = useState('');
    const [updateActive, setUpdateActive] = useState(false);
    const [fighterToUpdate, setFighterToUpdate] = useState([]);
    const [open, setOpen] = useState(false);

    console.log(fighterToUpdate)


    const fetchFighter = () => {
      fetch(`${APIURL}/ratings/`, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(res => res.json())
    .then((logData) => {
      console.log(logData)
      setFighter(logData)
      setFighterToUpdate([])
    })
    }

    useEffect(() => {
      fetchFighter();
  }, [])

  const editFighterNow = (fighter) => {
    setFighterToUpdate(fighter);
    console.log(fighter);
    setUpdateActive(true);
  }

//     const [open, setOpen] = useState(false);
//     const classes = useStyles();



// const updateFighter = (fighter) => {
//         fetch(`${APIURL}/ratings/${fighter.id}`, {
//             method: 'PUT',
//             body: JSON.stringify({log: {fighter: setFighter, ratings: setRatings}}),
//             headers: new Headers({
//                 'Content-type': 'application/json',
//                 'Authorization': props.token
//             })
//         })
//         .then(handleOpen)
//         .then(() => props.getFighters())
//     }
    
    const deleteFighter = (fighter) => {
        fetch(`${APIURL}/ratings/${fighter.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.getFighters())
    }
    
    const postFighter = (e) => {
        e.preventDefault();
        const fightersObj = {
            fighter: fighter,
            fighterRatings: ratings
        }
        fetch(`${APIURL}/ratings/`, {
            method: 'POST',
            body: JSON.stringify(fightersObj),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(() => props.getFighters())
        .catch(err => console.log(err))
    }

  const handleOpen = () => {
    setOpen(true);
  };

const updateOn = (fighter) => {
  console.log(fighter)
  editFighterNow(fighter)
    // handleOpen();
}

const updateOff = () => {
    setUpdateActive(false);
}
    
    
return(


        <div style = {{textAlign: "center"}}>
            <br />
            <br />
            <br />
            <br />
            <StreetCards/>
            <br />
            <br />
            <br />
            <br />

            <FighterCreate fetchFighter={fetchFighter} setRatings={setRatings} postFighter={postFighter} ratings={ratings} fighter={fighter}/>
            <table>
                <thead>
                    <tr>
                        <th style = {{color: "blue", fontSize: "25px"}}>Fighter</th>
                        <th style = {{color: "blue", fontSize: "25px"}}>Fighter Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.ratings.map((ratingInfo, index) => {
                          // console.log(ratingInfo)
                            return (
                                <tr key={index}>
                                    <td>{ratingInfo.fighter}</td>
                                    <td>{ratingInfo.fighterRatings}</td>
                                    <td>
                                        <button onClick={() => updateOn(ratingInfo)}>Update</button>
                                        <button onClick={() => {deleteFighter(ratingInfo)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {updateActive ? <FighterEdit fighter={fighter} open={open} setOpen={setOpen} fighterToUpdate={fighterToUpdate} setFighterToUpdate={setFighterToUpdate} editFighterNow={editFighterNow} fetchFighter={fetchFighter} token={props.token} /> : <div></div>}
        </div>
    )
}

export default GlobalResults;