// threads: { id: { point, comments }}
import React, {createContext} from 'react';

export const CommentsContext = createContext({
    threads: {}
});
