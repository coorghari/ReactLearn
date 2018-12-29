import React,{Component} from 'react';

/*const withclass = (props) =>(
        <div className={props.classes}>
            {props.children}
        </div>
);*/

/*const withClass = (WrappedComponent,classes) => {
 return (props) => (
     <div className={classes}>
        <WrappedComponent {...props}/>
     </div>
 )
}*/

const withClass = (WrappedComponent,classes) => {
    const WithClass = class extends Component{
        render(){
            return (
                <div className={classes}>
                   <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
                </div>
            ) 
        }
    }

    return React.forwardRef((props,ref) => {
        return <WithClass {...props} forwardedRef={ref} />
    });
}

export default withClass;