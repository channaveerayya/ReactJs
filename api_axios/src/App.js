import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from "./components/Home";
import jsonplaceholder from './components/jsonplaceholder';
import About from './components/About';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Posts from './components/posts'
function App() {
  return (
  <BrowserRouter>
  <Navbar />
      <div>
     <Switch>
     <Route exact path='/'  component={jsonplaceholder} />
     <Route exact path='/posts/:user_id'  component={Posts} />
      <Route exact path='/about/:user_id'  component={About} />
      <Route component={NotFound}/>
     </Switch>
    </div>
  </BrowserRouter>
 
  );
}

export default App;
