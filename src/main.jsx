import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SocketProvider from "./context/SocketProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketProvider>
        <App />
        <Toaster
          containerStyle={{ fontSize: "16px" }}
          position="top-center"
          reverseOrder={false}
        />
      </SocketProvider>
    </BrowserRouter>
  </React.StrictMode>
);
