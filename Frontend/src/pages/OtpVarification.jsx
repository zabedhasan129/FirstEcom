import React, { useEffect } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate, useParams } from 'react-router';


const OtpVarification = () => {
    let navigate = useNavigate()
    let param = useParams()
    console.log("redirect mail", param)

    useEffect(() => {

        async function otpvarify() {
            let data = await axios.post("http://localhost:8000/api/v1/auth/otp", {

                email: param.email,
                otp: param.otp,

            })
            console.log(data)
            navigate("/login")
        }
        otpvarify()
    },[])
    // const onFinish = async (values) => {
    //     console.log('Email otp:', values);

    //     console.log("otp data", data)
    // };

    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (

        <h1>Varify your email.....please wait</h1>
        // <Form
        //     name="basic"
        //     labelCol={{
        //         span: 8,
        //     }}
        //     wrapperCol={{
        //         span: 16,
        //     }}
        //     style={{
        //         maxWidth: 600,
        //     }}
        //     initialValues={{
        //         remember: true,
        //     }}
        //     onFinish={onFinish}
        //     onFinishFailed={onFinishFailed}
        //     autoComplete="off"
        // >
        //     <Form.Item
        //         label="otp"
        //         name="otp"
        //         rules={[
        //             {
        //                 required: true,
        //                 message: 'Please input your otp!',
        //             },
        //         ]}
        //     >
        //         <Input />
        //     </Form.Item>

        //     <Form.Item
        //         wrapperCol={{
        //             offset: 8,
        //             span: 16,
        //         }}
        //     >
        //         <Button type="primary" htmlType="submit">
        //             Submit
        //         </Button>
        //     </Form.Item>
        // </Form>
    )
}

export default OtpVarification