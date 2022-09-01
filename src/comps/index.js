import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Access from "../pages/Access";
import ProtectedRoutes from "../pages/ProtectedRoutes";
import TemplateES from "./TemplateES";
import LayoutP from "./LayoutP";
import CreateTeacher from "./CreateTeacher";


const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Access />}>
        <Route
          path="/"
          element={
            <LayoutP>
              <Outlet />
            </LayoutP>
          }
        >
          <Route path="/" element={<Navigate to="students" />} />
          <Route
            path="students"
            element={<TemplateES  />}
          />
        <Route path="create_teacher" element={<CreateTeacher />}/>
        </Route>
      </Route>

      <Route path="/" element={<ProtectedRoutes />}>
      </Route>
    </Routes>
  );
};

export default index;
