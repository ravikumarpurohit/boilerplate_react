import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        // loader: teamLoader,
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
    // loader: teamLoader,
  },
]);

export default Router;
