import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Projects from './Components/Pages/Projects'

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
            <li>
                <Link to='/'> Home </Link>
            </li>

            <li>
                <Link to='/about'> About </Link>
            </li>

            <li>
                <Link to='/projects'> Projects </Link>
            </li>
        </ul> 
      </nav>  
    
        <Switch>
            <Route exact path='/'> <Home/> </Route>
            <Route exact path='/about' > <About/> </Route>
            <Route exact path='/projects'> <Projects/> </Route>
        </Switch>
    </div>
</Router> 
    
  );
}

export default App;
