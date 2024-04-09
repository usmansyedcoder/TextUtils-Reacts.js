import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';



function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <h1>This is usman</h1>
    <a href="https://www.google.com">Google</a>
    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with usman khan
        </a>
      </header>
    </div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Help</li>
      <li>Search</li>
    </ul>
    <p>PAkistan is a good country PAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good countryPAkistan is a good country
    </p> */}


      <Navbar title="TextUtils" about="About TextUtils" mode={mode} />
      {/* <Navbar/> */}
      <div className='container my-3'>
        <TextForm heading="Enter text to convert to LowerCase/Uppercase" mode={mode} />
      </div>


      {/* <About /> */}
    </>
  );
}
// console.log('usman');
export default App;
