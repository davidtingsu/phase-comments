import './App.css';
import React, { useState, useCallback } from 'react';
import { Stage, Container, Sprite, Graphics } from '@pixi/react';
import { SVGResource } from 'pixi.js';
function CommentMarker(props) {
    const { point } = props;
    const x = Math.floor(point.x);
    const y = Math.floor(point.y);

    const draw = useCallback((g) => {
        g.clear();
        g.beginFill(0x0000FF, 0.5);
        g.drawCircle(x, y, 4);
        g.endFill();
    }, []);
    console.log('CommentMarker props.onClick', props.onClick, point)
    if (props.isOpen) {
        return (<>
            <Graphics draw={draw} />
        </>);
    }
    return (
        <Sprite
            interactive={true}
            onmouseenter={() => console.log('[debug] mouseenter')}
            // onclick={() => console.log('[debug] click sprite')}
            click={props.onClick}
            image={"https://www.svgrepo.com/show/159239/comment.svg"}
            anchor={[0.5, 1]}
            position={[x, y]}
            scale={0.04}
        />
    );

}

export default CommentMarker;
