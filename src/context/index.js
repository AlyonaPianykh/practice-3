import React, {createContext} from 'react';
import { sortingTypes } from '../constants';
// todo: нужно импортнуть {user, allLinks} из '../constants'

export const SortingContext = createContext({
  sortType: sortingTypes.BY_AUTHOR,
});

export const ThemeContext = createContext('dark');

// todo: Создать здесь новый контекст AppConfigContext, по умолчанию положить пустой объект, использовать его в src/components/AppWrapper.js
// todo: Создать здесь новый контекст UserContext, по умолчанию положить пустой объект, использовать его в src/components/AppWrapper.js