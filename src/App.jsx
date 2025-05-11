import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import TeacherLog from "./pages/TeacherLog.jsx";

export default function App() {
  return (
   <HashRouter>
    <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/teacher-log" element={<TeacherLog />} /> 
    </Routes>
   </HashRouter>
 ) 
}