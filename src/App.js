import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';

import 'antd/dist/antd.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
};

export default connect(mapStateToProps)(App);
