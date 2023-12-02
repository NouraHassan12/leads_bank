import React from "react";
import { Form, Input, Button, Select } from "antd";

const ThirdStep = ({
  data,
  onSuccess,
  current,
  steps,
  next,
  form,
  finalStep,
}) => {
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
        <Form.Item
          label="transaction type"
          name="transaction_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="commission_based">
              commission based
            </Select.Option>
            <Select.Option value="immediate">immediate</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="price"
          name="price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={8} />
        </Form.Item>

        <Button
          style={{ width: "70%", backgroundColor: "#2d3282" }}
          type="primary"
          htmlType="submit"
          onClick={() => finalStep()}
          // onClick={() => message.success("Processing complete!")}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default ThirdStep;
