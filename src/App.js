import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    Persons : [
      {id:'sdfs',name:"Hariprasad",age:32},
      {id:'fdg',name:"Ashwini",age:25},
      {id:'rthg',name:"Hemalatha",age:37}
    ],
    toggleState:false
  }
  toggleHandler = () => {
    const doesShow = this.state.toggleState;
   this.setState({
     toggleState : !doesShow
   })
  }
  
  personDeleteHandler = (personIndex) => {
   // const person = this.state.Persons.slice();
   const person = [...this.state.Persons];
   console.log(person);
    person.splice(personIndex,1);
    this.setState({Persons:person});
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.Persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.Persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.Persons];
    persons[personIndex] = person;
    this.setState({Persons:persons});
  }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid #eee',
      padding:'8px',
      cursor:'pointer'
    }
     let persons = null;
     if( this.state.toggleState){
       persons = (
        <div>
          {this.state.Persons.map((person,index) => {
            return <Person 
            click={() => this.personDeleteHandler(index)} 
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event,person.id)}/>
          })
          }
        </div>
       );
       style.backgroundColor="red";
     }
     const classes = [];

     if(this.state.Persons.length <=2){
        classes.push("red");
     }
     if(this.state.Persons.length <=1){
       classes.push("bold");
     }
    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(' ')}>This is really working.</p>
        <button style={style} onClick={this.toggleHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
