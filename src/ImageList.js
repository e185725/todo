import React, { Component } from "react";
import Image from "./Image";

// inputタグで受け取った画像をbase64形式に変換するための関数です。
function getBase64(file, cb) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    cb(reader.result);
    //console.log("1",reader.result)
  };
  reader.onerror = function(error) {
    console.log("Error: ", error);
  };
}

export default class ImageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ImageId: 1,
      SelectedImageList: []
    };
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  handleChangeFile(e) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      // getBase64()は非同期なので、結果を取得したら
      // Imageコンポーネントを作成して追加していく
      getBase64(files[i], result => {
        let NewSelectedImageList = this.state.SelectedImageList;
        NewSelectedImageList.push(
          <Image
            key={this.state.ImageId}
            id={this.state.ImageId}
            name={files[i].name}
            file={result}
          />
        );
        //console.log(result)
        this.setState({ SelectedImageList: NewSelectedImageList });
        this.setState({ ImageId: this.state.ImageId + 1 });
      });
    }
  }
  render() {
    return (
      <section>
        <h3>Multiple file selection Sample</h3>
        <label htmlFor={"input-label"} className="label">
          <span className="name">Add Images</span>
          <input
            id={"input-label"}
            type="file"
            ref="file"
            multiple="multiple"
            style={{ visibility: "hidden" }}
            onChange={this.handleChangeFile}
          />
        </label>
        <div className="full-screen-list">{this.state.SelectedImageList}</div>
      </section>
    );
  }
}