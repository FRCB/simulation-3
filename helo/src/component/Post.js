import React from 'react';

export default function Post(props) {

    return (
        <div>
            <p>{props.post.title}</p>
            <p>{props.post.content}</p>
            <button
            onClick={() => props.deletePost(props.post.id)}>
                Delete
            </button>
            <button>
                Update
            </button>
            <hr />
        </div>
    )
}