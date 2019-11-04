import React, {useState} from 'react';
import './Auth.css';
import '../../helpers/environment'
import APIURL from '../../helpers/environment';

const Auth = (props) => {
    // console.log('props:', props);

    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    const [login, setLogin] = useState(true);

    const title = () => {
        return login ? 'Login' : 'Signup';
    }

    const logginToggle = (event) => {
        event.preventDefault();

        setLogin(!login);

        setUsername('');
        setPassword('');
    }

    // const signupFields = () => !login ?
    //     (
    //         <div>
    //             <label htmlFor='firstName'>First Name:</label>
    //             <br/>
    //             <input type='text' id="firstName" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
    //             <br/>
    //             <label htmlFor='lastName'>Last Name:</label>
    //             <br/>
    //             <input type='text' id='lastName' value={lastName} onChange={ (e) => setLastName(e.target.value) } />
    //         </div>
    //     ) : null;

        const handleSumbit = (e) => {
            e.preventDefault();

            const url = login ? `${APIURL}/auth/signin` : `${APIURL}/auth/signup`;

            const bodyObj = {
                username: username,
                password: password
            } 

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(bodyObj),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(json => props.setSession(json.sessionToken));
        }

    return (
        <div>
            <form onSubmit={handleSumbit}>
                <h1>{title()}</h1>
                <label htmlFor='username'>username:</label>
                <br/>
                <input type='text' id='username' value={username} onChange={ (e) => setUsername(e.target.value) } />
                <br/>
                <label htmlFor='password'>Password:</label>
                <br/>
                <input type='password' id='password' value={password} onChange={ (e) => setPassword(e.target.value) } />
                <br/>
                <button onClick={logginToggle}>Login/Signup Toggle</button>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Auth;