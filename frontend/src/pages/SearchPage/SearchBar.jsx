import React, { useState } from "react";

const SearchBar = (props) => {
    
   const [sTerm, setSTerm] = useState('')
    
   
   


    function handleSubmit(event){
        event.preventDefault();
    
         console.log(sTerm);
        props.searchSongProp(sTerm);

    }

    const onChange = (event) => {
        const { value } = event.target
        setSTerm (value)
    }

    return ( 
       <form onSubmit={handleSubmit} >
        <div>
            <input type="text" name="search_term" value={sTerm} onChange={onChange} ></input>
            <button type="submit"> Search </button>
        </div>
       </form>

     );
}
 
export default SearchBar;