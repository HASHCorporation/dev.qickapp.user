import React, { lazy } from "react";
import Login from "../page/Login";
import SignUp from "../page/SignUp";

const Router = [
  {
    path: "/",
    // element: <FullLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/signup",
        exact: true,
        element: <SignUp />,
      },
    ],
  },
];

export default Router;
