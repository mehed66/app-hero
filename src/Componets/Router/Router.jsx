
import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Installation from "../Pages/Installation";
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
          index : true,

          Component: Home,
          loader: () => fetch('./appData.json')
     },
     {
          path: '/apps',
          Component : Apps,
          loader: () => fetch('./appData.json')
     },
     {
          path: '/installation',
          Component : Installation
     }
    ]
  },
]);