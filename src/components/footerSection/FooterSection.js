import React, { Component } from 'react';
import Block from '../block/Block';

const footerData=[
    "Footer", "Fooo", "terr"
]

class FooterSection extends Component {
    render() {
        return (
            <>
                <div className="footer">Footer</div>
                <Block data={footerData} />
            </>
        );
    }
}

export default FooterSection;