import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import LogIn from "../screens/LogIn";
import SignUp from "../screens/SignUp";
import Dashboard from "../screens/Dashboard";
import Home from "../screens/Home";
import AddCourse from "../screens/AddCourse";
import ResultUpdate from "../screens/ResultUpdate";
import AddData from "../screens/AddData";
import Courses from "../screens/Courses";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="logIn" element={<LogIn />} />
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
          <Route path="add-course" element={<AddCourse />}></Route>
          <Route path="result-update" element={<ResultUpdate />}></Route>
          <Route path="add-data" element={<AddData />}></Route>
          <Route path="courses" element={<Courses />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
