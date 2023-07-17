import './App.css';
import React, { useState, useEffect } from 'react';
import { Stage, Container, Sprite } from '@pixi/react';
import Clickable from './Clickable';
// import CommentMarker from './CommentMarker';
import StatefulCommentMarker from './StatefulCommentMarker';
import { CommentsContext } from './CommentsContext';
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Comment {
  constructor(authorId, text) {
    this.authorId = authorId;
    this.text = text;
  }
}

class PointerWrapper {
  constructor(id, point) {
    this.id = id;
    this.point = point;
  }
}

// https://pixijs.io/pixi-react/context-bridge/
const ContextBridge = ({ children, Context, render }) => {
  const options = {
    resizeTo: window, // or window, or global.window, etc
    backgroundAlpha: 0
  };
  return (
    <Context.Consumer>
      {(value) => {
        console.log('context consumer value', value)
        return render(
          <Stage options={options} onMount={() => {
            /* force a full-screen initial render */
            window.dispatchEvent(new Event('resize'));
          }}>
            <Context.Provider value={value}>{children}</Context.Provider>
          </Stage>

        )
      }
      }
    </Context.Consumer>
  );
};

function App() {

  const [markers, setMarkers] = useState([]);
  const [threadsMap, setThreadsMap] = useState({});
  useEffect(() => {
    console.log('threadsMap updated', threadsMap)
  }, [threadsMap])
  const addCommentMarker = (e) => {
    console.log(e);
    const id = new Date().toISOString();
    const point = new PointerWrapper(id, new Point(e.clientX, e.clientY));
    setThreadsMap((threadsMap) => {
      console.log('threadsMap', threadsMap);
      return {
        ...threadsMap,
        [id]: {
          isOpen: true,
          comments: [],
          point: point.point,
        }
      };
    })
    setMarkers((markers) => {
      return [...markers, point];
    })
  };

  /* threadsMap}}> */
  console.log('render threadsMap', threadsMap);

  return (
    <div className="App">
      {/* Context bridge not open so skip for now */}
      <ContextBridge value={{ threads: threadsMap }} Context={CommentsContext} render={(children) => <>{children}</>}>
        <Clickable onClick={addCommentMarker}>
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
          {/* <div></div> */}
          {markers.map((pointWrapper) => {
            const point = pointWrapper.point;
            const id = pointWrapper.id;
            return <StatefulCommentMarker key={pointWrapper.id} point={point} id={pointWrapper.id} isOpen={threadsMap[id]?.isOpen} />
          })}
        </Clickable>
      </ContextBridge >
    </div>
  );
}

export default App;
