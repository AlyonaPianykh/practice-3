import React, { useState } from "react";
import { sortingTitle } from "../../constants";

export const BtnMenu = props => {
  const { options, onSortingChange } = props;

  const onLabelClick = e => {
    onSortingChange(e.target.id);
  };

  const [isOpenChange, setIsOpenChange] = useState(true);

  const someFunction = () => {
    setIsOpenChange(!isOpenChange);
  };

  return (
    <div>
      <button className="buttonMenu" onClick={someFunction}>
        sort
      </button>
      <ul className="changeMenu">
        {isOpenChange &&
          options.map(item => {
            return (
              <li key={item} id={item} onClick={onLabelClick}>
                {sortingTitle[item]}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
