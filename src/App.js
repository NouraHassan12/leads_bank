import logo from "./logo.svg";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Auth";
import { useState, useEffect } from "react";
import MainPage from "./Pages/MainPage";
import Dashboard from "./Pages/DashboardPage";
import LeadsPage from "./Pages/LeadsPage";
import LeadsList from "./Pages/AvailableLeads/LeadsList";
import SoldLeadsList from "./Pages/Leads sold/soldLeadList"
import CreateLead from "./Pages/AvailableLeads/CreateLead";
import { GlobalStyle } from "./GlobalStyle/globalStyle";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [auth, setAuth] = useState();
  const Authorized_user = useSelector(
    (state) => state.auth_user
  );

  console.log(Authorized_user, "Authorized_user in app.js");

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {Authorized_user ? (
        <Routes>
          <Route path="*" element={<Navigate to="/home/Leads/AllLeads" />} />
          <Route path="/" element={<Navigate to="/home/Leads/AllLeads" />} />

          <Route path="/home" element={<MainPage />}>
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Leads" element={<LeadsPage />}>
              <Route path="AllLeads" element={<LeadsList />} />
              <Route path="SoldLeadsList" element={<SoldLeadsList />} />
              <Route path="CreateLead" element={<CreateLead />} />
            </Route>
          </Route>
          {/* </Route> */}
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

export default App;
