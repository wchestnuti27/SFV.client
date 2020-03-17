import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip'
import './StreetCards.css'
import SFV1 from '../../../src/Assets/SFV1.png';
import Abigail from '../../../src/Assets/Abigail.png';
import Akuma from '../../../src/Assets/Akuma.png';
import Alex from '../../../src/Assets/Alex.png';
import Balrog from '../../../src/Assets/Balrog.png';
import Birdie from '../../../src/Assets/Birdie.png';
import Blanka from '../../../src/Assets/Blanka.png';
import Cammy from '../../../src/Assets/Cammy.png';
import ChunLi from '../../../src/Assets/ChunLi.png';
import Cody from '../../../src/Assets/Cody.png';
import Dhalsim from '../../../src/Assets/Dhalsim.png';
import EHonda from '../../../src/Assets/EHonda.png';
import Ed from '../../../src/Assets/Ed.png';
import FANG from '../../../src/Assets/FANG.png';
import Falke from '../../../src/Assets/Falke.png';
import G from '../../../src/Assets/G.png';
import Gill from '../../../src/Assets/Gill.png';
import Guile from '../../../src/Assets/Guile.png';
import Ibuki from '../../../src/Assets/Ibuki.png';
import Juri from '../../../src/Assets/Juri.png';
import Kage from '../../../src/Assets/Kage.png';
import Karin from '../../../src/Assets/Karin.png';
import Ken from '../../../src/Assets/Ken.png';
import Kolin from '../../../src/Assets/Kolin.png';
import Laura from '../../../src/Assets/Laura.png';
import Lucia from '../../../src/Assets/Lucia.png';
import MBison from '../../../src/Assets/MBison.png';
import Menat from '../../../src/Assets/Menat.png';
import Nash from '../../../src/Assets/Nash.png';
import Necalli from '../../../src/Assets/Necalli.png';
import Poison from '../../../src/Assets/Poison.png';
import RMika from '../../../src/Assets/RMika.png';
import Rashid from '../../../src/Assets/Rashid.png';
import Ryu from '../../../src/Assets/Ryu.png';
import Sagat from '../../../src/Assets/Sagat.png';
import Sakura from '../../../src/Assets/Sakura.png';
import Seth from '../../../src/Assets/Seth.png';
import Urien from '../../../src/Assets/Urien.png';
import Vega from '../../../src/Assets/Vega.png';
import Zangief from '../../../src/Assets/Zangief.png';
import Zeku from '../../../src/Assets/Zeku.png';




const StreetCards = () => {

  const row = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  };

  const column = {
    display: 'flex',
    justifyContent: 'space-around',
    flex: 1
  }
  
  const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }

    return (
     
      <div style={row}>
        <div style={column}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Abigail" src={Abigail} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
   
          <div 
            style = {{
                backgroundColor: "black",
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div 
          style = {{
              backgroundColor: "black", 
              height: "200px", 
              width: "210px", 
              color: "white", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center"}}>
          <img id="Akuma" src={Akuma} alt="SFV" />
          <button onClick={handleClick}>Flip</button>
        </div>

        <div 
          style = {{
              backgroundColor: "black",
              height: "200px", 
              width: "210px", 
              color: "white", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center"}}>
          <button onClick={handleClick}>Flip</button>
        </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                  <div 
                    style = {{
                        backgroundColor: "black", 
                        height: "200px", 
                        width: "210px", 
                        color: "white", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center"}}>
                    <img id="Alex" src={Alex} alt="SFV" />
                    <button onClick={handleClick}>Flip</button>
                  </div>
          
                  <div 
                    style = {{
                        backgroundColor: "black",
                        height: "200px", 
                        width: "210px", 
                        color: "white", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center"}}>
                    <button onClick={handleClick}>Flip</button>
                  </div>
                </ReactCardFlip>

                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Balrog" src={Balrog} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
   
          <div 
            style = {{
                backgroundColor: "black",
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Birdie" src={Birdie} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
   
          <div 
            style = {{
                backgroundColor: "black",
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Blanka" src={Blanka} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
   
          <div 
            style = {{
                backgroundColor: "black",
                height: "200px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>
             </div>
        </div>

);
}

export default StreetCards;