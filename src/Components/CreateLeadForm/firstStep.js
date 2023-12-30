import React, { useRef, useEffect } from "react";
import { Form, Input, Button, Select, Switch, Space, DatePicker } from "antd";
import { getServiceTypesAction } from "../../Redux/Slices/ServiceType/ServiceTypeSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {AddLeadContainer} from "./CreateLeadStyle"
 import NumberFormat from "react-number-format";
//import * as NumberFormat from 'react-number-format'


import {

  TextField,
 
} from "@mui/material";

const FirstStep = ({ data, onSuccess, current, steps, next, form , set_time_to_contact ,  set_phone, set_is_active,
  set_mobile  , set_is_hoa , set_is_decision_maker_present , set_is_mobile_receives_txt , set_is_phone_receives_txt}) => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const ref = useRef();
  const serviceTypes = useSelector((state) => state.serviceTypes);
  const options = serviceTypes?.serviceTypes?.data;
  console.log(steps, "stepssteps");

  console.log(
    serviceTypes?.serviceTypes?.data,
    "serviceTypesserviceTypesserviceTypes"
  );

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleChange = (value) => {
    console.log(`selected ${value} ***`);

    console.log(ref, "_____________________ref");
    console.log(ref.current?.innerText || "ref not set!");
  };

  var now = new Date();
  // var dateString = moment(now).format('YYYY-MM-DD');

  // var dateStringWithTime = moment(now).format('YYYY-MM-DD HH:mm:ss');

  // console.log(dateStringWithTime , "dateStringWithTime")

  useEffect(() => {
    // console.log(ref , "_____________________ref")
    // console.log(ref.current?.innerText || "ref not set!");
    dispatch(getServiceTypesAction());
  }, []);

  const ontimeChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    set_time_to_contact(dateString)
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
    console.log(value.toLocaleString(), ">>>>>>>");

    console.log(
      moment(value).format("YYYY-MM-DD; HH:mm A").replace(",", ""),
      "_____ nsjnksnksn"
    );
  };

  // const options = [
  //   {
  //     label: "China",
  //     value: "China",
  //     emoji: "🇨🇳",
  //     desc: "China (中国)",
  //   },
  //   {
  //     label: "USA",
  //     value:"USA",
  //     emoji: "🇺🇸",
  //     desc: "USA (美国)",
  //   },
  //   {
  //     label: "Japan",
  //     value: "Japan",
  //     emoji: "🇯🇵",
  //     desc: "Japan (日本)",
  //   },
  //   {
  //     label: "Korea",
  //     value: "Korea",
  //     emoji: "🇰🇷",
  //     desc: "Korea (韩国)",
  //   },
  // ];

  return (
    <AddLeadContainer>
    
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
          name="customer_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="Residential">Residential</Select.Option>
            <Select.Option value="commercial">commercial</Select.Option>
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
            name="phone"
            rules={[
              {
                required: true,
              },
            ]}
          >
            {/* <Input type="number" /> */}
            <NumberFormat
              format="+1 (###) ###-####"
              fullWidth
              allowEmptyFormatting
              customInput={TextField}
              mask="_"
              label="Phone"
              // value={data.phone}
              // onChange={(e) => setData({ ...data, phone: e.target.value })}
              onValueChange={(values) => {
               console.log(values?.floatValue , "_______phone num value")
               set_phone(values?.floatValue)
              }}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="is phone receives txt"
            name="is_phone_receives_txt"

          >
            <Switch   onChange={(checked)=>{
            
            set_is_phone_receives_txt(checked)}} />
          </Form.Item>

          {/*  */}
        </div>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%" }}
            name="mobile"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <NumberFormat
              format="+1 (###) ###-####"
              fullWidth
              allowEmptyFormatting
              customInput={TextField}
              mask="_"
              label="mobile"
              // value={data.phone}
              // onChange={(e) => setData({ ...data, phone: e.target.value })}
              onValueChange={(values) => {
               console.log(values?.floatValue , "_______phone num value")
               set_mobile(values?.floatValue)
              }}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="is mobile receives txt"
            name="is_mobile_receives_txt"

          >
            <Switch  onChange={(checked)=>{
            
            set_is_mobile_receives_txt(checked)}} />
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
            name="way_to_contact"
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
            name="preferred_language"
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
            label="house ownership"
            name="house_ownership"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="owner">owner</Select.Option>
              <Select.Option value="rental">rental </Select.Option>
              <Select.Option value="Owner With Mortgage">
                Owner With Mortgage{" "}
              </Select.Option>
            </Select>
          </Form.Item>
        </div>

        <div style={{ display: "flex" }}>
          {/* <Form.Item
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
          </Form.Item> */}

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
            <DatePicker
              style={{ width: "100%" }}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              onChange={ontimeChange}
              onOk={onOk}
            />
          </Form.Item>

          <Form.Item
            style={{ width: "48%", marginLeft: "20px" }}
            label="citizen ships status"
            name="citizenship_status"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Select.Option value="US_CITIZEN">US CITIZEN</Select.Option>
              <Select.Option value="LAWFUL_PERMANENT_RESIDENT_ALIEN">
                LAWFUL PERMANENT RESIDENT ALIEN{" "}
              </Select.Option>
              <Select.Option value="other">other</Select.Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item
          label="Biliding type"
          name="building_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select>
            <Select.Option value="single_family">single family</Select.Option>
            <Select.Option value="residence">residence</Select.Option>
            <Select.Option value="trailer">trailer</Select.Option>
            <Select.Option value="town_home">town_home</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Service type"
          name="service_type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            style={{
              width: "100%",
            }}
            placeholder="select Service type"
            // defaultValue={["china"]}

            optionLabelProp="title"
            // options={options}
            // optionRender={(option) => (

            //   <Space ref={ref}  value={option} >
            //     <span role="img"   aria-label={option.title}>
            //       {option.title}
            //     </span>
            //     {option.id}
            //   </Space>

            // )}
            onChange={handleChange}
            options={serviceTypes?.serviceTypes?.data?.map((item) => ({
              value: item.title,
              label: item.title,
            }))}
          />
        </Form.Item>

        <div style={{ display: "flex" }}>
          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="is decision maker present?"
            name="is_decision_maker_present"
          >
            <Switch  onChange={(checked)=>{
             
             set_is_decision_maker_present(checked)}} />

            
          </Form.Item>

          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="is HOA?"
            name="is_hoa"
          >
            <Switch  onChange={(checked)=>{
             
              set_is_hoa(checked)}} />
            
          </Form.Item>
        </div>

        <div style={{ display: "flex" }}>
         

          <Form.Item
            style={{ width: "48%", display: "flex" }}
            label="is active?"
            name="is_active"

          >
            <Switch  onChange={(checked)=>{
            
              set_is_active(checked)}} />
          </Form.Item>
        </div>

        {current < steps - 1 && (
          <Button
            style={{ width: "70%", backgroundColor: "#2d3282" }}
            type="primary"
            htmlType="submit"
            onClick={() => next()}
          >
            Next
          </Button>
        )}
      </Form>
    </AddLeadContainer>
  );
};

export default FirstStep;
