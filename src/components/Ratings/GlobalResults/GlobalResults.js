import React from 'react';
import './GlobalResults.css';
import APIURL from '../../../helpers/environment';
import FighterEdit from '../../CRUD/FighterEdit';

const GlobalResults = (props) => {



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

    console.log(props);
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Fighter</th>
                        <th>Fighter Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.ratings.map((ratingInfo, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ratingInfo.fighter}</td>
                                    <td>{ratingInfo.fighterRatings}</td>
                                    <td>
                                        <button>Update</button>
                                        <button onClick={() => {deleteFighter(ratingInfo)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* {updateActive ? <FighterEdit /> : <div></div>} */}
        </div>
    )
}

export default GlobalResults;