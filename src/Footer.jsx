import React, {useContext} from 'react';
import ThemeContext from './ThemeContext';

export default function Footer (){
  const {theme} = useContext(ThemeContext);
  const lightThemeText = "Thank you for visting! Enjoy the light theme."
  const darkThemeText = "Thank you for visting! Have a great time with dark theme."

  const text = (theme === 'light')? lightThemeText: darkThemeText;
  return (
    <div>
      {text}
    </div>
  )
}