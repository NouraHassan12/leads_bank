import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input  , Divider} from "antd";
import { LoginForm  , LoginContainer} from "./loginStyle";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {login_user} from "../../Redux/Slices/AuthSlice/LoginSlice"

const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loggedUser, setLoggedUser] = useState();
  const Authorized_user = useSelector((state) => state.auth_user);
  console.log(Authorized_user , "_______Authorized_user")

  const onFinish = async (values) => {
    await console.log("Success:", values);
    await dispatch(login_user(values));
  //  await navigate("/home/Leads/AllLeads");
  //   window.location.reload();
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
      <img src={logo} alt="logo" className="logo"  />
      <div className="welcomDiv">
        <h2>User Log In</h2>
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

        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="email"
          name="email"
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
          Sign In
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
