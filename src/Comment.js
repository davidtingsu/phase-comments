import React, { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { useFormik } from 'formik';

export function StatefulComment(props) {
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            comment: '',
        },
        onSubmit: values => {
            if (!values.comment) return;
            props.onSubmit(values);
            formik.resetForm();
        },
    });
    return (<Comment {...props} onChange={formik.handleChange} value={formik.values.comment} onSubmit={formik.handleSubmit} />)
}
const withResolvable = Component => React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className='flex justify-end' onClick={() => {
                if (props.onResolved){
                    props.onResolved();
                }
            }}>
                <span title="Resolve" className='active:opacity-30 hover:opacity-90'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </span>
            </div>
            <Component {...props} />
        </div>
    );
});

const withClickAway = Component =>(props) => {
    const ref = useRef(null);
    // https://flowbite.com/docs/forms/textarea/#comment-box
    useClickAway(ref, props.onClickOutside || function () { });
    return (<Component {...props} ref={ref} />);
};

export const ResolveableComment = withClickAway(withResolvable(StatefulComment));

function Comment(props) {

    return (
        <form onSubmit={props.onSubmit}>
            <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label for="comment" className="sr-only">Your comment</label>
                    <textarea onChange={props.onChange} value={props.value} id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Post comment
                    </button>
                </div>
            </div>
        </form>
    );
}

export function PublishedComment(props) {
    return (
        <article class="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
            <footer class="flex justify-between items-center mb-2">
                <div class="flex items-center">
                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                        <img
                            class="mr-2 w-6 h-6 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt={props.name} />{props.name}</p>
                </div>
            </footer>
            <p class="text-left text-xs text-gray-600 dark:text-gray-400">{new Date(props.timestamp).toLocaleString()}</p>
            <p class="text-left text-sm text-gray-500 dark:text-gray-400 ">{props.text}</p>
        </article>
    );
}
export default Comment;