import styled from "styled-components";

export const HeaderContainer = styled.div`

.header{
  background-color: white !important;


}
  .css-hip9hq-MuiPaper-root-MuiAppBar-root {
    background-color: white !important;
    box-shadow: unset !important;
    color: black !important;
    border-bottom: 1px solid #efecec;
    height: 55px !important;

    a {
      /* padding: 1rem 0; */
      color: #999999;
      transition: all 0.3s ease-out;
      font-weight: 600;
      display: flex;
      align-items: left;
      font-size: 15px;
      text-decoration: none;
      margin: 0px 10px;
      &:hover {
        color: #358ee1;
        border-radius: 10px;
        padding: 5px 10px;
      }
      &.active {
        color: #358ee1;
        background-color: #eef4ff;
        border-radius: 5px;
        padding: 3px 25px 6px 19px;
      }
    }
  }
`;
