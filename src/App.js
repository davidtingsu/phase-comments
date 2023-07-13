import logo from './logo.svg';
import './App.css';
import * as PIXI from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

function App() {
  return (
    <div className="App">
      <Stage options={{ backgroundAlpha: 0 }}>
        <Container x={150} y={150}>
          <Sprite
            image="https://pixijs.io/pixi-react/img/bunny.png"
          />
        </Container>
      </Stage>,
    </div>
  );
}

export default App;
