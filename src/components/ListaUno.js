import React, { Component } from 'react';
import Elemento from './ElementoLista';

class ListaUno extends Component {

    render() {
        return (
                <div className="lista">
                    <Elemento/>
                </div>
        );
    }
}

export default ListaUno;