import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Access from "../pages/Access";
import LoginP from "../pages/LoginP";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import Experiences from "./Experiences";
import LayoutP from "./LayoutP";
import Messages from "./Messages";
import PersonalSettings from "./PersonalSettings";
import Photos from "./Photos";
import Portfolios from "./Portfolios";
import Skills from "./Skills";
import Users from "./Users";

const index = () => {
  return (
      <Routes>
        <Route path="/" element={<Access />} >
        <Route
          path="/"
          element={
            <LayoutP>
              <Outlet />
            </LayoutP>
          }
        >
          <Route path="/" element={<Navigate to="users" />} />
          <Route path="users" element={<Users />} />
          <Route path="skills" element={<Skills />} />
          <Route path="messages" element={<Messages />} />
          <Route path="experiences" element={<Experiences />} />
          <Route path="portfolios" element={<Portfolios />} />
          <Route path="photos" element={<Photos />} />
          <Route path="personal" element={<PersonalSettings />} />
        </Route>

        </Route>
        
        <Route path="/" element={<ProtectedRoutes />} >
        <Route path="/login" element={<LoginP />} />
        </Route>

      </Routes>
  );
};

export default index;
