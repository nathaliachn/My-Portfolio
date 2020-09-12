import React from 'react';
import { Link } from 'react-router-dom'

function Welcome() {
    return (
      <div className = "welcomeContainer">
          
          <h3 className="feWelcomeText"> Soy Front - end developer </h3> 
          <img className ="welcomeDoor" alt = " welcomeDoor" src ='http://imgfz.com/i/a84JVbY.png'></img>

          <h1 className="portfolioWelcomeText"> Bienvenidxs a mi portafolio </h1>

          <p className="invitationText"> Entra, vamos a dar un paseo por mi mundo! </p>

          <Link to='/home'>
           <button className="startButton">Tap here.</button>
          </Link>
      </div>
    );
  }
  
  export default Welcome;