import React, {createContext, useContext} from 'react';
import "./style.css";

const themeDefault = { border: '10px solid red'};
const ThemeContext = createContext(themeDefault);


function App() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={{border: '10px solid blue'}}>
    <div className="root" style={theme}>
      <h1>Hello World!</h1>
      <Sub1/>
    </div>
    </ThemeContext.Provider>
  );
}

function Sub1() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={{border: '10px solid green'}}>
    <div style={theme}>
      <h1>Sub1</h1>
      <Sub2/>
    </div>   
    </ThemeContext.Provider>
  )
}

function Sub2() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3/>
    </div>
  )
}

function Sub3() {
  const theme = useContext(ThemeContext);
  return (
    <div style={theme}>
      <h1>Sub3</h1>
    </div>
  )
}
export default App
