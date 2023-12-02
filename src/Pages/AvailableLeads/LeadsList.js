import React from "react";
import { Table } from "antd";
const LeadsList = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      //   filters: [
      //     {
      //       text: "Joe",
      //       value: "Joe",
      //     },
      //     {
      //       text: "Jim",
      //       value: "Jim",
      //     },
      //     {
      //       text: "Submenu",
      //       value: "Submenu",
      //       children: [
      //         {
      //           text: "Green",
      //           value: "Green",
      //         },
      //         {
      //           text: "Black",
      //           value: "Black",
      //         },
      //       ],
      //     },
      //   ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      //  onFilter: (value, record) => record.name.indexOf(value) === 0,
      //   sorter: (a, b) => a.name.length - b.name.length,
      //   sortDirections: ["descend"],
    },
    { title: "service type", dataIndex: "service_type" },
    { title: "transaction type", dataIndex: "transaction_type" },
    { title: "price or percentage", dataIndex: "price_percentage" ,   defaultSortOrder: "descend",
    sorter: (a, b) => a.price_percentage - b.price_percentage,},
    { title: "status", dataIndex: "status" },
    // {
    //   title: "Age",
    //   dataIndex: "age",
    //   defaultSortOrder: "descend",
    //   sorter: (a, b) => a.age - b.age,
    // },
    {
      title: "Address",
      dataIndex: "address",
      //   filters: [
      //     {
      //       text: "London",
      //       value: "London",
      //     },
      //     {
      //       text: "New York",
      //       value: "New York",
      //     },
      //   ],
      //   onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      service_type : "solar" , 
      transaction_type : "immediate",
      price_percentage  : "1900$", 
   
      address: "New York No. 1 Lake Park",
      status : "active"
    },
    {
      key: "2",
      name: "Jim Green",
      service_type : "solar" , 
      transaction_type : "commission based",
      price_percentage  : "1700$",
   
      address: "London No. 1 Lake Park",
      status : "warning"
    },
    {
      key: "3",
      name: "Joe Black",
      service_type : "solar" , 
      transaction_type : "immediate",
      price_percentage  : "1500$",
      status : "warning"
    
    },
    {
      key: "4",
      name: "Jim Red",
      service_type : "solar" ,
      transaction_type : "commission based", 
      price_percentage  : "1300$",
      
      address: "London No. 2 Lake Park",
      status : "active"
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div style={{ margin: "50px" }}>
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
    </>
  );
};

export default LeadsList;
