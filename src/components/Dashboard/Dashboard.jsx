import React, { Component, useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers } from './../../Misc/api'

function Dashboard(props) {

  const { auth } = props;
  const { authenticated } = auth;

  let [ users, modifyUsers ] = useState(getUsers()); 

  if (!authenticated) {
    return <Redirect to="/" />
  };

  return (
    <div style={{ padding: '50px 100px'}}>
      <List
        size="small"
        bordered
        dataSource={users}
        renderItem={item => <List.Item>{item.id}, {item.name}, {item.email}, {item.gender}, {item.age}</List.Item>}
      />
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));