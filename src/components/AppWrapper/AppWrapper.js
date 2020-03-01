import React, {useState} from 'react';
import {AppConfigContext, SortingContext, ThemeContext, UserContext} from '../../context';
import {allLinks, sortingTypes, user} from '../../constants';

export function AppWrapper(props) {
  const [sortType, setSortType] = useState(sortingTypes.BY_DEFAULT);
  const [userRole, setUserRole] = useState(user.role);

  const toggleUserRole = () => {
    setUserRole(userRole === 'admin' ? 'user' : 'admin')
  };

  const onSortingChange = (value) => {
    setSortType(value);
  };

  return (
    <AppConfigContext.Provider value={allLinks}>
      <UserContext.Provider value={{
        user: {
          ...user,
          role: userRole
        },
        toggleUserRole
      }}>
        <ThemeContext.Provider value={'light'}>
          <SortingContext.Provider value={{
            sortType,
            onSortingChange
          }}>
            {props.children}
          </SortingContext.Provider>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </AppConfigContext.Provider>
  );
}
