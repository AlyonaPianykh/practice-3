import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppWrapper } from './components/AppWrapper/AppWrapper';
import { SortingContext } from './context';
import { sortingTypes } from './constants';
import '../src/components/Post/Post.css';
import { allPosts } from './constants';


const PostsContext = React.createContext([]);
const ThemeContext = React.createContext('dark');

const Post = (props) => {
  const { styled, post } = props;
  const { authorName, data, mood, imgAuthor, text, imgPost } = post;

  return (
    <div className={`main ${styled ? 'styled' : ''}`}>
      <div className="block">
        <img src={imgAuthor} className="img"/>
        <h1>{authorName}</h1>
        <p className="text"> {mood} </p>
        <small className="data">{data}</small>
      </div>

      <div className="block1">
        <p className="text">{text}</p>
        {/*<PostImage src={imgPost} />*/}
      </div>
      <div className="button">
        <Btn label="Toggle"/>
      </div>
    </div>
  );
};

const PostsList = (props) => {
  const { title, itemRenderer } = props;

  const renderItems = (posts) => {
    return posts.map(itemRenderer);
  };

  return (
    <PostsContext.Consumer>
      {
        (posts) => {
          debugger
          return (
            <div className="list-wrapper">
              <div className="list-title">{title}</div>
              <div>
                <div>Number of posts:</div>
                <Badge>{posts.length}</Badge>
              </div>
              {
                renderItems(posts)
              }

            </div>
          );
        }
      }
    </PostsContext.Consumer>
  );
};

const Badge = (props) => (<div className="badge">{props.children}</div>);

const renderItem = (post) => (<Post post={post} key={post.id}/>);

const onClickTest = (label) => {
  alert(label);
};
const Btn = (props) => {
  const { withPinkBackground, label = 'click me', onClick } = props;

  const onClickHandler = () => {
    onClick && onClick(label);
  };

  return (
    <ThemeContext.Consumer>
      {
        (value) => {
          console.log('value = ', value);

          return (
            <button className={`my-btn ${value === 'dark' ? 'dark' : ''} ${withPinkBackground ? 'pink' : ''}`}
                    onClick={onClickHandler}>
              {label}
            </button>
          );
        }
      }
    </ThemeContext.Consumer>
  );
};

const App = (props) => {
  const { children, isDarkTheme = false } = props;


  return (
    // <div className="wrapper">
    //   <span>Hello world!</span>
    //   <Btn onClick={onClickTest}/>
    //   <Btn withPinkBackground />
    //   {children}
    // </div>
    <div>
      <PostsList title="all my posts" itemRenderer={renderItem}/>
    </div>
  );
};
ReactDOM.render(
  <PostsContext.Provider value={allPosts}>
    <ThemeContext.Provider value="light">
      <App>
        <div>test test</div>
      </App>
      <Btn label="custom " onClick={onClickTest}/>
      {/*{React.createElement(App, {isOpen: true})}*/}
      {/*{ React.createElement('div', {*/}
      {/*  className: 'test-2',*/}
      {/*  style: {width: 20}*/}
      {/*  }, 'hello') }*/}
    </ThemeContext.Provider>
  </PostsContext.Provider>
  , document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
