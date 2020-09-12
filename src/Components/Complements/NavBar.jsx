import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
      <div >
         <nav>
        <ul>
            <li>
                <Link to='/home'> Home </Link>
            </li>

            <li>
                <Link to='/about'> About me </Link>
            </li>

            <li>
                <Link to='/mundotech'> Mundo tech </Link>
            </li>
            <li>
                <Link to='/interests'> Intereses </Link>
            </li>
        </ul> 
      </nav>  
      </div>
    );
  }
  
  export default NavBar;