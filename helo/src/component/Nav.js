import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {user} from './../redux/reducer'

function Nav(props) {
    console.log(props)
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
            <h4>{props.username}</h4>
        </div>
    )
}

// function mapStateToProps( state ) {
//     return {
//     username : state.username,
//     profile_picture: state.profile_picture  
//     } 
// }

export default connect(null, {user})(Nav);

// PART 1 - STEP 4