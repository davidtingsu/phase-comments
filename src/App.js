import './App.css';
import React from 'react';
import { Stage, Container, Sprite} from '@pixi/react';
import Clickable from './Clickable';
function App() {
  const options = {
    resizeTo: window, // or window, or global.window, etc
    // backgroundAlpha: 0
  };

  return (
    <div className="App">
      <Stage options={options} onMount={() => {
        /* force a full-screen initial render */
        window.dispatchEvent(new Event('resize'));
      }}>
        <Clickable onClick={console.log}>
          <Container x={0} y={150} interactive={true} pointerdown={() => console.log('hi')}>
            <Sprite
              image={process.env.PUBLIC_URL + '/Original_Doge_meme.jpg'}
            />
          </Container>
          <Container x={400} y={200} interactive={true} pointerdown={() => console.log('hi2')}>
            <Sprite
              image={process.env.PUBLIC_URL + '/Original_Doge_meme.jpg'}
            />
          </Container>
        </Clickable>
      </Stage>
    </div>
  );
}

export default App;
