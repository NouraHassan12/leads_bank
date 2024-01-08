import styled from "styled-components";

export const AddLeadContainer = styled.div`
.ant-select-single{
    height:40px !important
}
.ant-input{
    height:40px !important
}

.ant-form-vertical .ant-form-item-label>label{
    font-weight:500 !important
}

.tetstttttttt > :first-child{
    position:absolute !important;
    width:30% !important;
    height: 55% !important;
    z-index: 1;
    top: 35%;
    left: 65%;

}

.ant-form legend{
    width:unset !important
}

.switches{
.ant-form-item-label{
    text-align:center
}
}

`

export const WarnDiv=styled.div`
width:100px;
//position: relative;
background-color: #d94948;
border-radius: 2rem;
margin: 1rem;
h1{
  padding: 2rem;
  color:white;
}
&:before{
 // position: absolute;
  content: "";
  top: .6rem;
  margin: -25px 0 0 -25px;
  left: 50%;
  width: 0; 
  height: 0; 
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-bottom: 1rem solid #d94948;
}
`

