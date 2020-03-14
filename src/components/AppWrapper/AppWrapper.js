import React, { useState } from "react";
import {
  AppConfigContext,
  SortingContext,
  ThemeContext,
  UserContext
} from "../../context";
import { allLinks, allPosts, sortingTypes, user } from "../../constants";

export function AppWrapper(props) {
  const [sortType, setSortType] = useState(sortingTypes.BY_DEFAULT);
  const [userRole, setUserRole] = useState(user.role);
  const [posts, setPosts] = useState(allPosts);

  const toggleUserRole = () => {
    setUserRole(userRole === "admin" ? "user" : "admin");
  };

  const addPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const onSortingChange = value => {
    setSortType(value);
    switch (value) {
      case sortingTypes.BY_DATE:
        sortByDate();
        break;
      case sortingTypes.BY_AUTHOR:
        sortByAuthor();
        break;
      default:
        setPosts([...allPosts]);
    }
  };

  const sortByAuthor = () => {
    const sorted = allPosts.sort(function(a, b) {
      if (a.authorName > b.authorName) {
        return 1;
      }
      if (a.authorName < b.authorName) {
        return -1;
      }
      return 0;
    });
    setPosts([...sorted]); // вызываем хук изменения для posts. это вызывает перерендер
  };

  const sortByDate = () => {
    const sorted = posts.sort((a, b) => new Date(a.data) - new Date(b.data));

    setPosts([...sorted]); // вызываем хук изменения для posts. это вызывает перерендер
  };

  return (
    <AppConfigContext.Provider value={allLinks}>
      <UserContext.Provider
        value={{
          user: {
            ...user,
            role: userRole
          },
          toggleUserRole
        }}
      >
        <ThemeContext.Provider value={"light"}>
          <SortingContext.Provider
            value={{
              sortType,
              onSortingChange,
              posts,
              addPost
            }}
          >
            {props.children}
          </SortingContext.Provider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </AppConfigContext.Provider>
  );
}
