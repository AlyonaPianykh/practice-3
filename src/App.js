import React, { useState } from 'react';
import { Post } from './components/Post/Post';
import { Button } from './components/Button/Button';
import { sortingTypes, allPosts } from './constants';
import { SortingContext, ThemeContext } from './context';
// todo: импортнуть тут ваш созданные компонент { Header } из './components/Header/Header'

import './App.scss';

function App() {
  const [posts, setPosts] = useState(allPosts); // хук изменения состояния, который вызывает перерендер нашей компоненты если posts меняется

  const sortByAuthor = (callback) => {
    const sorted = allPosts.sort(function (a, b) {
      if (a.authorName > b.authorName) {
        return 1;
      }
      if (a.authorName < b.authorName) {
        return -1;
      }
      return 0;
    });
    debugger
    callback(sortingTypes.BY_AUTHOR);
    setPosts([...sorted]); // вызываем хук изменения для posts. это вызывает перерендер
  };

  const sortByDate = (callback) => {
    const sorted = posts.sort((a, b) => (new Date(a.data) - new Date(b.data)));
    debugger
    callback(sortingTypes.BY_DATE);
    setPosts([...sorted]); // вызываем хук изменения для posts. это вызывает перерендер
  };

  const renderButton = (label, onClick, sortCondition) => {
    return (
      // достаем вид сортировки и callback для изменения вида сортировки из контекста
      <SortingContext.Consumer>
        {
          (value) => {
            debugger
            const { sortType, onSortingChange } = value;
            return (
              <Button
                className={`btn ${sortType === sortCondition ? 'btn-styled' : ''}`}
                label={label}
                onClick={() => {
                  // здесь используем переданный для кнопки onClick, и передаем в него callback - onSortingChange,
                  // который прилетает из контекста
                  onClick(onSortingChange);
                }}/>
            );
          }
        }
      </SortingContext.Consumer>
    );
  };

  return (
    <ThemeContext.Consumer>
      {
        (value) => {
          console.log(value); // достаем значение темы из контекста и используем ниже в className
          return (
            <div className={`App ${value}`}>
              {/* todo: использовать Header здесь */}

              {renderButton('Sort by author', sortByAuthor, sortingTypes.BY_AUTHOR)}
              {renderButton('Sort by date', sortByDate, sortingTypes.BY_DATE)} {/* рендерим кнопку с помощью вспомогательной функции */}
              <div className="all-posts">
              {
                posts.map((post) => {
                  return (
                    <Post post={post} key={post.id}/>
                  );
                })
              }
              </div>
            </div>
          );
        }
      }

    </ThemeContext.Consumer>
  );
}


export default App;
