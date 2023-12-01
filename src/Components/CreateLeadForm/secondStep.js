import React , {useState} from "react";
import {  Form  , Input , Button , Rate} from "antd";

const SecondStep = ({data , onSuccess , current , steps , next , form , setCurrent , sceNext}) => {
    const [value , setValue] = useState()
console.log(steps , "stepssteps");


// const sceNext =()=>{

//     console.log("fghjkljhgfghjkljhgf");
//     form
//     .validateFields(["secrname",])
//     .then((values) => {
//         console.log(values , "valuesvalues")
//         setCurrent(current + 1);
//        // setData(data);
//     }).catch((errorInfo) => {
//       console.log("errorInfo from submit form ...", errorInfo);
     
//     });

// }
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
            label="country"
            name="country"
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
            label="state"
            name="state"
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
        <Rate  onChange={setValue} value={value} />
        </Form.Item>
</div>
    {/* {current < steps - 1 && ( */}
        <Button  style={{width:"35%" , backgroundColor:"#2d3282"}} type="primary" htmlType="submit" onClick={() => sceNext()}>
          Next
        </Button>
      {/* )} */}
    </Form>
    </>
  );
}

export default SecondStep;