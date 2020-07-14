import React, {Component} from 'react';
import '../css/home.css';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      visible : false
    }
  }
 
  render(){
    return(
      <>
        {
          
          this.state.visible ? (
            <>{this.props.children}</>
          ):(
            <div className="wrapper">
              <div className="wrapper-title">
                Seven<span>Pray</span>
              </div>
            
              <div onClick={()=>{this.setState({visible : true})}} className="btn">Join the Woo</div>
            </div>
          )

        }
      </>
    )
  }
  
}