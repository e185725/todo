import React, { Component } from "react";
//import "./css/form.css"

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form onSubmit={this.props.handleSubmit}>
                    <input name="title" type="text" placeholder="タイトル *必須"defaultValue="タイトル" />
                    <br/>
                    <input type="file" id="file" name="file"/>
                    <br/>
                    <button type="submit">投稿</button>
                </form>
            </div>
        )
    }
}

export default Form