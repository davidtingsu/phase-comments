import './App.css';
import React, { useState, useEffect } from 'react';
import { Stage, Container, Sprite } from '@pixi/react';
import Clickable from './Clickable';
// import CommentMarker from './CommentMarker';
import StatefulCommentMarker from './StatefulCommentMarker';
import { CommentsContext } from './CommentsContext';
import { ResolveableComment as CommentComponent, PublishedComment } from './Comment';
class Point {
  constructor(x, y) {
    this.x = Math.floor(x);
    this.y = Math.floor(y);
  }
}

class Comment {
  constructor(authorId, text) {
    this.authorId = authorId;
    this.text = text;
    this.timestamp = new Date().toISOString();
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

  const [user, setUser] = useState({
    name: 'Cosma Faustine'
  });


  const addCommentMarker = (e) => {
    console.log('[debug] addComment event', e)
    const id = new Date().toISOString();
    const point = new PointerWrapper(id, new Point(e.clientX, e.clientY));
    setThreadsMap((threadsMap) => {
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
          <Container x={400} y={200} interactive={true}>
            <Sprite
              image={process.env.PUBLIC_URL + '/Original_Doge_meme.jpg'}
            />
          </Container>
          {/* <div></div> */}
          {markers.map((pointWrapper) => {
            const point = pointWrapper.point;
            const id = pointWrapper.id;
            return <StatefulCommentMarker
              key={pointWrapper.id}
              point={point}
              id={pointWrapper.id}
              isOpen={threadsMap[id]?.isOpen}
              onClick={(e) => {
                console.log('[debug] open comment', pointWrapper.id, e)
                e.stopPropagation();
                e?.preventDefault();
                setThreadsMap((threadsMap) => {
                  const id = pointWrapper.id;
                  if (threadsMap[id]?.isOpen) return;
                  return {
                    [id]: {
                      ...threadsMap[id],
                      isOpen: true,
                    }
                  };
                })
              }}
            />
          })}
        </Clickable>
      </ContextBridge >
      {Object.entries(threadsMap).map(([id, meta]) => {
        console.log('id', id);
        if (meta.isOpen) {
          return (
            <div key={id} style={{ position: 'absolute', top: meta.point.y, left: meta.point.x }}>
              {/* <b>{meta.point.x},{meta.point.y}</b> */}
              <CommentComponent
                onSubmit={(values) => {
                  setThreadsMap((threadsMap) => {
                    return {
                      [id]: {
                        ...threadsMap[id],
                        isOpen: true,
                        comments: (threadsMap[id].comments || []).concat(
                          [new Comment(undefined, values.comment)]
                        ),
                      }
                    };
                  })
                }}
                onResolved={() => {
                  setThreadsMap((threadsMap) => {
                    const copy = { ...threadsMap };
                    delete copy[id];
                    // console.log(markers.filter(wra => pointer !== threadsMap[id].point), threadsMap[id].point)
                    setMarkers(markers.filter(pointerWrapper => pointerWrapper.point !== threadsMap[id].point));
                    return copy;
                  });
                }}
                onClickOutside={() => {
                  setThreadsMap((threadsMap) => {
                    // delete on click outside if no comment was added
                    debugger;
                    if (!threadsMap[id]?.comments?.length) {
                      const copy = { ...threadsMap };
                      delete copy[id];
                      // console.log(markers.filter(wra => pointer !== threadsMap[id].point), threadsMap[id].point)
                      setMarkers(markers.filter(pointerWrapper => pointerWrapper.point !== threadsMap[id].point));
                      return copy;
                    }
                    return {
                      [id]: {
                        ...threadsMap[id],
                        isOpen: false,
                      }
                    };
                  })
                }} />
              {threadsMap[id].comments?.map((comment) => {
                return (<PublishedComment name={user.name} text={comment.text} timestamp={comment.timestamp} />);
              })}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;
