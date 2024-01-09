import {createContext} from 'react';

const ThemeContext = createContext(null);

export default ThemeContext;

//In ThemeContext.js, we create a context using createContext() and export it as ThemeContext. This context is used to share the theme and setTheme values across different components.