import React, { useState , useEffect } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LoginForm } from "./loginStyle";
import logo from "../../Images/whiteLogo.png";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState();

  const onFinish = async (values) => {
    await console.log("Success:", values);
    await localStorage.setItem("loggedIn", true);
    setLoggedUser(localStorage.getItem("loggedIn"));
    await navigate("/home/Leads/AllLeads");
  };

  useEffect(() => {
    if (loggedUser) {
      navigate("/home/Leads/AllLeads");
    }
  }, [loggedUser]);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LoginForm>
      <img src={logo} alt="logo" className="logo" />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 1000,
        }}
        // initialValues={{
        //   remember: true,
        // }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
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
          <Button type="primary" htmlType="submit" className="login_btn">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginForm>
  );
};

export default Signin;
