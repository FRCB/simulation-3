import React from "react";
import { Switch, Route } from "react-router-dom";

import Auth from './component/Auth';
import Dashboard from './component/Dashboard';
import Post from './component/Post';
import Form from './component/Form';

export default (
  <Switch>
    <Route component={ Auth } path='/' exact />
    <Route component={ Dashboard } path='/dashboard' />
    <Route component={ Post } path='/post/:id' />
    <Route component={ Form } path='/new' />
  </Switch>
)