import React from "react";

function Combo(props){

    const options = props.size;
    
    const items = options.map(item=><option key={item} value={item}>{item}</option>);
    return (
        <select onChange={props.onChange}>
            <option key="filtered by size" value="">filtered by size</option>
            {items}
        </select>);
}

export default Combo;