import React, { Component } from 'react';
import './styles.css';
import User from '../../../public/user1.jpg'; 
class Post extends Component{

    render(){
        return (
            <div className="post">
                <div className="postOwner">
                    <img src={User}></img>
                    <a>Rodrigo Junior</a>
                    <a>04 Jun 2019</a>
                </div>
                <h1>Pessoal, tudo certo?</h1>
            </div>
        );
    }

}

export default Post;