import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
const MainPage = () => {
  return (
    <>
      <Header />

      <Outlet></Outlet>
    </>
  );
};

export default MainPage;
