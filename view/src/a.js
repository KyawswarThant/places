import React,{ useState} from 'react';
//import Place from './Place';
import Search from './Search';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link,} from 'react-router-dom';
import './home.css';
const App=props=>{
  let [ users, setUsers ] = useState([]); 
  /*const add=(name)=>{
      setUsers([...users,{id:1,place:name,content:"hello"}]);
      
  }*/
  return(
    <Router>
      <div id="home">
      <h1>Places</h1>
      <h5>Travel guide in Myanmar</h5>
      <ul>
        {
           users.map(i=>{
            return(<li>{i.id}{i.place} {i.content}</li>)
          })
        }
      </ul>
      <Search setUsers={setUsers} />
      <section id="sec">
      <aside id="aside">
      <Link to="/About">About</Link>
      </aside>
      <nav id="nav">
      <Link to="/Contact">Contact Us</Link>
      </nav>
      </section>
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