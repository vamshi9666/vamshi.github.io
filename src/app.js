import React , {Component }from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './style.css'

const profile = ()=>(
  <div className="whole">
      <div className="head1">
      <img className="pro-pic" src="https://avatars1.githubusercontent.com/u/28837336?s=460&v=4"></img>
      <h2 className="" >Vamshi Krishna Nimmakuri</h2>
    </div>
  <div className="head2">
    <p className="tag-line">  I used to say JavaSCript everywhere.</p>
     <p className="tag-line">And now i am saying Rust everywhere </p>
  </div>

  </div>
);

const contact = ()=>(
  <div className="whole">

  </div>
)
const projects = ()=>(
    <div className="whole">
      <ul>
        <h5> This part of website will be updated soon with meaning-full content</h5>

      </ul>
    </div>
);
class App extends Component{
    render(){
        return(
            <div className="whole">
              <Switch>
                <Route  path='/projects' component={projects}/>
                <Route exact path='/' component={profile}/>
                <Route path='/contact' component={contact}></Route>
              </Switch>
              <div className="links-con">
                  <Link  to='/'>
                    <button className="cus-btn">Profile</button>
                  </Link>
                  <Link  to='/projects'>
                    <button className="cus-btn">Projects</button>
                  </Link>
                  <Link className="btn" to='/contact'>
                    <button className="btn cus-btn">Hire me</button>
                  </Link>
              </div>
            </div>
          );
    }
}


export default App;
