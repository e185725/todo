import React,{ Component } from "react";
import "./css/App.css";
import PostList from "./PostList";
import Form from "./Form";
import images from "./images/cat.jpg";
import Image from "./ImageList"
class App extends Component{

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      cb(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }


  
  constructor() {
    super()

      this.state = {
        posts : [
          {
            id :1,
            title: "Test1",
            img : images
          },
          {
            id :2,
            title: "Test2",
            img : "./images/cat.jpg"
          },
        ]
      }
    }








  render(){
    return (
      <div className="app">
            <h1>テスト画面</h1>
            
            <PostList posts={this.state.posts}/>
            <Form />
            <img src="./images/cat.jpg" alt="a"/>
            <Image />
      </div>
    );
  }
}

export default App;
