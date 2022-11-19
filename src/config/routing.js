import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";

export default function AppRouter() {
  const [links, setLinks] = useState([
    {
      to: "signUp",
      label: "SignUp",
    },
    {
      to: "logIn",
      label: "LogIn ",
    },
    {
      to: "dashboard",
      label: "Dashboard",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="logIn" element={<LogIn />} />
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
