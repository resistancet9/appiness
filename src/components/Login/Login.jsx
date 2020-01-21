import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { signInUser } from './../../actions';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends Component {

  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.signInUser({ email: values.username, password: values.password }, this.props.history );
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {

    const { auth } = this.props;
    const { authenticated } = auth;

    console.log("+++ auth", authenticated, auth)
    if(authenticated) {
      return <Redirect to="/dashboard" />
    };

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');

    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    auth: state.auth
  }
}

export default Form.create({ name: 'horizontal_login' })(withRouter(connect(mapStateToProps, { signInUser })(Login)));