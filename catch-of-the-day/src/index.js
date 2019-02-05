import React , {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import StorePicker from './components/StorePicker';
import  './css/style.css';


const Root = () =>
{
    const repo = `${window.location.pathname.split('/'[1])}`
   return(
       <Router baseName={repo}>
       <div>
           <Route exactly pattern="/" component={StorePicker} />
           <Route  pattern="/store/storeId" component={App} />
       </div>
       </Router>
   )
}


render(<App/>, document.querySelector('#main'));


