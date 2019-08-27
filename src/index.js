import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
//Router import
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import Docs from "./components/navContent/docs/Docs"
import Block from "./components/block/Block"
import Main from './components/main/Main';
import FooterSection from './components/footerSection/FooterSection';
import NotFound from './components/notFound/NotFound';


const divStyle = {
    flexDirection: 'row'
    
      };

const routing = (
    <Router>
        <div className="bgColor">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src='./logo.svg' alt="react.org" className="imgClass" />
                        <span className="textColor">MicroSoft</span>
                    </a>
                    </div>

                    <ul className="nav navbar-nav" style={divStyle}>
                        <li className="navLink">
                            <NavLink activeClassName="active" to="/">React</NavLink>
                        </li>          
                        <li className="navLink">
                            <NavLink activeClassName="active" to="/docs">Docs</NavLink>
                        </li>
                        <li className="navLink">
                            <NavLink activeClassName="active"  to="/tutorial">Tutorial</NavLink>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            
        </div>
        <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/docs" component={Docs} />
                <Route path="/tutorial" component={FooterSection} />
                <Route component={NotFound}/>
            </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
