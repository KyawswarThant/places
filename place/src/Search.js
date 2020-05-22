import React ,{createRef} from 'react';
import Place from './Place'
import { useHistory } from 'react-router-dom';
const Search=props=>{
    let nameRef=createRef();
    let history=useHistory();
    const add=()=>{
        let name=nameRef.current.value;
        //props.setUsers([{id:1,place:name,content:"hey"}]);
        fetch(`http://localhost:9000/search-route/${name}`)
        .then(res =>res.json())
        .then(res=> props.setUsers(res));
        history.push(<Place />);
       // Redirect("http://localhost:3000/Contact");
    }
    return(
        <div id="search">
            <input type="search" ref={nameRef} />
            <button onClick={add}>search</button>
        </div>
    )
}
export default Search;