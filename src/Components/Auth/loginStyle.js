import styled from "styled-components";

export const LoginForm = styled.div`
  display: grid;
  justify-content: center;

  .ant-form-item {
    margin-bottom: 15px !important;
  }

  .logo {
    margin: 10px 105px;
  }
  img{
    width:210px
  }
  .ant-col-offset-8 {
    margin-inline-start: unset !important;
  }
  .ant-input {
    width: 400px !important;
  }
  .ant-input-affix-wrapper {
    width: 400px !important;
  }

  .login_btn {
    width: 400px !important;
    background-color: #2d3282 !important;
    height: 37px;
  }

  .welcomDiv {
    text-align: center;

    h2 {
      margin: 5px !important;
      color: #1d2939;
    }

    p {
      margin-top: 0px !important;
      color: #667085;
    }
  }

  .registerNow {
    p {
      margin: 0px !important;
      text-align: center;
      font-size: 14px;
      color: #667085;
    }
  }

  .suuport_mail {
    margin-top: 5px;
    display: flex;
    justify-content: center;
    gap: 15px;
    font-size: 13px;

    p {
      margin: 0px !important;
      font-size: 13px !important;
      color:#2D3282 
    }
  }
`;

export const LoginContainer = styled.div`
  .ant-divider-horizontal {
    margin: 10px 0px !important;
  }
  .privacyAndPolicy {
    display: flex;
    justify-content: space-between;

    p {
      margin: 0px !important;
      color:#2D3282
    }
  }
`;

export const SignUpContainer = styled.div`
.ant-divider-horizontal {
    margin: 10px 0px !important;
  }
  .privacyAndPolicy {
    display: flex;
    justify-content: space-between;
    

    p {
      margin: 0px !important;
      color:#2D3282
    }
  }

`;

export const SignUpForm = styled.div`
  display: grid;
  justify-content: center;

  .logo {
    margin: 5px 130px;
  
  }

  .welcomDiv {
    text-align: center;

    h2 {
      margin: 5px 10px!important;
      color: #1d2939;
    }

   
  }

  .ant-col-offset-8 {
    margin-inline-start: unset !important;
  }
  .login_btn {
    width: 420px !important;
    background-color: #2d3282 !important;
    height: 37px;
    margin-top: 10px;
  }

  .registerNow {
    margin-bottom:3px;
    p {
      margin: 0px !important;
      text-align: center;
      font-size: 14px;
      color: #667085;
    }
  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload.ant-upload-select, :where(.css-dev-only-do-not-override-2q8sxy).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload.ant-upload-select{
    width:100% !important

  }

  .ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-container, :where(.css-dev-only-do-not-override-2q8sxy).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload-list.ant-upload-list-picture-card .ant-upload-list-item-container, :where(.css-dev-only-do-not-override-2q8sxy).ant-upload-wrapper.ant-upload-picture-card-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item-container, :where(.css-dev-only-do-not-override-2q8sxy).ant-upload-wrapper.ant-upload-picture-circle-wrapper .ant-upload-list.ant-upload-list-picture-circle .ant-upload-list-item-container{
    width:100% !important
  }
  .ant-form-item{
    margin-bottom:15px !important
  }
`;
