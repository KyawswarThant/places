import React,{ useState, useEffect } from 'react';
import Search from './Search';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link,} from 'react-router-dom';
import './home.css';
const App=props=>{
  let [ users, setUsers ] = useState({content:""});
    useEffect(() => {
        fetch('http://localhost:9000/search-route')
        .then(res =>res.text())
        .then(res=> setUsers({content:res}))
        }, []);
  return(
    <Router>
      <div id="home">
      <h1>Places</h1>
      <h5>Travel guide in Myanmar</h5>
      <ul>
         <li>{users.content}</li>
      </ul>
      <Search />
      <ul className="nav">
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
      </ul>
      <div>
        <Switch>
          <Route path="/About"><About /></Route>
          <Route path="/Contact"><Contact /></Route>
        </Switch>
      </div>
    </div>
    </Router>

  )
}

export default App;
