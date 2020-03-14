import React, { Component } from "react";
import uniqId from "uniqid";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      id: uniqId()
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.post.id !== prevState.id) {
      return {
        id: nextProps.post.id,
        text: nextProps.post.text,
        title: nextProps.post.title
      };
    }
    return null;
  }

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onLabelChange = e => {
    const { id } = e.target;
    this.setState({
      [id]: e.target.value
    });
  };

  onSubmit = () => {
    const { user, addPost } = this.props;
    const newPost = {
      ...this.state,
      data: new Date(),
      mood: "happy",
      authorName: `${user.name} ${user.lastName}`
    };
    addPost(newPost);
    this.setState({
      id: uniqId(),
      title: "",
      text: ""
    });
  };

  render() {
    return (
      <div className="form">
        <input
          type="text"
          id="title"
          onChange={this.onLabelChange}
          value={this.state.title}
        />
        <input
          type="text"
          id="text"
          onChange={this.onLabelChange}
          value={this.state.text}
        />
        <button onClick={this.onSubmit}>Click me</button>
      </div>
    );
  }
}
