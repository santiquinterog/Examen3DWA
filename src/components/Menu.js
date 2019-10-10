import React, { Component } from 'react';
import Elemento from './ElementoMenu';

class Menu extends Component {

    

    render() {
        return (
            <div>
                <div className="nav">
                    <Elemento/>
                </div>
            </div>
        );
    }
}

export default Menu;
