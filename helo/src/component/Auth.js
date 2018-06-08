import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.loginUser = this.loginUser.bind(this)
        this.registerUser =this.registerUser.bind(this)

    }

    updateUsername(val) {
        this.setState({username: val});
    }

    updatePassword(val) {
        this.setState({password: val});
    }

    registerUser() {
        let { username, password } = this.state
        let body = { username, password }
        axios.post('http://localhost:3669/api/register', body)
        .then((res) => {
            console.log(res.data)
        })
        .then(() => {
            this.props.history.push('/dashboard') 
        })
    }

    loginUser() {
        let { username, password } = this.state
        let body = { username, password }
        
        axios.post('http://localhost:3669/api/login', body).then(user => {
            if(user.data.length > 0){
                this.props.history.push('/dashboard')
            }
        })
    }

    render() {

        <Nav 
        username={this.state.username}
        />

        return (
            <div>
                <input 
                value={this.state.username}
                placeholder='Username'
                onChange={(e) => this.updateUsername(e.target.value)}/>
                <input
                value={this.state.password}
                placeholder='Password'
                onChange={(e) => this.updatePassword(e.target.value)}
                />
                <br/>
                <button
                onClick={this.loginUser}>
                Login
                </button>
                <br/>
                <button
                onClick={this.registerUser}>
                Register
                </button>
            </div>
        )
    }
}

export default (Auth)
