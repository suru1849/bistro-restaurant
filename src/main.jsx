import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router/Router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl mx-auto">
    <React.StrictMode>
      <HelmetProvider>
        <RouterProvider router={Router}></RouterProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>
);
