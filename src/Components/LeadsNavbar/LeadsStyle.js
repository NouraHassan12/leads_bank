import styled from "styled-components";

export const LeadsNav = styled.div`
.header{
  background-color: white !important;
color:blue !important;
border-bottom: 1px solid #efecec !important;
align-items: end !important;
box-shadow:unset !important;
justify-content: space-between !important;
display:flex !imprtant;
flex-direction: unset !important;
-webkit-flex-direction: unset !important;

}
.css-hip9hq-MuiPaper-root-MuiAppBar-root{
    background-color:white !important;
    box-shadow:unset !important;
    // color:black !important;
    border-bottom: 1px solid #efecec;
    
   
    .css-1q39md6-MuiButtonBase-root-MuiButton-root{
        color:black !important;
    }

    li {
       // position: relative;
       // flex-basis: 11%;
        margin-bottom: 10px;
        padding: 0px 10px;
    
        a {
          /* padding: 1rem 0; */
          color: #999999;
          transition: all 0.3s ease-out;
          font-weight: 600;
          display: flex;
          align-items: left;
          font-size: 15px;
          text-decoration: none;
          &:hover {
            color: #358ee1;
            border-radius:10px;
            padding: 5px 10px
          }
          &.active {
            color: #358ee1;
            background-color:#eef4ff;
            border-radius:10px;
            padding:5px 15px
            
          }
        }
          
        }

   
}


.css-hip9hq-MuiPaper-root-MuiAppBar-root{
    color:black !important
}
`;