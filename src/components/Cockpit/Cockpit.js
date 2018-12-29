import React from 'react';
import cockpitCss from './Cockpit.module.css';
import Aux from '../../hoc/Aux';
const cockpit = (props) => {

    const classes = [];
    let btnClass = cockpitCss.Button;
    
    if(props.toggleState){
      btnClass = [cockpitCss.Button,cockpitCss.red].join(' ');
    }
  
     if(props.persons.length <=2){
       classes.push(cockpitCss.red);
    }
    if(props.persons.length <=1){
      classes.push(cockpitCss.bold);
    }
 
    return (
    <Aux>
    <h1>{props.appTitle}</h1>
    <p className={classes.join(' ')}>This is really working.</p>
    <button className={btnClass} onClick={props.clicked}>Switch Name</button>
    <button onClick={props.login}>Login</button>
    </Aux>
    );
}

export default cockpit;