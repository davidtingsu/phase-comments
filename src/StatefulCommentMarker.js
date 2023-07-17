import React, {useCallback, useContext } from 'react';
import CommentMarker from './CommentMarker';
import { CommentsContext } from './CommentsContext';

function StatefulCommentMarker(props) {
    // const context = useContext(CommentsContext);
    // console.log('context', context);
    // const threads = context?.threads;
    // console.log('threads', threads)
    // const threadData = threads?.[props.id];
    // console.log('threadData', threadData);
    // console.log('props.point.id', props.id);

    // return 's';
    return (
        <CommentMarker
            point={props.point}
            isOpen={props.isOpen}
        />
    );

}

export default StatefulCommentMarker;
