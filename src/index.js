import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
      
  <HashRouter>
    <App className="ent"/>
  </HashRouter>
  ,document.getElementById('app'))
console.log("service Worker ");
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker
      .register('./sw.js')
      .then(response=>{
        console.log("Service Worker : registered");
      })
      .catch(err=>{
        console.log(`Service Worker err: ${err}`);
      })
  })

}
