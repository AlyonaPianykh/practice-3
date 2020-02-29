import React, { useState } from 'react';
import { SortingContext, ThemeContext } from '../../context';
import { sortingTypes } from '../../constants';
// todo: импортнуть контекст { AppConfigContext, UserContext } из '../../context'
// todo: импортнуть объект { allLinks, user }  из '../../constants'

export function AppWrapper(props) {
  const [sortType, setSortType] = useState(sortingTypes.BY_DEFAULT);

  const onSortingChange = (value) => {
    setSortType(value);
  };

  return (
    // todo: использовать здесь AppConfigContext.Provider, как value передать allLinks
    // todo: использовать здесь UserContext.Provider, как value передать user
    <ThemeContext.Provider value={'light'}>
      <SortingContext.Provider value={{
        sortType,
        onSortingChange
      }}>
        {props.children}
      </SortingContext.Provider>
    </ThemeContext.Provider>
  );
}