import React, { Component } from 'react';
import style from './HeadPart.module.css'
const divStyle = {
flexDirection: 'row'

  };

const imgClass = {
    
}
class HeadPart extends Component {
    render() {
        return (
            <>
                <div className={style.bgColor}>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img src='./logo.svg' alt="react.org" className={style.imgClass} />
                                <span className={style.textColor}>React</span>
                            </a>
                            </div>
                        <ul className="nav navbar-nav" style={divStyle}>

                            <li className={style.navLink}><a href="#">Home</a></li>
                            <li className={style.navLink}><a href="#">Docs</a></li>
                            <li className={style.navLink}><a href="#">Toutorials</a></li>
                            <li className={style.navLink}><a href="#">Blog</a></li>
                            <li className={style.navLink}><a href="#">Community</a></li>
                            <li><input type="text" className={style.navSearch} placeholder="Search" /></li>
                            <li className={style.navLink}><a href="#">v16.8.6</a></li>
                            <li className={style.navLink}><a href="#">Languages</a></li>
                            <li className={style.navLink}><a href="#">GitHub</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}

export default HeadPart;