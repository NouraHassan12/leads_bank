import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Auth";
import { useState, useEffect } from "react";
import MainPage from "./Pages/MainPage";
import Dashboard from "./Pages/DashboardPage";
import LeadsPage from "./Pages/LeadsPage";
import LeadsList from "./Pages/AvailableLeads/LeadsList";
import CreateLead from "./Pages/AvailableLeads/CreateLead"


function App() {
  const [auth, setAuth] = useState();

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setAuth(true);
    }
  }, []);

  return (
    <>
      
      {auth ? (
        <Routes>
          <Route path="*" element={<Navigate to="/home/Leads/AllLeads" />} />
          <Route path="/" element={<Navigate to="/home/Leads/AllLeads" />} />
        
          <Route path="/home" element={<MainPage />} >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Leads" element={<LeadsPage />} >
          <Route path="AllLeads" element={<LeadsList />} />
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
