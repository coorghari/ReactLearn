import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
       <p onClick={props.click}>My Name is {props.name} And {props.age} Years old</p>
       <p>{props.children}</p>
       <input type="text" onChange={props.changed} value={props.name}/>
       </div>
    )
}

export default person;