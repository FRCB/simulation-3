import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { updateID, updateTitle, updateUsername, updateContent } from '../redux/reducer'

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleBtn: false,
            editTitle: '',
            editUsername: '',
            editContent: ''
        }
        this.editPost = this.editPost.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    toggleEdit() {
        console.log(this.toggleEdit)
        if (this.state.toggleBtn) {
            this.editPost(this.props.post.id, this.props.title, this.props.username, this.props.content)
        }
        this.setState({ toggleBtn: !this.state.toggleBtn })
    }

    editPost(id, title, username, content) {
        const body = {
            title: title,
            username: username,
            content: content
        }
        axios.put(`/api/posts/${id}`, body)
        .then(res => {
            console.log(res.data)
            this.setState({ posts: res.data })
        })
        .then(this.props.getAllPosts())
    }

render() {
    return (
            <div>
                <hr />
                {
                    this.state.toggleBtn
                        ?
                        <div>
                            <input
                            type="text"
                            onChange={(e) => this.props.updateTitle(e.target.value)} />
                            <input
                            type="text"
                            onChange={(e) => this.props.updateUsername(e.target.value)} />
                            <input
                            type="text"
                            onChange={(e) => this.props.updateContent(e.target.value)} /> 
                        </div>
                        :
                        <div>
                            <p>{this.props.post.title}</p>
                            <p>{this.props.post.username}</p>
                            <p>{this.props.post.content}</p>
                        </div>
                }
                <button
                onClick={() => this.props.deletePost(this.props.post.id)}>
                Delete
                </button>
                <button
                onClick={() => this.toggleEdit()}>
                {this.state.toggleBtn ? "Save" : "Edit"}
                </button>
            </div >
        );
    }
}
    
function mapStateToProps(state) {
    return {
        id: state.id,
        title: state.title,
        username: state.username,
        content: state.content
    }
}

export default connect(mapStateToProps, { updateID, updateTitle, updateUsername, updateContent })(Post)


