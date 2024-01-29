import React, { useState } from "react";
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
  const [transactionType, set_transactionType] = useState();
  const [commissionbased, set_commissionBased] = useState();
  const number = /[0-9]/;
  const [priceNum, setPriceNum] = useState(false);
  const [priceValue, setPriceValue] = useState();
  const [error_message , setError_message] = useState()


  const validatePassword = () => {
   
   
    if (number.test(priceValue)) {
      setPriceNum(true);
    } else {
      setPriceNum(false);
    }

         if (
                     ( priceValue < 1 && priceValue.length > 0) &&
                      transactionType == "commission_based" &&
                      (commissionbased == "split_earning" ||
                        commissionbased == "percentage_of_sale")
                    ) {
                      // return Promise.reject("price can't be less than 1");
                      setError_message("price can't be less than 1")
                      setPriceNum(true);
                    }
                    else{
                      setPriceNum(false);
                    }
                    if (
                      priceValue > 100 &&
                      transactionType == "commission_based" &&
                      (commissionbased == "split_earning" ||
                        commissionbased == "percentage_of_sale")
                    ) {
                      // return Promise.reject("price can't be more than 100%");
                      setError_message("price can't be more than 100%")
                    }
   
};



  return (
    <>
      <Form
        form={form}
        onSuccess={onSuccess}
        // data={data}
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
                  message: "Please enter price",
                },
                // () => ({
                //   validator(_, value) {
                //     set_transactionType(value);
                //     console.log(value, "commission_based____value ");
                //   },
                // }),
              ]}
              // onChange={(value)=>{console.log(value , "lllllllllllllllllllllllllvalue in select")}}
            >
              <Select
              onChange={(value)=>{set_transactionType(value)}}
              >
                <Select.Option value="commission_based">
                  commission based
                </Select.Option>
                <Select.Option value="immediate">immediate</Select.Option>
              </Select>
            </Form.Item>

            {transactionType !== "immediate" && (
              <div style={{ display: "flex" }}>
                <Form.Item
                  style={{ width: "48%", marginRight: "20px" }}
                  label="commission based"
                  name="commission_based"
                  // rules={[
                  //   {
                  //     required: true,
                  //   },
                  // ]}

                  rules={[
                    {
                      required: true,
                      message: "Please enter price",
                    },
                    // () => ({
                    //   validator(_, value) {
                    //     set_commissionBased(value);
                    //     console.log(value, "commission_based____value ");
                    //   },
                    // }),
                  ]}
                >
                  <Select
                    onChange={(value)=>{set_commissionBased(value)}}
                  >
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
            )}

            <Form.Item
              label="price"
              name="price_percentage"
              rules={[
              
                {
                  required: true,
                  message: "Please enter price",
                },
                {
                  validator: (_, value) => {
                    if (!value) {
                      return Promise.reject();
                    } else {
                      return Promise.resolve();
                    }
                  },
              
                },
                {
                  validator: (_, value) => {
                    if (
                      value < 1 &&
                      transactionType == "commission_based" &&
                      (commissionbased == "split_earning" ||
                        commissionbased == "percentage_of_sale")
                    )  {
                      return Promise.reject("price can't be less than 1");
                    } else {
                      return Promise.resolve();
                    }
                  },
              
                },
                {
                  validator: (_, value) => {
                    if (
                      value > 100 &&
                      transactionType == "commission_based" &&
                      (commissionbased == "split_earning" ||
                        commissionbased == "percentage_of_sale")
                    ) {
                      return Promise.reject("price can't be more than 100%");
                    } else {
                      return Promise.resolve();
                    }
                  },
              
                },
              
              ]}
              validateTrigger="onBlur"
            >
              <Input type="number"
              
          

              />
             
            </Form.Item>
           
            <p style={{color:priceNum ? "green" : "red"}}>{error_message}</p>
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
