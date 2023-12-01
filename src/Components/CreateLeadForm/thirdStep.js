import React from "react";
import { Form, Input, Button } from "antd";

const ThirdStep = ({ data, onSuccess, current, steps, next, form , finalStep }) => {
  console.log(steps, "stepssteps");
  return (
    <>
      <Form
        form={form}
        onSuccess={onSuccess}
        data={data}
        autoComplete="off"
        layout="horizontal"
      >
        <Form.Item
          label="thirdrname"
          name="thirdrname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* {current < steps - 1 && (
        <Button type="primary" htmlType="submit" onClick={() => next()}>
          Next
        </Button>
      )} */}

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => finalStep()}
         // onClick={() => message.success("Processing complete!")}
        >
          Done
        </Button>
      </Form>
    </>
  );
};

export default ThirdStep;
