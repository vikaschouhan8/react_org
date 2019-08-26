import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//Router import
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Docs from "./components/navContent/docs/Docs"
import Block from "./components/block/Block"
import Main from './components/main/Main';
import FooterSection from './components/footerSection/FooterSection';


const divStyle = {
    flexDirection: 'row'
    
      };

const routing = (
    <Router>
        <div className={style.bgColor}>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <img src='./logo.svg' alt="react.org" className={style.imgClass} />
                        <span className={style.textColor}>MicroSoft</span>
                    </a>
                    </div>

                    <ul className="nav navbar-nav" style={divStyle}>
                        <li className={style.navLink}>
                            <Link to="/">React</Link>
                        </li>          
                        <li className={style.navLink}>
                            <Link to="/docs">Docs</Link>
                        </li>
                        <li className={style.navLink}>
                            <Link to="/tutorial">Tutorial</Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
            <Route exactgit path="/" component={Main}/>
                    <Route path="/docs" component={Docs} />
                    <Route path="/tutorial" component={FooterSection} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
