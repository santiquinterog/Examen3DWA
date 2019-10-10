import React, { Component } from 'react';
import ListaUno from './ListaUno';
import ListaDos from './ListaDos';

class Menu extends Component {

    render() {
        return (
            <div>
                <div className="main">
                    <ListaUno/>
                    <ListaDos/>
                </div>
            </div>
        );
    }
}

export default Menu;
