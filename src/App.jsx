import { useState } from 'react'
import './App.css'
import UseLocalStorage from './UseLocalStorage'

function App() {
  const [theme, setTheme] = UseLocalStorage("theme", "dark");

  function handleToggleTheme(params) {
    setTheme(theme === "light" ? "dark" : "light")
  }
  console.log(theme);

  return (
    <>
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
      </div>
    </>
  )
}

export default App
