import React , {Component }from 'react';
import http from 'http'
import { Route, Switch, Link } from 'react-router-dom'
import './style.css'

//components
import Project from './components/project'
const profile = ()=>(
  <div className="whole">
  <div className="head1">
    <div className="img-con">
      <img className="pro-pic" src="https://avatars1.githubusercontent.com/u/28837336?s=460&v=4"></img>
    </div>
    <div className="img-con">
      <h2 className="">Vamshi Krishna Nimmakuri</h2>
    </div>
  </div>
  <div className="head2">
    <div className="bio-con">
      <p className="tag-line"> I used to say JavaSCript everywhere.</p>
      <p className="tag-line">And now i am saying Rust everywhere </p>
    </div>
      </div>
</div>
);

const contact = ()=>(
  <div className="whole">
    <h5> This part of website will be updated soon with meaning-full content</h5>

  </div>
)
class projects extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
    this.componentWillMount = this.componentWillMount.bind(this)
  }
  componentWillMount(){ fetch('https://api.github.com/users/vamshi9666/repos')
      .then(response =>response.json())
      .then(jsonResponse=>{
         console.log(jsonResponse)
       this.setState({data:jsonResponse})
        }
      )
      .catch(err=>{ console.log(err); }) }
  render(){
    return (
      <ol className="projects-con">
        {
          this.state.data.map(project=>{
            return (
              <li className="each-pro">
                <Project name={project.name}></Project>
              </li>
            );
          })
        }
      </ol>
    );
  }
}

class App extends Component{
    constructor(props){
      super(props);
      this.state = {
        loading : false
      }
    }

    // componentWillMount(){
    //
    // }
    render(){
        return(
            <div className="">
              <nav className="navbar nav-container navbar-inverse">
                <div className="links-con">
                  <Link  to='/'>
                    <button className="cus-btn">Profile</button>
                  </Link>
                  <Link  to='/projects'>
                    <button className="cus-btn">Projects</button>
                  </Link>{this.props.logo}
                  <Link className="cus-btn" to='/contact'>
                    <button className=" cus-btn">Hire me</button>
                  </Link>
              </div>
            </nav>
              <Switch className="app-con">
                <Route  path='/projects' component={projects}/>
                <Route exact path='/' component={profile}/>
                <Route path='/contact' component={contact}></Route>
              </Switch>

            </div>
          );
    }
}


export default App;
