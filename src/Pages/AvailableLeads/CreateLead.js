import React, { useState, useCallback } from "react";
import { Button, message, Steps, theme, Form } from "antd";
import FirstStep from "../../Components/CreateLeadForm/firstStep";
import SecondStep from "../../Components/CreateLeadForm/secondStep";
import ThirdStep from "../../Components/CreateLeadForm/thirdStep";
import { useDispatch, useSelector } from "react-redux";
import { create_lead_bank } from "../../Redux/Slices/BankLeadSlice/BankLeadSlice";

const CreateLead = () => {
  const serviceTypes = useSelector((state) => state.serviceTypes);
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState({});
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [phone, set_phone] = useState();
  const [mobile, set_mobile] = useState();
  const [time_to_contact, set_time_to_contact] = useState();
  const [last_time_you_communicated, set_last_time_you_communicated] =
    useState();
  const [country_id, set_country_id] = useState();
  const [city_id, set_city_id] = useState();
  const [addressSwitch, setAddressSwitch] = useState(false);
  const [coordinates, setCoordinates] = React.useState({
    lat: 38.5610895,
    lng: -82.577286,
  });
  const [address, setAddress] = React.useState("");
  const [full_address, setFullAddress] = React.useState("");
  const [zip_code, setPostalCode] = React.useState("");
  const [street, setStreetLoc] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [is_active, set_is_active] = useState(false);
  const [is_hoa, set_is_hoa] = useState(false);
  const [is_decision_maker_present, set_is_decision_maker_present] = useState(false);
  const [is_phone_receives_txt , set_is_phone_receives_txt] = useState(false);
  const [is_mobile_receives_txt , set_is_mobile_receives_txt] = useState(false);
  const [final_service_type , set_final_service_type] = useState()
  const service_type_result = [];
  const final_service_type_result = [];
  const ghgh= []
  const [service , set_service] = useState();
  let matches = [];
  function getMatch(a, b) {
    for (var i = 0; i < a.length; i++) {
      for (var e = 0; e < b.length; e++) {
        if (a[i] == b[e].title) matches.push(b[e]);
      }
    }
    console.log(matches, "matchesmatchesmatches");
   
  
    return matches;
  }

  // getMatch(value, serviceTypes?.serviceTypes?.data); // ["cat"]
  // console.log(
  //   getMatch(value, serviceTypes?.serviceTypes?.data)
  // );

  console.log(service_type_result , "service_type_result in create comp");


  function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    console.log(unique)
    return unique;

  
}

console.log(removeDuplicates(service_type_result) , "++++++++++++++++++++++++++++++++++++++")

removeDuplicates(service_type_result)


  // building_coordinates

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
           // "is_decision_maker_present",
           // "is_hoa",
          //  "is_active",
            "service_type",
           // "is_alter_address",
        ])
        .then((values) => {
          console.log(values, "valuesvalues");

          setCurrent(current + 1);
          // setData(data);
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
        // "country_id",
        // "state_id",
        // "location",
        // "street",
        // "street_address",
        // "zip_code",
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
        // "is_phone_receives_txt",
        "mobile",
        // "is_mobile_receives_txt",
        "email",
        "way_to_contact",
        "preferred_language",
        "house_ownership",
        "time_to_contact",
        "citizenship_status",
        "building_type",
        // "is_decision_maker_present",
        //  "is_hoa",
        // "is_active",
        "service_type",
        //  "is_alter_address",
        "country_id",
        "state_id",
        "location",
        "street",
        "street_address",
        "zip_code",
        "alter_city",
        "alter_zip_code",
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
        console.log(matches , "in create  ")
        getMatch(values.service_type
          , serviceTypes?.serviceTypes?.data);
         matches.forEach((i) =>  final_service_type_result.push(i.id));
      //   console.log(values.time_to_contact, "___time_to_contact");
      //   console.log(final_service_type , "___final_service_type");
      // const nnn =   values?.service_type?.map((item, index) => ( serviceTypes?.serviceTypes?.data[index]));
      // console.log(nnn , "::::::::::::::::::::::")
      // console.log(values?.service_type , "{]]][][]]")
      // console.log(values?.service_type?.map((item, index) => (serviceTypes?.serviceTypes?.data[index])).forEach((i) => ghgh.push(i.id)) , ".,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
      // values?.service_type?.map((item, index) => ( serviceTypes?.serviceTypes?.data[index])).forEach((i) => service_type_result.push(i.id));
        dispatch(
          create_lead_bank({
            ...values,
            service_type : final_service_type_result,
            phone: phone,
            mobile: mobile,
            time_to_contact,
            last_time_you_communicated,
            country_id: 231,
            state_id: city_id || street,
            building_coordinates: coordinates,
            zip_code: zip_code,
            street: street,
            location: full_address,
            is_active: is_active,
            is_hoa: is_hoa,
            is_decision_maker_present: is_decision_maker_present,
            is_phone_receives_txt:is_phone_receives_txt,
            is_mobile_receives_txt : is_mobile_receives_txt
          })
        );
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
      // setData(data);
      setCurrent(current - 1);
    }
    // [step]
  );

  const handleSubmit = useCallback((data) => {
    // setData(data);
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
        matches={matches}
        set_final_service_type={set_final_service_type}
        service_type_result={service_type_result}
        set_is_mobile_receives_txt={set_is_mobile_receives_txt}
        set_is_phone_receives_txt={set_is_phone_receives_txt}
          set_is_decision_maker_present={set_is_decision_maker_present}
          set_is_hoa={set_is_hoa}
          set_is_active={set_is_active}
          set_phone={set_phone}
          set_mobile={set_mobile}
          set_time_to_contact={set_time_to_contact}
          // data={data}
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
          address={address}
          setAddress={setAddress}
          full_address={full_address}
          setFullAddress={setFullAddress}
          zip_code={zip_code}
          setPostalCode={setPostalCode}
          street={street}
          setStreetLoc={setStreetLoc}
          country={country}
          setCountry={setCountry}
          state={state}
          setState={setState}
          coordinates={coordinates}
          setCoordinates={setCoordinates}
          set_last_time_you_communicated={set_last_time_you_communicated}
          set_country_id={set_country_id}
          set_city_id={set_city_id}
          city_id={city_id}
          setAddressSwitch={setAddressSwitch}
          addressSwitch={addressSwitch}
          country_id={country_id}
          // data={data}
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
          // data={data}
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
