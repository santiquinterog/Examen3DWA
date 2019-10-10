import React, { Component } from 'react';

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            hits: []
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData();
    }

    handleChange(e) {

    }

    getData(){
        fetch('https://dwaapi.juvasquez88.now.sh/atp')
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits }));
    }

    render() {

        return (
            <div className="nav">
                {
                    this.state.hits.map(hit => {
                        return (
                            <div>
                                <ul>

                                    <li>{hit.Players}</li>
                                    <li>Torneos</li>
                                    <li>Galeria</li>
                                    <li>Noticias</li>

                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
    export default Menu;
