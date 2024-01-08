import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {UpdateLeadAction} from "../../Redux/Slices/BankLeadSlice/BankLeadSlice"
const  EditLead = ({  }) => {
    const dispatch = useDispatch()

    useEffect(() => {
      const  reqData = {id:9}
       dispatch(UpdateLeadAction(reqData))
      }, []);



    return(
        <p>editttttttttttttttt</p>
    )
}
export default EditLead;