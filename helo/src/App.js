import React, { Component } from 'react';
import Nav from './component/Nav';
import route from './route';
import { withRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    const { pathname } = this.props.location

    return (
      <div className="App">
        {pathname === '/' ? null : <Nav/>}

        {route}
      </div>
    );
  }
}

export default withRouter(App);
