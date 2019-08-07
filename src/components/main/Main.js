import React, { Component } from 'react';
import style from './Main.module.css'

class Main extends Component {
    render() {
        return (
            <>
               <div className={style.main}>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <center className={style.paddingTop}>
                                <h1 className={style.textColor}>React</h1>
                                <p className={style.textColorWhite}>A javascript librry for building UI interface</p>
                                <button className={style.bgBlue}>React</button>
                                <a href="" className={style.linkBlue}>className</a>
                            </center>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div> 
            </>
        );
    }
}

export default Main;