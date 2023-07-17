import './App.css';
import React, { useState, useCallback } from 'react';
import { Stage, Container, Sprite, Graphics } from '@pixi/react';
import { SVGResource } from 'pixi.js';
function CommentMarker(props) {
    const { point } = props;
    const draw = useCallback((g) => {
        g.clear();
        g.beginFill(0x0000FF, 0.5);
        g.drawCircle(point.x, point.y, 4);
        g.endFill();
    }, []);
    console.log('CommentMarker props.onClick', props.onClick)
    if (props.isOpen) {
        return (<>
            <Graphics draw={draw} />
        </>);
    }
    return (
        <Sprite
            onmouseenter={() => console.log('[debug] mouseenter')}
            onclick={() => console.log('[debug] click sprite')}
            pointerdown={props.onClick}
            image={"https://www.svgrepo.com/show/159239/comment.svg"}
            anchor={[0.5, 1]}
            position={[point.x, point.y]}
            scale={0.04}
        />
    );

}

export default CommentMarker;
