import React,{Component} from 'react'

import './../style.css';

class Project extends Component {
  constructor(props){
    super(props);
  }
  // componentDidUpdate(){
  // }
  render(){
    return (
      <div className="project">
        <div className="project-head">
          <img src="{this.props.logo}" alt=""/>
          <h3>{this.props.name}</h3>
        </div>
        <div className="disc-con">
          <p>{this.props.discription}</p>
        </div>
      </div>
    );
  }
}

export default Project
