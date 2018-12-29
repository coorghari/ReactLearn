import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import styleApp from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';

export const AuthContext = React.createContext(false);
class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside the Constructor');

  }

  componentWillMount(){
    console.log('[App.js] Inside the componentWillMount');
  }

  componentDidMount(){
    console.log('[App.js] Inside the componentDidMount'); 
  }
  componentWillReceiveProps(nextProps){
    console.log('[AppApp.js] Inside the componentWillReceiveProps');
  }
 /* shouldComponentUpdate(nextProps,nextState){
    console.log('[AppApp.js] Inside the shouldComponentUpdate',nextState,nextProps);
    return true;
  }*/
  componentWillUpdate(nextProps,nextState){
    console.log('[AppApp.js] Inside the componentWillUpdate',nextState,nextProps);
    return nextState.Persons !==  this.state.Persons ||
           nextState.toggleState !== this.state.toggleState

  }
  componentDidUpdate(){
    console.log('[AppApp.js] Inside the componentDidUpdate');
  }
  state = {
    Persons : [
      {id:'sdfs',name:"Hariprasad",age:32},
      {id:'fdg',name:"Ashwini",age:25},
      {id:'rthg',name:"Hemalatha",age:37}
    ],
    toggleState:false,
    toggleClicked:0,
    isAuthenticated:false
  }
  toggleHandler = () => {
    const doesShow = this.state.toggleState;
   this.setState((prevState,props) => {
     return {
     toggleState : !doesShow,
     toggleClicked : prevState.toggleClicked + 1
   }
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

  loginHandler = () => {
    const loginState = this.state.isAuthenticated;
    this.setState({isAuthenticated:!loginState});
  }
  render() {

    console.log('Inside App.js Render Method');
   let persons = null;
   
     if( this.state.toggleState){
       persons = (
        <div>
          <Persons persons={this.state.Persons} changed={this.nameChangeHandler} clicked={this.personDeleteHandler}/>
        </div>
       );
      
     }
    
    return (
      <Aux>
        <button onClick={() => this.setState({toggleState:true})}>Always Show</button>
        <Cockpit appTitle={this.props.title} toggleState={this.state.toggleState} persons={this.state.Persons} clicked={this.toggleHandler} login={this.loginHandler}/>
        <AuthContext.Provider value={this.state.isAuthenticated}>
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default WithClass(App,styleApp.App);
