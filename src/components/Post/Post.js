import React, { useState, PureComponent } from "react";
import "./Post.scss";

export class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      styled: false
    };
    console.log("constructorPost: " + this.props.post.id);
  }

  componentDidMount() {
    console.log("Post componentDidMount " + this.props.post.id);
    // this.interval = setInterval(() => {
    //   console.log("Hello I'm" + this.props.post.id); }, 3000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
    console.log("Post componentWillUnmount " + this.props.post.id);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Post componentDidUpdate" + this.props.post.id);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.post.id !== this.props.post.id;
  // }

  onToggleMeHandler = () => {
    this.setState({
      styled: !this.state.styled
    });
  };

  render() {
    const { post, isClosed } = this.props;
    const { imgAuthor, authorName, mood, data, text, imgPost } = post;
    console.log("renderPost:" + this.props.post.id);

    return (
      isClosed || (
        <div className={`main ${this.state.styled ? "styled" : ""}`}>
          <div className="block">
            <img src={imgAuthor} className="img" />
            <h1>{authorName}</h1>
            <p className="text"> {mood} </p>
            <small className="data">{data.toString()}</small>
          </div>

          <div className="block1">
            <p className="text">{text}</p>
            {/*<PostImage src={imgPost} />*/}
          </div>
          <div className="button">
            <button onClick={this.onToggleMeHandler}>Toggle</button>
          </div>
        </div>
      )
    );
  }
}
