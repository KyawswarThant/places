import React from 'react';
const search=props=>{
    return(
        <div id="search">
            <form action="http://localhost:9000/search-route" method="POST">
            <input type="text"  name="content"></input><br />
            <input type="submit" value="search"></input>
            </form>
        </div>
    )
}
export default search;