import React, { Component } from "react";
import { Post } from "./components/Post/Post";
import { Button } from "./components/Button/Button";
import { allPosts, sortingTypes } from "./constants";
import { SortingContext, ThemeContext, UserContext } from "./context";
import Header from "./components/Header/Header";
import { BtnMenu } from "./components/BtnMenu/BtnMenu";
import { PostsList } from "./components/PostsList/PostsList";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Form } from "./components/Form/Form";

import "./App.scss";
import { Input } from "./components/Input/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      selectedPostId: allPosts[0].id,
      isPostHidden: false
    };
  }

  hidePost = () => {
    this.setState({
      isPostHidden: !this.state.isPostHidden
    });
  };

  saveInputValue = value => {
    this.setState({
      ...this.state,
      inputValue: value
    });
  };

  renderButton = (label, onClick, sortCondition) => {
    return (
      <SortingContext.Consumer>
        {value => {
          const { sortType } = value;
          return (
            <Button
              className={`btn ${
                sortType === sortCondition ? "btn-styled" : ""
              }`}
              label={label}
              onClick={() => {
                onClick(sortCondition);
              }}
            />
          );
        }}
      </SortingContext.Consumer>
    );
  };
  onPostSelect = postId => {
    this.setState({
      selectedPostId: postId
    });
  };

  render() {
    return (
      <SortingContext.Consumer>
        {sortConfig => {
          const { sortType, onSortingChange, posts, addPost } = sortConfig;

          const { selectedPostId } = this.state;
          const neededIndex = posts.findIndex(
            item => item.id === selectedPostId
          );
          return (
            <ThemeContext.Consumer>
              {value => {
                console.log(value); // достаем значение темы из контекста и используем ниже в className
                return (
                  <div className={`App ${value}`}>
                    <Header />
                    <PostsList posts={posts} onPostSelect={this.onPostSelect} />
                    <Input
                      value={this.state.inputValue}
                      onValueChange={this.saveInputValue}
                    />
                    <p>{this.state.inputValue}</p>
                    <BtnMenu
                      options={Object.keys(sortingTypes)}
                      onSortingChange={onSortingChange}
                    />
                    {this.renderButton(
                      "Sort by author",
                      onSortingChange,
                      sortingTypes.BY_AUTHOR
                    )}
                    {this.renderButton(
                      "Sort by date",
                      onSortingChange,
                      sortingTypes.BY_DATE
                    )}{" "}
                    {/* рендерим кнопку с помощью вспомогательной функции */}
                    <ErrorBoundary>
                      <div>
                        <Button label="HIDE POST!" onClick={this.hidePost} />
                        {!this.state.isPostHidden &&
                          neededIndex !== -1 && (
                            <Post post={posts[neededIndex]} />
                          )}
                        <UserContext.Consumer>
                          {({ user }) => (
                            <Form
                              addPost={addPost}
                              user={user}
                              post={posts[neededIndex]}
                            />
                          )}
                        </UserContext.Consumer>
                      </div>
                    </ErrorBoundary>
                    {/*<div className="all-posts">*/}
                    {/*  {*/}
                    {/*    posts.map((post) => {*/}
                    {/*      return (*/}
                    {/*        <Post post={post} key={post.id}/>*/}
                    {/*      );*/}
                    {/*    })*/}
                    {/*  }*/}
                    {/*</div>*/}
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </SortingContext.Consumer>
    );
  }
}

export default App;
