import React from 'react';

export default function Post(props) {

    return (
        <div>
            <p>{props.post.title}</p>
            <p>{props.post.content}</p>
            <button>
                Delete
            </button>
            <hr />
        </div>
    )
}