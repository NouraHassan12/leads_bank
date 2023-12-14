import React, { useState, useCallback } from "react";
import { Button, message, Steps, theme, Form } from "antd";
import FirstStep from "../../Components/CreateLeadForm/firstStep";
import SecondStep from "../../Components/CreateLeadForm/secondStep";
import ThirdStep from "../../Components/CreateLeadForm/thirdStep";

const CreateLead = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [form] = Form.useForm();
  //   const next = () => {
  //     setCurrent(current + 1);
  //   };

  const next = useCallback(
    (data) => {
      form
        .validateFields([
          // "custome_type",
          // "company_name",
          // "Company_business_model",
          // "first_name",
          // "last_name",
          // "phone",
          // "mobile",
          // "email",
          // "Way_to_contact",
          // "prefered_language",
          // "house_owner",
          // "time_to_contact",
          // "citizen_ships_status",
          // "Biliding_type",
          // "is_decision_maker_present",
          // "is_HOA",
          // "service_type",
          // "manual_address",
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
        // "country",
        // "state",
        // "street_address",
        // "zip_code",
        // "rate",
        // "date",
        // "time_to_contact",
        // "lead_source",
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
        "custome_type",
        "company_name",
        "Company_business_model",
        "first_name",
        "last_name",
        "phone",
        "mobile",
        "email",
        "Way_to_contact",
        "prefered_language",
        "house_owner",
        "time_to_contact",
        "citizen_ships_status",
        "Biliding_type",
        "is_decision_maker_present",
        "is_HOA",
        "service_type",
        "manual_address",
        "country",
        "state",
        "street_address",
        "zip_code",
        "rate",
        "date",
        "time_to_contact",
        "lead_source",
        "transaction_type",
        "price",
        "description",
      ])
      .then((values) => {
        console.log(values, "valuesvalues");
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
