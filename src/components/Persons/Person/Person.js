import React,{Component} from 'react';
import styles from './Person.module.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import propTypes from 'prop-types';
import {AuthContext} from '../../../containers/App';
class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] Inside the Constructor');
      this.inputElement = React.createRef();
      }
    
      componentWillMount(){
        console.log('[Person.js] Inside the componentWillMount');
      }
    
      componentDidMount(){
        console.log('[Person.js] Inside the componentDidMount'); 
        if(this.props.position === 0){
          this.inputElement.current.focus();
        }
        
      }

      focus(){
        this.inputElement.current.focus();
      }
  render(){
    console.log('[Person.js] Inside the Render');
    return (
        <Aux>
        <AuthContext.Consumer>
        {auth =>auth ? <p>Iam Authenticated</p>:null}
        </AuthContext.Consumer>
       <p onClick={this.props.click}>My Name is {this.props.name} And {this.props.age} Years old</p>
       <p>{this.props.children}</p>
       <input 
       type="text"
       onChange={this.props.changed} 
       ref={this.inputElement}
       value={this.props.name}/>
       </Aux>
    )
   /* return [
      <p key="1" onClick={this.props.click}>My Name is {this.props.name} And {this.props.age} Years old</p>,
      <p key="2">{this.props.children}</p>,
      <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
    ]*/
  }
}

Person.propTypes = {
  click:propTypes.func,
  name:propTypes.string,
  age:propTypes.number,
  changed:propTypes.func
}

export default WithClass(Person,styles.Person);