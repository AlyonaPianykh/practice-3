import React from "react";
import { AppConfigContext, UserContext } from "../../context";
import UserInfo from "../UserInfo /UserInfo";
import "./Header.scss";

const Header = () => {
  return (
    <AppConfigContext.Consumer>
      {allLinks => (
        <UserContext.Consumer>
          {({ user }) => (
            <div className="header">
              <ul className="menu">
                {" "}
                {user &&
                  allLinks &&
                  allLinks[user.role].map(link => (
                    <li key={link.label}>
                      <a href="#">{link.label}</a>
                    </li>
                  ))}
              </ul>
              <UserInfo />
            </div>
          )}
        </UserContext.Consumer>
      )}
    </AppConfigContext.Consumer>
  );
};

export default Header;

// todo:
//  1) создать функциональный компонент Header, не забудьте сделать export этого компонента
//  2) обвернуть возвращаемый jsx в UserContext.Consumer и AppConfigContext.Consumer
//  детальнее как правильно обвернуть тут: https://ru.reactjs.org/docs/context.html#consuming-multiple-contexts
//  3) Header должен возвращать список (c помощью .map) на основе того, какая роль у пользователя (user.role) и allLinks
//  т.е. если user.role === 'admin' - возвращаемый список на основе allLinks.admin, если user.role === 'user' - список  allLinks.user
//  4) используйте этот компонент Header в App.js
