import React from "react";
import { Button, Checkbox, Form, Input, Divider } from "antd";
import { SignUpForm, SignUpContainer } from "./loginStyle";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await console.log("Success:", values);
    await localStorage.setItem("loggedIn", true);

    await navigate("/home/Leads/AllLeads");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <SignUpContainer>
      <SignUpForm>
        <img src={logo} alt="logo" className="logo" />
        <div className="welcomDiv">
          <h2>Sign Up</h2>
        </div>
        <Form
          name="basic"
          // labelCol={{
          //   span: 8,
          // }}
          // wrapperCol={{
          //   span: 16,
          // }}
          // style={{
          //   maxWidth: 1000,
          // }}
          // initialValues={{
          //   remember: true,
          // }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <div style={{ display: "flex" }}>
            <Form.Item
              style={{ width: "200px", margin: "0px 0px  10px " }}
              label="First name"
              name="first_name"
              rules={[
                {
                  required: true,
                  message: "Please input your first name!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              style={{ width: "200px", margin: "0px 0px 0px 10px " }}
              label="last name"
              name="last_name"
              rules={[
                {
                  required: true,
                  message: "Please input your last name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your first name!",
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <Form.Item
              style={{ width: "200px", margin: "0px 0px  10px " }}
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
              style={{ width: "200px", margin: "0px 0px 0px 10px " }}
              label="confirm password"
              name="confirm_password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login_btn"
              style={{ marginBottom: "5px" }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <div className="registerNow">
        <p style={{ textAlign: "center" }}>
        Already have an account?{" "}
          <span style={{ color: "blue", fontWeight: "600" }}>  Sign in</span>
         
        </p>
      </div>
      </SignUpForm>

      <Divider />
      <div className="privacyAndPolicy">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
