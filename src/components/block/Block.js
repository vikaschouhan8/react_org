import React, { Component } from 'react';
import style from "./Block.module.css"

class Block extends Component {
    render() {
        return (
            <>
                <div className="col-md-4">
                    <div className={style.blockClass}>
                        <h4>{this.props.data[0]}</h4>
                        <p>{this.props.data[1]}</p>
                        <br />
                        <p>{this.props.data[2]}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Block;