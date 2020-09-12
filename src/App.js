import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Welcome from './Components/Pages/Welcome'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import MundoTech from './Components/Pages/MundoTech';
import Interests from './Components/Pages/Interests'

function App() {
  return (
    <Router>
    <div>
        <Switch>
            <Route exact path ='/'> <Welcome/> </Route>
            <Route path='/home' > <Home/> </Route>
            <Route path='/about' > <About/> </Route>
            <Route path='/mundotech'> <MundoTech/> </Route>
            <Route path='/interests'> <Interests/> </Route>
        </Switch>
    </div>
</Router> 
    
  );
}

export default App;
