import React from 'react'
import NavBar from '../Complements/NavBar'
import Redirections from '../Complements/redirections'
import Footer from '../Complements/Footer'

function Home() {
    return (
      <div >
        <NavBar/>
        <div className="leftSection">
          <h1>Nathalia Chávez Nieme</h1>
          <h2>Front - end developer</h2>
          <Redirections/>
        </div>
         <h1>my foto</h1>
        <div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Home;