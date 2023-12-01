import React from "react";
import { Form, Input, Button, Select, Switch } from "antd";

const FirstStep = ({ data, onSuccess, current, steps, next, form }) => {
  const { Option } = Select;
  console.log(steps, "stepssteps");

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <>
      <Form
        form={form}
        onSuccess={onSuccess}
        data={data}
        autoComplete="off"
        layout="vertical"
        style={{ margin: "50px" }}
      >
        <Form.Item
          label="Customer type"
          name="custome_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo2">Demo22</Select.Option>
          </Select>
        </Form.Item>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", marginRight: "20px" }}
            label="Company name"
            name="company_name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="Company business model"
            name="Company_business_model"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", marginRight: "20px" }}
            label="First name"
            name="first_name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="Last name"
            name="last_name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", marginRight: "20px" }}
            label="phone"
            name="phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="mobile"
            name="mobile"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
        </div>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", marginRight: "20px" }}
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
            style={{ width: "48%", marginLeft: "20px" }}
            label="Way to contact"
            name="Way_to_contact"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="phone">phone</Select.Option>
              <Select.Option value="email">email</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", marginRight: "20px" }}
            label="prefered language"
            name="prefered_language"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="english">english</Select.Option>
              <Select.Option value="spanish">spanish</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="house owner"
            name="house_owner"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="phone">us citizen</Select.Option>
              <Select.Option value="email">ex 2 </Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", marginRight: "20px" }}
            label="time to contact"
            name="time_to_contact"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="phone">5:00 pm</Select.Option>
              <Select.Option value="email">6:00 pm</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="citizen ships status"
            name="citizen_ships_status"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="phone">us citizen</Select.Option>
              <Select.Option value="email">ex 2 </Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          label="Biliding type"
          name="Biliding_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">single-family</Select.Option>
            <Select.Option value="demo2">residence</Select.Option>
          </Select>
        </Form.Item>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="is decision maker present?"
            name="is_decision_maker_present"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Switch defaultChecked onChange={onChange} />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="is HOA?"
            name="is_HOA"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Switch defaultChecked onChange={onChange} />
          </Form.Item>
        </div>

        <Form.Item
          label="Service type"
          name="service_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">battery</Select.Option>
            <Select.Option value="demo2">solar</Select.Option>
          </Select>
        </Form.Item>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="manual address"
            name="manual_address"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Switch defaultChecked onChange={onChange} />
          </Form.Item>
        </div>

        {current < steps - 1 && (
          <Button  style={{width:"70%" , backgroundColor:"#2d3282"}} type="primary" htmlType="submit" onClick={() => next()}>
            Next
          </Button>
        )}
      </Form>
    </>
  );
};

export default FirstStep;
