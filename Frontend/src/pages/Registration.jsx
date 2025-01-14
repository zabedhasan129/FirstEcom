import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { Link, useNavigate } from 'react-router';


const Registration = () => {

  let navigate = useNavigate()

  const onFinish = async (values) => {
    console.log('Success:', values);
    let data = await axios.post("http://localhost:8000/api/v1/auth/registration", {
      username: values.username,
      email: values.email,
      password: values.password,

    }, {
      headers: {
        Authorization: "kdslfhlkfghfh",
      },
    });
    // navigate(`/otpvarification/${values.email}`)
    navigate("/gotogmail"),

    console.log(data)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
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
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
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
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
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
        <br />
        <Link to="/forgetpassword">Forgetpassword</Link>
      </Form.Item>
    </Form>
  )
}

export default Registration