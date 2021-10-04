import React,{ Component } from "react";


class Post extends Component {

    render() {
        //console.log(this.props.img)
        return(
            <li>
                
                <span>{this.props.id}</span>
                <span>{this.props.img}</span>
                <img src={this.props.img} alt=""/>
                
            </li>
        )
    }
}

export default Post