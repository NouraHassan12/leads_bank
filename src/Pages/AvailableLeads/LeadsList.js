import React, { useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";
import { useLocation, useSearchParams } from "react-router-dom";
import { useParams } from "react-router";
import { Table, Pagination, Space, Popconfirm, Spin } from "antd";
import { getAvailableLeadsAction } from "../../Redux/Slices/BankLeadSlice/BankLeadSlice";
import { deleteLeadAction } from "../../Redux/Slices/BankLeadSlice/BankLeadSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DeleteLead from "./DeleteLead";
import { useNavigate } from "react-router-dom";
const LeadsList = () => {
  const dispatch = useDispatch();
  // const router =
  const lead_bank_list = useSelector((state) => state.lead_bank);
  const location = useLocation();
  const [page, set_page] = useState(1);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  console.log(searchParams, "searchParams");
  console.log(lead_bank_list?.isLodaing, "lead_bank_list");

  const params = useParams();
  console.log(location, "::location", "paramsparams", params.page);

  useEffect(() => {
    set_page(1);
    setSearchParams({ page: 1 });
  }, []);

  useEffect(() => {
    set_page(lead_bank_list?.lead_bank?.data?.current_page);

    setSearchParams({ page: lead_bank_list?.lead_bank?.data?.current_page });
  }, []);

  useEffect(() => {
    const reqData = { page: page };
    dispatch(getAvailableLeadsAction(reqData));
    // setSearchParams({ page :page });
  }, []);

  const handleDelete = (id) => {
    console.log(id, ":::::::::::::::::::::::::::::::::::");
    const reqData = { id: id };
    dispatch(deleteLeadAction(reqData));

    dispatch(getAvailableLeadsAction({ page: page }));
  };

  const handleEdit =(id)=>{
    // console.log(id , "eikk");
    navigate("/")
  }
  const columns = [
    {
      title: "first Name",
      dataIndex: "first_name",
    },
    { title: "last name", dataIndex: "last_name" },
    { title: "transaction type", dataIndex: "transaction_type" },
    {
      title: "price percentage",
      dataIndex: "price_percentage",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.price_percentage - b.price_percentage,
    },
    { title: "status", dataIndex: "status" },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (  record) => (

    //   <Space size="middle">
    //     {/* <EditOutlined
    //       style={{ fontSize: "16px", cursor: "pointer" }}
    //       user={record}
    //     /> */}
    //     <DeleteLead

    //     open={open}
    //     setOpen={setOpen}
    //       style={{ fontSize: "16px", cursor: "pointer" }}
    //       lead={record}
    //     />
    //   </Space>
    // )},

    {
      title: "operation",
      dataIndex: "operation",

      render: (_, record) =>
        data.length >= 1 ? (
          // // <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
          // //   <a>Delete</a>
          // // </Popconfirm>
          // // <Space size="middle">
          // {/* <EditOutlined
          //   style={{ fontSize: "16px", cursor: "pointer" }}
          //   user={record}
          // /> */}
          <>
            {/* <DeleteLead
         
          open={open}
          setOpen={setOpen}
            style={{ fontSize: "16px", cursor: "pointer" }}
            lead={record.id}
          /> */}

            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.id)}
            >
              <a>Delete</a>
            </Popconfirm>
            {/* <span onClick={()=>{console.log("edittttttttttttttt") ; }} style={{margin:"0px 10px" , cursor:"pointer"}}>edit</span> */}
            {/* <Popconfirm
            style={{margin:"0px 5px"}}
              title="edit this lead?"
              onConfirm={() => navigate(`/home/Leads/EditLead/${record.id}`)}
            >
              <a>edit</a>
            </Popconfirm> */}
          </>
        ) : // </Space>
        null,
    },

    // {
    //   title: "Address",
    //   dataIndex: "address",

    // },
  ];
  const data = lead_bank_list?.lead_bank?.data?.data;
  // {
  //   key: "1",
  //   name: "John Brown",
  //   service_type: "solar",
  //   transaction_type: "immediate",
  //   price_percentage: "1900$",

  //   address: "New York No. 1 Lake Park",
  //   status: "active",
  // },
  // {
  //   key: "2",
  //   name: "Jim Green",
  //   service_type: "solar",
  //   transaction_type: "commission based",
  //   price_percentage: "1700$",

  //   address: "London No. 1 Lake Park",
  //   status: "warning",
  // },
  // {
  //   key: "3",
  //   name: "Joe Black",
  //   service_type: "solar",
  //   transaction_type: "immediate",
  //   price_percentage: "1500$",
  //   status: "warning",
  // },
  // {
  //   key: "4",
  //   name: "Jim Red",
  //   service_type: "solar",
  //   transaction_type: "commission based",
  //   price_percentage: "1300$",

  //   address: "London No. 2 Lake Park",
  //   status: "active",
  // },

  const onChange = (filters, sorter) => {
    console.log("params", filters, sorter);
  };

  const onChangePagination = (pageNumber) => {
    set_page(pageNumber);
    console.log("Page: ", pageNumber);
  };

  return (
    <>
      {/* <Spin spinning={spinning} fullscreen /> */}
      {lead_bank_list?.isLodaing ? (
        <Spin spinning={lead_bank_list?.isLodaing} fullscreen />
      ) : (
        <div style={{ margin: "50px" }}>
          <Table
            pagination={false}
            columns={columns}
            dataSource={data}
            onChange={onChange}
          />
          <Pagination
            defaultCurrent={page}
            total={lead_bank_list?.lead_bank?.data?.total_pages}
            onChange={onChangePagination}
          />
        </div>
      )}
    </>
  );
};

export default LeadsList;
