import React from "react";
import { Button, Checkbox, Form, Input, Divider, Upload, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { SignUpForm, SignUpContainer } from "./loginStyle";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register_user } from "../../Redux/Slices/AuthSlice/registrationSlice";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const prefixSelector = (
    <Form.Item name="country_code" noStyle
    rules={[
      {
        required: true,
        message: "Please select country code!",
      },
    ]}
    >
      <Select
        style={{
          width: 70,
        }}
      >
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );

  const onFinish = async (values) => {
    await console.log("Success:", values);
    await dispatch(register_user(values));
    //await localStorage.setItem("loggedIn", true);

    //await navigate("/home/Leads/AllLeads");
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

          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            style={{ width: "400px", margin: "0px 0px  10px " }}
            // label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

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
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <div style={{ display: "flex" }}>
            <Form.Item
              style={{ width: "200px", margin: "0px 0px  10px " }}
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              style={{ width: "200px", margin: "0px 0px 0px 10px " }}
              name="password_confirmation"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
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
            <span style={{ color: "blue", fontWeight: "600" }}> Sign in</span>
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
