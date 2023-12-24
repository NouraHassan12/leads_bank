import React, { useState, useCallback } from "react";
import { Button, message, Steps, theme, Form } from "antd";
import FirstStep from "../../Components/CreateLeadForm/firstStep";
import SecondStep from "../../Components/CreateLeadForm/secondStep";
import ThirdStep from "../../Components/CreateLeadForm/thirdStep";
import { useDispatch, useSelector } from "react-redux";
import { create_lead_bank } from "../../Redux/Slices/BankLeadSlice/BankLeadSlice";

const CreateLead = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [time_to_contact, set_time_to_contact] = useState();
  const [last_time_you_communicated, set_last_time_you_communicated] =
    useState();
  //   const next = () => {
  //     setCurrent(current + 1);
  //   };

  const next = useCallback(
    (data) => {
      form
        .validateFields([
          "customer_type",
          "company_name",
          "Company_business_model",
          "first_name",
          "last_name",
          "phone",
          "mobile",
          "email",
          "way_to_contact",
          "preferred_language",
          "house_ownership",
          "time_to_contact",
          "citizenship_status",
          "building_type",
          "is_decision_maker_present",
          "is_hoa",
          "is_active",
          "service_type",
          "is_alter_address",
        ])
        .then((values) => {
          console.log(values, "valuesvalues");

          setCurrent(current + 1);
          setData(data);
          console.log(data, "___data");
        })
        .catch((errorInfo) => {
          console.log("errorInfo from submit form ...", errorInfo);
        });
    }
    // [step]
  );

  const sceNext = () => {
    console.log("fghjkljhgfghjkljhgf");
    form
      .validateFields([
        "country_id",
        "state_id",
        "location",
        "street",
        "street_address",
        "zip_code",
        "rate",
        "last_time_you_communicated",
        "source",
      ])
      .then((values) => {
        console.log(values, "valuesvalues");
        setCurrent(current + 1);
        // setData(data);
      })
      .catch((errorInfo) => {
        console.log("errorInfo from submit form ...", errorInfo);
      });
  };

  const finalStep = () => {
    console.log("final step");
    form
      .validateFields([
        "customer_type",
        "company_name",
        "Company_business_model",
        "first_name",
        "last_name",
        "phone",
        "mobile",
        "email",
        "way_to_contact",
        "preferred_language",
        "house_ownership",
        "time_to_contact",
        "citizenship_status",
        "building_type",
        "is_decision_maker_present",
        "is_hoa",
        "is_active",
        "service_type",
        "is_alter_address",
        "country_id",
        "state_id",
        "location",
        "street",
        "street_address",
        "zip_code",
        "rate",
        "last_time_you_communicated",
        "date",
        "time_to_contact",
        "source",
        "transaction_type",
        "price_percentage",
        "description",
      ])
      .then((values) => {
        console.log(values, "valuesvalues");
        console.log(values.time_to_contact, "___time_to_contact");
        dispatch(create_lead_bank({ ...values, time_to_contact , last_time_you_communicated }));
        // setCurrent(current + 1);
        // setData(data);
      })
      .catch((errorInfo) => {
        console.log("errorInfo from submit form ...", errorInfo);
      });
  };

  //   const prev = () => {
  //     setCurrent(current - 1);
  //   };

  const prev = useCallback(
    (data) => {
      console.log("previousssssssssssssss");
      setData(data);
      setCurrent(current - 1);
    }
    // [step]
  );

  const handleSubmit = useCallback((data) => {
    setData(data);
    console.log("ubmiteddddddddddddddddddddddddddddd Data", data);
  }, []);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onFinish = async (values) => {
    console.log(values, "values in create lead");
  };

  const allSteps = 3;

  const steps = [
    {
      title: "Basic Iformation",
      content: (
        <FirstStep
          set_time_to_contact={set_time_to_contact}
          data={data}
          onSuccess={next}
          current={current}
          steps={allSteps}
          next={next}
          form={form}
        />
      ),
    },
    {
      title: "Imformation Address",
      content: (
        <SecondStep
          set_last_time_you_communicated={set_last_time_you_communicated}
          data={data}
          onSuccess={next}
          current={current}
          steps={allSteps}
          next={next}
          previous={prev}
          form={form}
          sceNext={sceNext}
          //   onSuccess={handleSubmit}  onBack={prev}
        />
      ),
    },
    {
      title: "Description Information",
      content: (
        <ThirdStep
          finalStep={finalStep}
          data={data}
          onSuccess={next}
          current={current}
          steps={allSteps}
          next={next}
          previous={prev}
          form={form}
        />
      ),
    },
  ];

  console.log(steps, "steps in create");
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    width: "80%",
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 40,
    background: "white",
    borderRadius: "10px",
  };
  return (
    <>
      <div style={{ width: "100%", display: "flex", background: "#fbfbfb" }}>
        <Steps
          current={current}
          items={items}
          direction="vertical"
          style={{
            width: "20%",
            maxHeight: "235px",
            marginLeft: "40px",
            marginTop: "40px",
            // background: "aliceblue",
            padding: "16px",
            borderRadius: "11px",
          }}
        />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        ></div>
      </div>

      {current > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "320px",
          }}
        >
          {/* <Button
            // style={{width:"35%" , backgroundColor:"#2d3282"}}
            htmlType="submit"
            style={{
              width: "28%",
              backgroundColor: "#2d3282",
              color: "white",
              margin: "20px 0px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button> */}
        </div>
      )}
      {/* {current < steps.length - 1 && (
        <Button type="primary" htmlType="submit" onClick={() => next()}>
          Next
        </Button>
      )} */}
      {/* {current === steps.length - 1 && (
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => message.success("Processing complete!")}
        >
          Done
        </Button>
      )} */}
    </>
  );
};

export default CreateLead;
