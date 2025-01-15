import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useParams } from 'react-router';





const Changepass = () => {

  let param = useParams()

  const onFinish = async (values) => {
    console.log('New Password:', values);
    console.log(param.token)
    let data = await axios.post("http://localhost:8000/api/v1/auth/changepass", {

      token: param.token,
      password: values.password


    });



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
        label="New Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your New password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>



      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Changepass