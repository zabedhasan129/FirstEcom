import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useParams } from 'react-router';



    let param= useParams()

const Changepass = () => {

  
  const onFinish = async (values) => {
    console.log('Success:', values);
    console.log(param)
    let data = await axios.post("http://localhost:8000/api/v1/auth/changepass", {

      token: param.email,
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