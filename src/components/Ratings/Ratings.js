import React, {useState, useEffect} from 'react';
import APIURL from '../../helpers/environment';
import GlobalResults from './GlobalResults/GlobalResults';
import FighterCreate from '../CRUD/FighterCreate';
import './Ratings.css'

const Ratings = (props) => {
    console.log(props)

    const [ratings, setRatings] = useState([]);

    const getFighters = () => {
        fetch(`${APIURL}/ratings/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(res => res.json())
        .then(json => setRatings(json))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getFighters()
    }, [])

    return(
        <div>
            
            <br />
            <GlobalResults getFighters={getFighters} ratings={ratings} token={props.token}/>
        </div>
    )
}

export default Ratings;