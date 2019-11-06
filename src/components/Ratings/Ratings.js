import React, {useState, useEffect} from 'react';
import APIURL from '../../helpers/environment';
import GlobalResults from './GlobalResults/GlobalResults';
import FighterCreate from '../FighterUpdate/FighterCreate';

const Ratings = (props) => {
    console.log(props)

    const [ratings, setRatings] = useState([]);

    const getFighters = () => {
        fetch(`${APIURL}/Ratings/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setRatings(json))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getFighters()
    }, [])

    const GlobalResultsRows = () => {
        const columns = {
            fighter: 'fighter name',
            fighterRatings: 'fighter rating',
        }
        return [<GlobalResults key={'column names'} testData={columns} />].concat(
            ratings.map((ratingInfo, index) => {
                console.log(ratingInfo, index);
                return <GlobalResults key={index} testData={ratingInfo} />
            })
        )
    }

    return(
        <div>
            <FighterCreate token={props.token} getFighters={getFighters}/>
        <table>
            <tbody>
                {GlobalResultsRows()}
            </tbody>
        </table>
        </div>
    )
}

export default Ratings;