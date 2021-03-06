import React from 'react';
import { Link } from 'react-router-dom';


export default function Nav(props) {
    return(
        <div>
            <Link to='/dashboard'>
                <button>Home</button>
            </Link>
            <Link to='/new'>
                <button>New Post</button>
            </Link>
            <Link to='/'>
                <button>Logout</button>
            </Link>
        </div>
    )
}

// PART 1 - STEP 4