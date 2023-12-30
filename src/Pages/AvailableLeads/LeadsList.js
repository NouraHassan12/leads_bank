import React, { useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import { DeleteFilled } from "@ant-design/icons";
import { useLocation , useSearchParams } from "react-router-dom";
import { useParams ,  } from 'react-router';
import { Table , Pagination , Space } from "antd";
import { getAvailableLeadsAction } from "../../Redux/Slices/BankLeadSlice/BankLeadSlice";
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";
const LeadsList = () => {
  const dispatch = useDispatch();
  // const router = 
  const lead_bank_list = useSelector((state) => state.lead_bank);
  const location = useLocation();
  const [page , set_page] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams({page:1});
  console.log(searchParams, "searchParams")



  const params= useParams()
  console.log(location , "::location" , "paramsparams" , params.page)


  useEffect(() => {
  set_page(1);
  setSearchParams({ page : 1 });
  }, []);

  useEffect(() => {
    
    set_page(lead_bank_list?.lead_bank?.data?.current_page);
    
    setSearchParams({ page :lead_bank_list?.lead_bank?.data?.current_page });
    }, []);

  useEffect(() => {

    const reqData = { page: page };
    dispatch(getAvailableLeadsAction(reqData));
    setSearchParams({ page :page });
  }, [page]);

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
    { title: "edit", dataIndex:"", render: (record) => (
      <Space size="middle">
        <EditOutlined
          style={{ fontSize: "16px", cursor: "pointer" }}
          user={record}
        />
        <DeleteFilled
          style={{ fontSize: "16px", cursor: "pointer" }}
          user={record}
        />
      </Space>
    )},

    // {
    //   title: "Address",
    //   dataIndex: "address",

    // },
  ];
  const data = 
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
    lead_bank_list?.lead_bank?.data?.data
  ;
  const onChange = ( filters, sorter) => {
    console.log("params", filters, sorter);
  };

  const onChangePagination = (pageNumber) => {
    set_page(pageNumber)
    console.log('Page: ', pageNumber);
  };

  return (
    <>
      <div style={{ margin: "50px" }}>
        <Table  pagination={false} columns={columns} dataSource={data} onChange={onChange} />
        <Pagination defaultCurrent={page} total={lead_bank_list?.lead_bank?.data?.total_pages} onChange={onChangePagination} />
      </div>
    </>
  );
};

export default LeadsList;
