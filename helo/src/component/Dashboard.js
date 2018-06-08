import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: '',
            posts: []
        }

    }

    getAllPosts() {
        axios.get('/api/posts/').then((res) => {
            this.setState({ posts: res.data })
        })
    }

    render() {
        let mappedPosts = this.state.posts.map((post, i) => {
            return (
                <div key={i}>
                    <Post
                        post = { post }
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
                />
                <button>Search</button>
                <button>Reset</button>
                <h4>My Posts</h4>
                <input 
                name='My Posts'
                type="checkbox"
                value='true'/>
                <br/>
                { mappedPosts }
            </div>
        )
    }
}