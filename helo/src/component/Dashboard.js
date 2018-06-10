import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            searchInput:''
        }

        this.getAllPosts = this.getAllPosts.bind(this)
        this.deletePost = this.deletePost.bind(this)
        this.searchBtn = this.searchBtn.bind(this)
    }

    componentDidMount() {
        this.getAllPosts();
    }

    getAllPosts() {
        axios.get('/api/posts/')
        .then((res) => {this.setState({ posts: res.data })
        })
    }

    searchBtn(username) {
        axios.get(`/api/posts/username?username=${username}`)
        .then((res) => {this.setState({ posts: res.data })
        })
    }

    deletePost(id) {
        axios.delete(`/api/posts/${id}`)
        .then(this.getAllPosts())
    }

    updateSearchInput(val) {
        this.setState({searchInput: val});
    }

    render() {    

        let mappedPosts = this.state.posts.map((post, i) => {
            return (
                <div key={i}>
                    <Post
                        post = { post }
                        deletePost = {this.deletePost}
                        toggleBtn = {this.toggleBtn}
                        titleEdit = {this.titleEdit} 
                        usernameEdit = {this.usernameEdit} 
                        contentEdit = {this.contentEdit}
                        getAllPosts = {this.getAllPosts}
                    />
                </div>
            )
        })

        return (
            <div>
                <input 
                type="text"
                value={this.state.searchInput}
                placeholder='Search'
                onChange={(e) => this.updateSearchInput(e.target.value)}
                />
                <button
                onClick={() => this.searchBtn(this.state.searchInput)}>Search</button>
                <button>Reset</button>
                <h4>My Posts</h4>
                    <div>
                    { mappedPosts }
                    </div>

                <Link to='/new' >
                <hr/>
                    <button>
                        Post
                    </button>
                </ Link>
            </div>
        )
    }
    }
