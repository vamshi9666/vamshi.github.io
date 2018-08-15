import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <App className="ent"/>
  </BrowserRouter>
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
