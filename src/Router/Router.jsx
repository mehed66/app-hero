
import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import Root from "../Root/Root";
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     {
          index : true,

          Component: Home,
          loader: () => fetch('/appData.json')
     },
     {
          path: '/apps',
          Component : Apps,
          loader: () => fetch('/appData.json')
     },
     {
          path: '/installation',
          Component : Installation
     },
     {
          path: '/app/:id',
          Component : AppDetails,
          loader: () => fetch("/appData.json")
     },

    ]
  },
]);