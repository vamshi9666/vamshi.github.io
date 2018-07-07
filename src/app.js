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

const projects = ()=>(
    <div>
      <ul>
        Projects list
      </ul>
    </div>
);
class App extends Component{
    render(){
        return(
            <div className="whole">
              <div className="links-con">
                  <Link className="link" to='/'>
                    <button>Profile</button>
                  </Link>
                  <Link className="link" to='/projects'><button>Projects</button></Link>
              </div>
              <Switch>
                <Route  path='/projects' component={projects}/>
                <Route exact path='/' component={profile}/>
              </Switch>
            </div>
          );
    }
}


export default App;
