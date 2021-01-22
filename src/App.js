import logo from './svg/logo.svg';
import levi from './svg/levi.svg';
import './App.css';

function App() {
  return (
    <div className="Main">
      <img src={levi} className="Profile" alt="logo" />
      <p className='Name'>Sean Go</p>
      <button className='Button'>About Me</button>
      <button className='Button'>Github</button>
      <button className='Button'>Projects</button>
    </div>
  );
}

export default App;

{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}