import React,{ Component } from "react";
import Post from "./Post"

class PostList extends Component {

     

    render(){
        const posts = this.props.posts.map( post =>
            <Post
                key={post.id}
                {...post}
            />
            )
        
        return(
            <ul>
                {posts}
            </ul>
        )
    }
}

export default PostList