import React, { Fragment, useEffect } from "react";
import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import axios from "axios";

const Login = (props) => {
  const onFinish = async (values) => {
    console.log("Success:", values);
    const response = await axios.post("http://localhost:3000/login", values);
    console.log("token", response.data);
    if (response.status === 200) {
      props.setLogin(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <Card
        style={{
          padding: "auto",
          display: "flex",
          justifyContent: "center",
          width: 500,
        }}
      >
        <Typography>Login Form</Typography>
      </Card>
      <Card
        style={{
          padding: "auto",
          display: "flex",
          justifyContent: "center",
          width: 500,
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Fragment>
  );
};

export default Login;
