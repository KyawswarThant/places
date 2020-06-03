import React,{ useState} from 'react';
import Search from './Search';
import About from './About';
import Contact from './Contact';
import {BrowserRouter as Router,Switch,Route,Link,} from 'react-router-dom';
import './home.css';
const App=props=>{
  let [ users, setUsers ] = useState([]); 
  return(
            <Router>
              <header className="header">Places</header>
              <section className="section">
                <nav className="nav">
                  <div id="link">
                    <Link to="/About">About</Link>
                    <Link to="/Contact">Contact Us</Link>
                  </div>
                </nav>
                <article className="article">
                  <ul>
                    {
                      users.map(i=>{
                      return(<li>{i.place} {i.content} {i.imgSrc}</li>
                        )
                      })
                    }
                  </ul>
                  {
                  users.map(i=>{
                    return(<img src={i.imgSrc} alt="friends"></img>)
                  })
                  }
                  
                  <Switch>
                    <Route path="/About"><About /></Route>
                    <Route path="/Contact"><Contact /></Route>
                  </Switch>
                </article>
                <aside className="aside">
                <Search setUsers={setUsers}/>
                </aside>
              </section>
              <footer className="footer">footer </footer>
            </Router>
            
  )
}
export default App;
