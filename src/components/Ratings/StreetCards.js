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
<>
<h1 style = {{color: "blue", fontSize: "40px"}}>The Fighters</h1><br/> <br/>
    
{/* Row 1 */}
<div style={row}>
<div style={column}>

          {/* Abigail */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
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
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

        {/* Akuma */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div 
          style = {{
              backgroundColor: "black", 
              height: "210px", 
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
              height: "210px", 
              width: "210px", 
              color: "white", 
              display: "flex", 
              justifyContent: "center", 
              alignItems: "center"}}>
          <button onClick={handleClick}>Flip</button>
        </div>
        </ReactCardFlip>
        
        {/* Alex */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                  <div 
                    style = {{
                        backgroundColor: "black", 
                        height: "210px", 
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
                        height: "210px", 
                        width: "210px", 
                        color: "white", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center"}}>
                    <button onClick={handleClick}>Flip</button>
                  </div>
                </ReactCardFlip>

          {/* Balrog */}
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
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
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

        {/* Birdie */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
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
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

        {/* Blanka */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
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
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>
             </div>
        </div> <br/>
        <br/>
        <br/>
        <br/>


{/* Row 2 */}
<div style={row}>
<div style={column}>

{/* Cammy */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Cammy" src={Cammy} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Chun-Li */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
<div 
  style = {{
      backgroundColor: "black", 
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <img id="ChunLi" src={ChunLi} alt="SFV" />
  <button onClick={handleClick}>Flip</button>
</div>

<div 
  style = {{
      backgroundColor: "black",
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <button onClick={handleClick}>Flip</button>
</div>
</ReactCardFlip>

{/* Cody */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Cody" src={Cody} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
  
          <div 
            style = {{
                backgroundColor: "black",
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

{/* Dhalsim */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Dhalsim" src={Dhalsim} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Ed */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Ed" src={Ed} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* E. Honda */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="EHonda" src={EHonda} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>
     </div>
</div> <br/>
<br/>
<br/>
<br/>


{/* Row 3 */}
<div style={row}>
<div style={column}>

{/* Falke */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Falke" src={Falke} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* F.A.N.G */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
<div 
  style = {{
      backgroundColor: "black", 
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <img id="FANG" src={FANG} alt="SFV" />
  <button onClick={handleClick}>Flip</button>
</div>

<div 
  style = {{
      backgroundColor: "black",
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <button onClick={handleClick}>Flip</button>
</div>
</ReactCardFlip>

{/* G */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="G" src={G} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
  
          <div 
            style = {{
                backgroundColor: "black",
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

        {/* Gill */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Gill" src={Gill} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Guile */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Guile" src={Guile} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Ibuki */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Ibuki" src={Ibuki} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>
     </div>
</div> <br/>
<br/>
<br/>
<br/>


{/* Row 4 */}
<div style={row}>
<div style={column}>

{/* Juri */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Juri" src={Juri} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Kage */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
<div 
  style = {{
      backgroundColor: "black", 
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <img id="Kage" src={Kage} alt="SFV" />
  <button onClick={handleClick}>Flip</button>
</div>

<div 
  style = {{
      backgroundColor: "black",
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <button onClick={handleClick}>Flip</button>
</div>
</ReactCardFlip>

{/* Karin */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Karin" src={Karin} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
  
          <div 
            style = {{
                backgroundColor: "black",
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

{/* Ken */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Ken" src={Ken} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Kolin */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Kolin" src={Kolin} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Laura */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Laura" src={Laura} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>
     </div>
</div><br/>
<br/>
<br/>
<br/>


{/* Row 5 */}
<div style={row}>
<div style={column}>

  {/* Lucia */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Lucia" src={Lucia} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* M. Bison */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
<div 
  style = {{
      backgroundColor: "black", 
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <img id="MBison" src={MBison} alt="SFV" />
  <button onClick={handleClick}>Flip</button>
</div>

<div 
  style = {{
      backgroundColor: "black",
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <button onClick={handleClick}>Flip</button>
</div>
</ReactCardFlip>

{/* Menat */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Menat" src={Menat} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
  
          <div 
            style = {{
                backgroundColor: "black",
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

{/* Nash */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Nash" src={Nash} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Necalli */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Necalli" src={Necalli} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Poison */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Poison" src={Poison} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>
     </div>
</div><br/>
<br/>
<br/>
<br/>


{/* Row 6 */}
<div style={row}>
<div style={column}>

{/* Rashid */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Rashid" src={Rashid} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* R. Mika */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
<div 
  style = {{
      backgroundColor: "black", 
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <img id="RMika" src={RMika} alt="SFV" />
  <button onClick={handleClick}>Flip</button>
</div>

<div 
  style = {{
      backgroundColor: "black",
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <button onClick={handleClick}>Flip</button>
</div>
</ReactCardFlip>

{/* Ryu */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Ryu" src={Ryu} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
  
          <div 
            style = {{
                backgroundColor: "black",
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

{/* Sagat */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Sagat" src={Sagat} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Sakura */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Sakura" src={Sakura} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Seth */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Seth" src={Seth} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>
     </div>
</div> <br/>
<br/>
<br/>
<br/>


{/* Row 7 */}
<div style={row}>
<div style={column}>

{/* Urien */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Urien" src={Urien} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <button onClick={handleClick}>Flip</button>
  </div>
</ReactCardFlip>

{/* Vega */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
<div 
  style = {{
      backgroundColor: "black", 
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <img id="Vega" src={Vega} alt="SFV" />
  <button onClick={handleClick}>Flip</button>
</div>

<div 
  style = {{
      backgroundColor: "black",
      height: "210px", 
      width: "210px", 
      color: "white", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center"}}>
  <button onClick={handleClick}>Flip</button>
</div>
</ReactCardFlip>

{/* Zangief */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div 
            style = {{
                backgroundColor: "black", 
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <img id="Zangief" src={Zangief} alt="SFV" />
            <button onClick={handleClick}>Flip</button>
          </div>
  
          <div 
            style = {{
                backgroundColor: "black",
                height: "210px", 
                width: "210px", 
                color: "white", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center"}}>
            <button onClick={handleClick}>Flip</button>
          </div>
        </ReactCardFlip>

{/* Zeku */}
<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
  <div 
    style = {{
        backgroundColor: "black", 
        height: "210px", 
        width: "210px", 
        color: "white", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center"}}>
    <img id="Zeku" src={Zeku} alt="SFV" />
    <button onClick={handleClick}>Flip</button>
  </div>

  <div 
    style = {{
        backgroundColor: "black",
        height: "210px", 
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
</>

);
}

export default StreetCards;