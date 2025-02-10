import React from "react";
import { Route, Routes } from "react-router-dom";
import { PathConstants } from "./path-contants";
import RedirectIfLoggedIn from "../auth/Auth.RedirectIfLoggedIn";
import { RequireAuth } from "../auth/RequireAuth";
import Layout from "../layout/layout";
import LoginPage from "../login/LoginPage";
import Home from "../timesheet/home";
import Dashboard from "../timesheet/dashboard/dashboard";
import Settings from "../timesheet/settings/Settings";


const Root = () => {
  return (
    <>
      <Routes>
        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path={PathConstants.HOME}
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path={PathConstants.DASHBOARD}
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
           <Route
            path={PathConstants.SETTINGS}
            element={
              <RequireAuth>
                <Settings />
              </RequireAuth>
            }
          />
        </Route>

        {/* Public Routes */}
        <Route
          path={PathConstants.LOGIN}
          element={
            <RedirectIfLoggedIn>
              <LoginPage />
            </RedirectIfLoggedIn>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default Root;
