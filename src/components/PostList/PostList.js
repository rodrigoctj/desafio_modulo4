import React, {Component} from 'react';
import './styles.css';
import Post from '../Post/Post';
class PostList extends Component{

    render(){
        return (
            <div className="postList">
                <div className="box">
                    <Post></Post>

                </div>
            </div>

        );
    }

}

export default PostList;