import React from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { API_URL, TOKEN } from "../const/Api";
const LoginP = () => {
    const onFinish = (values) => {
        axios.post(API_URL + 'auth/login',values).then(res => {
            localStorage.setItem(TOKEN,res.data.token)
            window.location.href = '/'
        }).catch(err => {
            message.error("email or password",err)
           
        })
      };
  return (
    <div>
         <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  )
}

export default LoginP