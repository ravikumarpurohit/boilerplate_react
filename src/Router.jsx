import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Inquiries from "./pages/Inquiries";
import Orders from "./pages/Orders";
import Expenses from "./pages/Expenses";
import Tasks from "./pages/Tasks";
import DailyWorks from "./pages/DailyWorks";
import Users from "./pages/Users";
import Customers from "./pages/Customers";
import Chat from "./pages/Chat";
import TrackLocations from "./pages/TrackLocations";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        // loader: teamLoader,
      },
      {
        path: "products",
        element: <Products />,
        // loader: teamLoader,
      },
      {
        path: "inquiries",
        element: <Inquiries />,
        // loader: teamLoader,
      },
      {
        path: "orders",
        element: <Orders />,
        // loader: teamLoader,
      },
      {
        path: "expenses",
        element: <Expenses />,
        // loader: teamLoader,
      },
      {
        path: "tasks",
        element: <Tasks />,
        // loader: teamLoader,
      },
      {
        path: "products",
        element: <Products />,
        // loader: teamLoader,
      },
      {
        path: "dailyWork",
        element: <DailyWorks />,
        // loader: teamLoader,
      },
      {
        path: "track",
        element: <TrackLocations />,
        // loader: teamLoader,
      },
      {
        path: "users",
        element: <Users />,
        // loader: teamLoader,
      },
      {
        path: "customers",
        element: <Customers />,
        // loader: teamLoader,
      },
      {
        path: "chat",
        element: <Chat />,
        // loader: teamLoader,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
    // loader: teamLoader,
  },
]);

export default Router;
