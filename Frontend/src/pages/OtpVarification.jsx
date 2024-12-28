import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"

const OtpVarification = () => {
    const onFinish = (values) => {
        console.log('Success:', values);

        axios.post("http://localhost:8000/api/v1/auth/registration", {
            username: values.username,
            Email: values.Email,
            password: values.password,

        }, {
            headers: {
                Authorization: "kdslfhlkfghfh",
            },
        });

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
        </Form>
    )
}

export default OtpVarification