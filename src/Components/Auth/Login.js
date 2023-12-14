import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input  , Divider} from "antd";
import { LoginForm  , LoginContainer} from "./loginStyle";
import logo from "../../Images/whiteLogo.png";
import { useNavigate } from "react-router-dom";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

const Signin = () => {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState();

  const onFinish = async (values) => {
    await console.log("Success:", values);
    await localStorage.setItem("loggedIn", true);
    setLoggedUser(localStorage.getItem("loggedIn"));

    await navigate("/home/Leads/AllLeads");
    window.location.reload();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (loggedUser) {
      navigate("/home/Leads/AllLeads");
    }
  }, [loggedUser]);

  return (
    <LoginContainer>
       <LoginForm>
      <img src={logo} alt="logo" className="logo" />
      <div className="welcomDiv">
        <h1>User Log In</h1>
        <p>Welcome back! Plese enter your details.</p>
      </div>
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
      <div className="registerNow">
        <p style={{ textAlign: "center" }}>
          Dont have an account{" "}
          <span style={{ color: "blue", fontWeight: "600" }}>Register Now</span>
        </p>
      </div>

      <div style={{margin:"30px 0px"}}>
        <div className="suuport_mail">
          <MailOutlined />
          <p>Support@BYLDerBank.com</p>
        </div>

        <div className="suuport_mail">
          <PhoneOutlined />
          <p>1-800 BYLDers (295-3377)</p>
        </div>
      </div>

     
    </LoginForm>

    <Divider />
    <div className="privacyAndPolicy">
      <p>Privacy Policy</p>
      <p>Terms and Conditions</p>
    </div>
    </LoginContainer>
 
  );
};

export default Signin;
