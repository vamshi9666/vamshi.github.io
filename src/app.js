import React , {Component }from 'react';
import './style.css'

class App extends Component{
    render(){
        return(
            <div className="whole">
              <div className="head1">
                <img className="pro-pic" src="https://avatars1.githubusercontent.com/u/28837336?s=460&v=4"></img>
                <h2 className="" >Vamshi Krishna Nimmakuri</h2>
              </div>
              <p className="tag-line">  I used to say JavaSCript everywhere.</p>
               <p className="tag-line">And now i am saying Rust everywhere </p>

            </div>
        );
    }
}


export default App;
