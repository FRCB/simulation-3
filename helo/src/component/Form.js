import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateTitle, updateUsername, updateContent } from '../redux/reducer'
import { Link } from 'react-router-dom'

class Form extends Component {
    constructor(props) {
        super(props);

        this.addPost = this.addPost.bind(this)
    }

    addPost() {
        let { title, username, content } = this.props
        let body = { title, username, content }

        axios.post(`/api/posts`, body)
        .then((res) => {
            console.log(res.data)
        })
    }

    render() {
        return (
            <div>
                <p>Title</p>
                <input
                    type="text"
                    placeholder='Title'
                    onChange={(e) => this.props.updateTitle(e.target.value)} />
                <br />
                <p>Username</p>
                <input
                    type="text"
                    placeholder='Username'
                    onChange={(e) => this.props.updateUsername(e.target.value)} />
                <br />
                <p>Content</p>
                <input
                    type="text"
                    placeholder='Content'
                    onChange={(e) => this.props.updateTitle(e.target.value)} />
                <br />
                <hr />
                <Link to="/dashboard">
                <button
                        onClick={this.addPost}>
                        Complete
                </button>
                </Link>
                <br />
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.title,
        username: state.username,
        content: state.content
    }
}

export default connect(mapStateToProps, { updateTitle, updateUsername, updateContent })(Form)