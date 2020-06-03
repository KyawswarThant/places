import React ,{createRef} from 'react';
const Search=props=>{
    let nameRef=createRef();
    //let history=useHistory();
    const add=()=>{
        let name=nameRef.current.value;
        fetch(`http://localhost:9000/search-route/${name}`)
        .then(res =>res.json())
        .then(res=> props.setUsers(res));
        

    }
    return(
        <div id="search">
            <input type="search" ref={nameRef} />
            <button onClick={add}>search</button>
        </div>
    )
}
export default Search;