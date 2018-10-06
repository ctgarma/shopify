import React, { Component } from "react";

function Combo(props){

    const options = props.size;
    
    const items = options.map(item=><option key={item} value={item}>{item}</option>);
    return (
        <select onChange={props.onChange}>
        {items}
        </select>);

}

export default Combo;