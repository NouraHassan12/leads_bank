import React, { useState } from "react";
import { Form, Input, Button, Rate, DatePicker, Select } from "antd";

const SecondStep = ({
  data,
  onSuccess,
  current,
  steps,
  next,
  form,
  setCurrent,
  sceNext,
  previous
}) => {
  const [value, setValue] = useState();
  console.log(steps, "stepssteps");

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
        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", marginRight: "20px" }}
            label="country"
            name="country"
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
            label="state"
            name="state"
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
            label="street address"
            name="street_address"
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
            label="zip code"
            name="zip_code"
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
            // style={{ width: "48%", marginLeft: "20px" }}
            label="add your rating and review"
            name="rate"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Rate onChange={setValue} value={value} />
          </Form.Item>
        </div>
        <div style={{ display: "flex" }}>
          <h3>last time you communicated</h3>
        </div>

        <div style={{ display: "flex", width: "100%" }}>
          <Form.Item
            style={{
              width: "48%",
              marginRight: "20px",
              width: "50%",
              display: "flex",
            }}
            label="date"
            name="date"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker style={{ width: "350%" }} />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="time to contact"
            name="time_to_contact"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="demo">5:00 pm </Select.Option>
              <Select.Option value="demo2">3:00 pm</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          label="Lead source"
          name="lead_source"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="demo">manual</Select.Option>
            <Select.Option value="demo2">call center</Select.Option>
          </Select>
        </Form.Item>

        {/* {current < steps - 1 && ( */}
        <div style={{display:"flex" , justifyContent:"space-around"}}>
        <Button
          style={{ width: "35%", backgroundColor: "#2d3282" }}
          type="primary"
          htmlType="submit"
          onClick={() => sceNext()}
        >
          Next
        </Button>

        <Button
          style={{ width: "35%", backgroundColor: "#2d3282" }}
          type="primary"
          htmlType="submit"
          onClick={() => previous()}
        >
         Previous
        </Button>
        </div>
       
        {/* )} */}
      </Form>
    </>
  );
};

export default SecondStep;
