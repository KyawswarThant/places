import React from 'react';
const Search=props=>{
    //let nameRef=createRef();
    /*const put=()=>{
        let name=nameRef.current.value;
        props.add(name);

    }*/
    return(
        <div id="search">
            <form action="http://localhost:9000/search-route" method="POST">
            <input type="text"  name="content"></input><br />
            <input type="submit" value="search"></input>
            </form>
            
            
        </div>
    )
}
export default Search;