import React ,{createRef} from 'react';
const Search=props=>{
    let nameRef=createRef();
    const add=()=>{
        let name=nameRef.current.value;
        //props.setUsers([{id:1,place:name,content:"hey"}]);
        fetch("http://localhost:9000/search-route",{method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(name);
        }).then(res =>res.json())
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