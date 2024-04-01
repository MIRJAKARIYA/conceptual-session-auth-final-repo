import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Root from "./components/Root/Root.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AuthProvider from "./components/AuthProvider/AuthProvider.jsx";
import About from "./components/About/About.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import PersonalData from "./components/PersonalData/PersonalData.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
  
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:"/about",
        element:<ProtectedRoute>
          <About></About>
        </ProtectedRoute>
      },
      {
        path:"/pdata"
        ,
        element:<ProtectedRoute>
          <PersonalData></PersonalData>
        </ProtectedRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
