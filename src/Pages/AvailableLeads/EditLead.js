import React, { useState, useCallback  , useEffect} from "react";
import { Button, message, Steps, theme, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { get_Lead_by_id_Action } from "../../Redux/Slices/BankLeadSlice/BankLeadSlice";
import FirstStep from "../../Components/CreateLeadForm/firstStep";
import SecondStep from "../../Components/CreateLeadForm/secondStep";
import ThirdStep from "../../Components/CreateLeadForm/thirdStep";
import { ContactSupportOutlined } from "@mui/icons-material";
import {edit_lead_bank} from "../../Redux/Slices/BankLeadSlice/BankLeadSlice"
import moment from "moment";
const EditLead = ({}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();
  const update_lead_bank = useSelector((state) => state.lead_bank);
  const [phone, set_phone] = useState();
  const [is_active, set_is_active] = useState(false);
  const [is_hoa, set_is_hoa] = useState(false);
  const [is_decision_maker_present, set_is_decision_maker_present] = useState(false);
  const [is_phone_receives_txt, set_is_phone_receives_txt] = useState(false);
  const [is_mobile_receives_txt, set_is_mobile_receives_txt] = useState(false);
  const [mobile, set_mobile] = useState();
  const [country_id, set_country_id] = useState();
  const [city_id, set_city_id] = useState();
  const [addressSwitch, setAddressSwitch] = useState(false);
  const [coordinates, setCoordinates] = React.useState({
    lat: 38.5610895,
    lng: -82.577286,
  });
  const [time_to_contact, set_time_to_contact] = useState();
  const [address, setAddress] = React.useState("");
  const [full_address, setFullAddress] = React.useState("");
  const [zip_code, setPostalCode] = React.useState("");
  const [street, setStreetLoc] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [state, setState] = React.useState("");
  const [last_time_you_communicated, set_last_time_you_communicated] =
    useState();
    const serviceTypes = useSelector((state) => state.serviceTypes);
    const service_type_result = [];
    const final_service_type_result = [];
    let matches = [];
    function getMatch(a, b) {
      for (var i = 0; i < a.length; i++) {
        for (var e = 0; e < b.length; e++) {
          if (a[i] == b[e].title) matches.push(b[e]);
        }
      }
    
     
    
      return matches;
    }


  useEffect(() => {
    const reqData = { id: params.id };
    dispatch(get_Lead_by_id_Action(reqData));
  }, [params]);


  const prev = useCallback(
    (data) => {
      console.log("previousssssssssssssss");
      // setData(data);
      setCurrent(current - 1);
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

  
  const finalStep = () => {
    console.log("final step");
    form.validateFields([
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
        getMatch(values.service_type
          , serviceTypes?.serviceTypes?.data);
         matches.forEach((i) =>  final_service_type_result.push(i.id));

        dispatch(
          edit_lead_bank({
            id:params.id,
            ...values,
             service_type : final_service_type_result,
            phone:  update_lead_bank?.lead_bank?.data?.phone || phone ,
            mobile: update_lead_bank?.lead_bank?.data?.mobile || mobile,
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


  useEffect(() => {
    form.setFieldsValue({
      customer_type: update_lead_bank?.lead_bank?.data?.customer_type,
      company_name: update_lead_bank?.lead_bank?.data?.company_name,
      company_business_model:
        update_lead_bank?.lead_bank?.data?.company_business_model,
      first_name: update_lead_bank?.lead_bank?.data?.first_name,
      last_name: update_lead_bank?.lead_bank?.data?.last_name,
      phone: update_lead_bank?.lead_bank?.data?.phone,
      mobile: update_lead_bank?.lead_bank?.data?.mobile,
      email: update_lead_bank?.lead_bank?.data?.email,
      way_to_contact: update_lead_bank?.lead_bank?.data?.way_to_contact,
      preferred_language: update_lead_bank?.lead_bank?.data?.preferred_language,
      building_type: update_lead_bank?.lead_bank?.data?.building_type,
      house_ownership: update_lead_bank?.lead_bank?.data?.house_ownership,
      citizenship_status: update_lead_bank?.lead_bank?.data?.citizenship_status,
      time_to_contact: moment(
        update_lead_bank?.lead_bank?.data?.time_to_contact
      ),
      service_types: update_lead_bank?.lead_bank?.data?.service_types,
      is_decision_maker_present:
        update_lead_bank?.lead_bank?.data?.is_decision_maker_present,
      is_active: update_lead_bank?.lead_bank?.data?.is_active,
      rate : update_lead_bank?.lead_bank?.data?.rate,
      source : update_lead_bank?.lead_bank?.data?.source,
      transaction_type :  update_lead_bank?.lead_bank?.data?.transaction_type ,
      price_percentage : update_lead_bank?.lead_bank?.data?.price_percentage ,
      commission_based: update_lead_bank?.lead_bank?.data?.commission_based ,
      commission_type : update_lead_bank?.lead_bank?.data?.commission_type,
      description : update_lead_bank?.lead_bank?.data?.description
      

 


 

 
     
    });

  });

  const allSteps = 3;

  const steps = [
    {
      title: "Basic Iformation",
      content: (
        <FirstStep
        matches={matches}
        service_type_result={service_type_result}
          set_is_mobile_receives_txt={set_is_mobile_receives_txt}
          set_is_phone_receives_txt={set_is_phone_receives_txt}
          set_is_decision_maker_present={set_is_decision_maker_present}
          set_is_hoa={set_is_hoa}
          set_is_active={set_is_active}
          edit_is_active={update_lead_bank?.lead_bank?.data?.is_active}
          edit_is_hoa = {update_lead_bank?.lead_bank?.data?.is_hoa}
          edit_is_decision_maker_present = {update_lead_bank?.lead_bank?.data?.is_decision_maker_present}
          edit_is_phone_receives_txt = {update_lead_bank?.lead_bank?.data?.is_phone_receives_txt}
          edit_is_mobile_receives_txt = {update_lead_bank?.lead_bank?.data?.is_mobile_receives_txt}
          set_phone={set_phone}
          set_mobile={set_mobile}
            set_time_to_contact={set_time_to_contact}
            onSuccess={next}
             current={current}
            steps={allSteps}
            next={next}
          phoneValue={update_lead_bank?.lead_bank?.data?.phone}
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
          onSuccess={next}
          current={current}
          steps={allSteps}
          next={next}
          previous={prev}
          form={form}
          sceNext={sceNext}
         
        />
      ),
    },
    {
      title: "Description Information",
      content: (
        <ThirdStep
          finalStep={finalStep}
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
  return update_lead_bank?.isLodaing ? (
    <p>loading.......</p>
  ) : (
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
    </>
  );
};
export default EditLead;
