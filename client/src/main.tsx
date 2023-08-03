import React from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import CalorieInput from "./components/CalorieInput.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "calorieinput",
    element: <CalorieInput />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
