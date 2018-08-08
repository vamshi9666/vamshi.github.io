import React , {Component }from 'react';
import http from 'http'
import { Route, Switch, Link } from 'react-router-dom'
import {Spinner} from '@blueprintjs/core'
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
      data:[],
      loading:true
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount(){ fetch('https://api.github.com/users/vamshi9666/repos')
      .then(response =>response.json())
      .then(jsonResponse=>{
         console.log(jsonResponse)
         this.setState({data:jsonResponse})
         this.setState({loading:!this.state.loading})
        }
      )
      .catch(err=>{ console.log(err) })
    }
  render(){
    if(this.state.loading){
      return (
        <img src="../assets/loading.gif" alt="loading"/>
      )
    }
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
            <div className="whole-con">
              <nav className="navbar nav-container navbar-inverse">
                <div className="links-con">
                  <Link className="link"  to='/'>
                    <button className=" btn  cus-btn ">Profile</button>
                  </Link>
                  <Link className="link" to='/projects'>
                    <button className="btn  cus-btn">Projects</button>
                  </Link>{this.props.logo}
                  <Link className="link" to='/contact'>
                    <button className="btn  cus-btn">Hire me</button>
                  </Link>
                  <Link className="link" to="/blogs">
                      <button className="btn cus-btn">Blogs</button>
                  </Link>
              </div>
            </nav>
              <Switch className="app-con">
                <Route  path='/projects' component={projects}/>
                <Route exact path='/' component={profile}/>
                <Route path='/contact' component={contact}></Route>
                <Route path='/blogs' component={contact}></Route>
              </Switch>
              <footer className="footer">
                <div >
                  Designed and Developed by Vamshi
                </div>
              </footer>
            </div>
          );
    }
}


export default App;
