import { Modal } from "antd";
import { useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
import {useDispatch } from "react-redux";
import {deleteLeadAction , getAvailableLeadsAction} from "../../Redux/Slices/BankLeadSlice/BankLeadSlice"

const  DeleteLead = ({ lead , open , setOpen , text }) => {
  console.log(lead , "___lead");

 
  const [confirmLoading, setConfirmLoading] = useState(false);

  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
   const reqData = {id:lead.id}
    dispatch(deleteLeadAction(reqData));
    // dispatch(getAvailableLeadsAction())
    setOpen(false);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <DeleteFilled
        onClick={()=>  setOpen(true)}
        style={{ fontSize: "16px", margin: "auto 10px", cursor: "pointer" }}
      />

      <Modal
       
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{lead}</p>
        <p>{`Are You Sure To Delete ${lead} `}</p>
      </Modal>
    </>
  );
};
export default DeleteLead;
