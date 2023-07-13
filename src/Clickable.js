import { useApp } from '@pixi/react';
import React, { useEffect } from 'react';

function Clickable(props) {
    const app = useApp();

    useEffect(() => {
        // https://stackoverflow.com/a/62927828/1123985
        if (props.onClick){
            app.renderer.view.addEventListener('click', props.onClick);
        }
    }, [])

    return (
        <>
            {props.children}
        </>
    );
}
export default Clickable;