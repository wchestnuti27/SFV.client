import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Ratings from './components/Ratings/Ratings';


function App() {

  const [sessionToken, setSessionToken] = useState(undefined);

  const viewConductor = () => {
    return sessionToken !== undefined ? <Ratings token={sessionToken} /> : <Auth setSession={setSessionToken} />
  }

  return (
    <div className="App">
      <Navbar setSession={setSessionToken} />
      {viewConductor()}
    </div>
  );
}

export default App