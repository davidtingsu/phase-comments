import { useApp } from '@pixi/react';
import React, { useEffect } from 'react';

function Clickable(props) {
    const app = useApp();

    useEffect(() => {
        // https://stackoverflow.com/a/62927828/1123985
        if (props.onClick){
            // app.stage.on('click', props.onClick);
            app.renderer?.view?.addEventListener('click', props.onClick);
            // app.renderer.on('pointerdown', props.onClick);
            // console.log('[debug] renderer', app.renderer.eventNames());
            // console.log('[debug] stage', app.stage.eventNames());
        }
        return () => {
            app.renderer?.view?.removeEventListener('click', props.onClick);
        };
    }, [props?.onClick])

    return (
        <>
            {props.children}
        </>
    );
}
export default Clickable;