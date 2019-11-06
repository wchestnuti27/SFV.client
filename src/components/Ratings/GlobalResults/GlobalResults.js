import React from 'react';
import './GlobalResults.css';


const GlobalResults = (props) => {
    console.log(props);
    return(
        <tr>
            <td>{props.testData.fighter}</td>
            <td>{props.testData.fighterRatings}</td>
        </tr>
    )
}

export default GlobalResults;