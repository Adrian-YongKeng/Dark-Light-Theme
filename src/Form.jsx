import { useContext,useState } from 'react';
import ThemeContext from './ThemeContext';
import lightImage from './sun-smiling.gif';
import darkImage from './moon.gif';
import './Form.css';
// import useContext and the ThemeContext we created earlier to access the theme and setTheme values from the context.
export default function Form() {
  //const currentTheme = useContext(ThemeContext).theme;
  //const setTheme = useContext(ThemeContext).setTheme;
  const { theme, setTheme } = useContext(ThemeContext);
  const updatedTheme = theme === 'light' ? 'dark' : 'light';
  const [title, setTitle] = useState("Welcome");

  return (
    <div className='form-container'>
      <Panel title={title}>
        <Button onClick={() => setTitle('Sign Up')}>Sign Up</Button>
        <Button onClick={() => setTitle('Log In')}>Log In</Button>
        <button onClick={() => setTheme(updatedTheme)}
          className={`toggle-button ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
          Toggle Theme
        </button>
        {theme === 'light' ? (
          <img src={lightImage} alt="Light Theme" className='theme-image' />
        ) : (
          <img src={darkImage} alt="Dark Theme" className='theme-image' />
        )}
      </Panel>

    </div>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext).theme;
  const className = 'panel-' + theme;
  return (
    <section className={className} >
      <h1>{title}</h1>
      {children}
    </section>
  );
}

function Button({children ,onClick}) {
  const theme = useContext(ThemeContext).theme;

  const className = 'button-' + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}




//In the Form component, you use the theme value to determine the current theme and apply styles or display theme-specific content.
//Additionally, you use the setTheme function to toggle the theme when the "Toggle Theme" button is clicked. This allows the user to actively change the theme from the Form component.
//So, in the Form component, both accessing and updating the theme are relevant actions, which is why you use useContext to get both theme and setTheme

//both components use useContext to access the theme value because they need to read the theme to display content or apply styles based on it. However, the setTheme function is used in the Form component because it allows the user to actively change the theme, whereas the Footer component only displays information based on the current theme.