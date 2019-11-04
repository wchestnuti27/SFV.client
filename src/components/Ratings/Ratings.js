import React, {useState, useEffect} from 'react';
import './Ratings.css';
import APIURL from '../../helpers/environment';

const Ratings = (props) => {

    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        fetch(`${APIURL}/ratings/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            }
        })
        .then(res => res.json())
        .then(json => setRatings(json))
        .catch(err => console.log(err))
    }, [])

    // const RatingRows = () => {
    //     const RatingColumns = {
    //         fighter: 'Fighter Name',
    //         rating: 'Fighter Rating',
    //     }
    //     return [<Rating key={'column names'} testData={RatingColumns} />].concat(
    //         rating.map((ratingInfo, index) => {
    //             // console.log(RatingInfo, index);
    //             return <Rating key={index} testData={ratingInfo} />
    //         })
    //     )
    // }

    return(
        <table>
            <tbody>
                {/* <Rating testData={testDataPies} /> */}
                {/* {RatingRows()} */}
            </tbody>
        </table>
    )
}

export default Ratings;