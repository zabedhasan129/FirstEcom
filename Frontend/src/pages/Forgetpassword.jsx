import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"

const Forgetpassword = () => {

    const onFinish = async (values) => {
        console.log('Success:', values);
        let data = await axios.post("http://localhost:8000/api/v1/auth/forgetpassword", {

            email: values.email,


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



            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Forgetpassword