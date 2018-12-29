import React,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props){
    super(props);
    console.log('[Persons.js] Inside the Constructor');
    this.lastPersonRef = React.createRef();
  }

  componentWillMount(){
    console.log('[Persons.js] Inside the componentWillMount');
    
  }

  componentDidMount(){
    console.log('[Persons.js] Inside the componentDidMount'); 
    this.lastPersonRef.current.focus();
  }
  componentWillReceiveProps(nextProps){
    console.log('[Persons.js] Inside the componentWillReceiveProps');
  }
  /*shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] Inside the shouldComponentUpdate',nextState,nextProps);
    return nextProps.Persons !== this.props.Persons;
    }*/
  componentWillUpdate(nextProps,nextState){
    console.log('[Persons.js] Inside the componentWillUpdate',nextState,nextProps);
  }
  componentDidUpdate(){
    console.log('[Persons.js] Inside the componentDidUpdate');
  }
  render(){
    console.log('[Persons.js] Inside the Render');
    return this.props.persons.map((person,index) => {
      return <Person 
      click={() => this.props.clicked(index)} 
      name={person.name} 
      age={person.age} 
      position={index}
      key={person.id}
      ref= {this.lastPersonRef}
      changed={(event) => this.props.changed(event,person.id)}/>
    })
  }
}


export default Persons;