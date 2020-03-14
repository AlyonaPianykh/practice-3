import React, { Component } from "react";
import uniqid from "uniqid";

export class PostsList extends Component {
  onChangeClick = e => {
    const { onPostSelect } = this.props;
    onPostSelect(e.target.id);
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id + uniqid()} id={post.id} onClick={this.onChangeClick}>
                {post.title}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
