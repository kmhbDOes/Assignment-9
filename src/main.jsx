import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import AppliedJobs from "./components/AppliedJobs";
import JobDetails from "./components/JobDetails";
import Statistics from "./components/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("category.json") },
      { path: "/appliedjobs", element: <AppliedJobs /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
      { path: "/statistics", element: <Statistics /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
