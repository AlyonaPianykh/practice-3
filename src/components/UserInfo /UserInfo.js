import React from "react";
import { UserContext } from "../../context";
import "./UserInfo.scss";

const UserInfo = () => {
  return (
    <UserContext.Consumer>
      {({ user, toggleUserRole }) => (
        <div className="userInfo">
          <div>
            <img src={user.avatar} alt="photo" />
          </div>
          <div className="userData">
            <p>
              {user.name} {user.lastName}
            </p>
            <button onClick={toggleUserRole}>{user.role}</button>
          </div>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default UserInfo;
