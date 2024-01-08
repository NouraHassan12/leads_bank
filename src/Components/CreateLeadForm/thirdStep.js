import React from "react";
import { Form, Input, Button, Select, Col, Row } from "antd";

const ThirdStep = ({
  data,
  onSuccess,
  current,
  steps,
  next,
  form,
  finalStep,
  previous,
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
        <Row>
          <Col span={18} offset={2}>
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
              name="price_percentage"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <div style={{ display: "flex" }}>
              <Form.Item
                style={{ width: "48%", marginRight: "20px" }}
                label="commission based"
                name="commission_based"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select>
                  <Select.Option value="flat_rate">flat rate</Select.Option>
                  <Select.Option value="split_earning">
                    split earning
                  </Select.Option>
                  <Select.Option value="percentage_of_sale">
                    percentage of sale
                  </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item
                style={{ width: "48%", marginLeft: "20px" }}
                label="commission type"
                name="commission_type"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select>
                  <Select.Option value="shared">shared</Select.Option>
                  <Select.Option value="exclusive">exclusive</Select.Option>
                </Select>
              </Form.Item>
            </div>
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

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                style={{ width: "35%", backgroundColor: "#2d3282" }}
                type="primary"
                htmlType="submit"
                onClick={() => previous()}
              >
                Previous
              </Button>

              <Button
                style={{ width: "35%", backgroundColor: "#2d3282" }}
                type="primary"
                htmlType="submit"
                onClick={() => finalStep()}
                // onClick={() => message.success("Processing complete!")}
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default ThirdStep;
