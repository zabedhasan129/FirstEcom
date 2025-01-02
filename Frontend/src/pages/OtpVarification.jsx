import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useParams } from 'react-router';

const OtpVarification = () => {

    let param = useParams()
    console.log("redirect mail",param.email)


    const onFinish = async (values) => {
        console.log('Email otp:', values);
        let data = await axios.post("http://localhost:8000/api/v1/auth/otp", {
            
            email : param.email,
            otp: values.otp,

        })
        console.log("otp data",data)
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
                label="otp"
                name="otp"
                rules={[
                    {
                        required: true,
                        message: 'Please input your otp!',
                    },
                ]}
            >
                <Input />
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
    )
}

export default OtpVarification