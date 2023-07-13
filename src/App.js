import logo from './logo.svg';
import './App.css';
import * as PIXI from 'pixi.js';
// import { Stage, Container, Sprite, Text } from '@pixi/react';

function App() {
  const app = new PIXI.Application({
    background: '#1099bb',
    resizeTo: window,
  });
  document.body.appendChild(app.view);
 console.log('document.body', document.body)
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
