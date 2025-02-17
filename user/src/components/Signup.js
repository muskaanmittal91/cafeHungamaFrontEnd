import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox,Row } from 'antd';
import {withContext} from '../Context';
import {message} from 'antd';
class Signup extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.signup(values).then(
            (data)=>{
                    this.props.history.push('/login');
                    message.success('You have been signup succesfully please login', 2);
            }
        )
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center">
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Row type="flex">
        <Form.Item>
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Enter your firstName' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="firstName"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message:'Enter your lastName' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="lastName"
            />,
          )}
        </Form.Item>
        </Row>
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please enter your username'}],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="userName"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
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
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" style={{float:'right'}} href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'100%'}}>
            Log in
          </Button>
          Or <a href="" >Register now!</a>
        </Form.Item>
      </Form>
      </Row>

    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Signup);

export default withContext(WrappedNormalLoginForm);