import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        // loader: teamLoader,
      },
      {
        path: "login",
        element: <Login />,
        // loader: teamLoader,
      },
      {
        path: "register",
        element: <Register />,
        // loader: teamLoader,
      },
    ],
  },
]);

export default Router;
