import React, { Component } from 'react';
import { getData } from './api';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
          posts: [],
          loading: true,
        };
        this.renderPosts = this.renderPosts.bind(this); 
      }
    componentDidMount() {
        getData()
          .then((res) => {
            this.setState({
              posts: res.data,
              loading: false,
            });
          })
          .catch((err) => console.log(err));
        this.renderPosts(); 
      } 

    renderPosts ()  {
        this.state.posts.map(post => {
            const { Players, Tournaments, Gallery, News} = post;
            
            return (
            <div>
                <div className="nav">
                    <ul>
                        <li>{Players}</li>
                        <li>{Tournaments}</li>
                        <li>{Gallery}</li>
                        <li>{News}</li>
                    </ul>
                </div>
            </div>
            );
        });
    }
}

export default Menu;
