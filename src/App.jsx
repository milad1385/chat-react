import React from "react";
import { Route, Routes } from "react-router-dom";
import "../public/css/common.css";
import "../public/css/style.css";
import ChatPage from "./pages/ChatPage";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<ChatPage />} path="/"/>
      <Route element={<Login />} path="/login"/>
    </Routes>
  );
}

export default App;
