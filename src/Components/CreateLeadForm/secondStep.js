import React, { useState, useEffect } from "react";
import { Form, Input, Button, Rate, Select, DatePicker, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesAction } from "../../Redux/Slices/CountriesAndStatesSlice/CountriesAndStatesSlice";
import { getcitiesAction } from "../../Redux/Slices/CountriesAndStatesSlice/CitiesSlice";

const SecondStep = ({
  data,
  onSuccess,
  current,
  steps,
  next,
  form,
  setCurrent,
  sceNext,
  previous,
  set_last_time_you_communicated
}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  console.log(steps, "stepssteps");

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    set_last_time_you_communicated(dateString)
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  useEffect(() => {
    // console.log(ref , "_____________________ref")
    // console.log(ref.current?.innerText || "ref not set!");
    dispatch(getCountriesAction());
    const counrtyData = { id: 45 };
    dispatch(getcitiesAction(counrtyData));
  }, []);

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
          label="location"
          name="location"
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
            label="street"
            name="street"
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
            label="country"
            name="country_id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input  type="number" />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="state"
            name="state_id"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="number"  />
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

        <div style={{ display: "flex" }}>
          {/* <Form.Item
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
          </Form.Item> */}

          <Form.Item
            style={{
              width: "48%",
              // display:"flex"
              marginRight: "20px",
              // height: "40px",
              // marginTop: "25px",
            }}
            label="last time you communicated"
            name="last_time_you_communicated"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              onChange={onChange}
              onOk={onOk}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="Lead source"
            name="source"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="manual">manual</Select.Option>
              <Select.Option value="call_center"> call center</Select.Option>
              <Select.Option value="apn"> apn</Select.Option>
            </Select>
          </Form.Item>
        </div>

        {/* {current < steps - 1 && ( */}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
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
