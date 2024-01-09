import './App.css';
import {useState} from 'react';
import ThemeContext from './ThemeContext';
import Form from './Form'
import Footer from './Footer';

export default function App() {
  const [theme,setTheme] = useState('light');
  return (               //object { theme:theme, setTh:setTh}
    <ThemeContext.Provider value= {{theme, setTheme}}>
      <Form/>
      <label>
        <input 
          type="checkbox"
          checked={theme ==='dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light');
          }} //setTheme(true? 'dark' else 'light')
        />
        Use dark mode
      </label>
    
      <Footer/>
    </ThemeContext.Provider>
  );
}


//wrap the entire application with the ThemeContext.Provider component. This makes the theme and setTheme values available to all the child components through the context.