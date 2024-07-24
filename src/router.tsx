import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Home from "./pages/LandingPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import EnterPin from "./pages/EnterPin";
import Dashboard from "./pages/Dashboard";
import UsersIndex from "./pages/UsersIndex";
import ChangePassword from "./pages/ChangePassword";
import TransferHistory from "./pages/TransferHistory";
import ChangePin from "./pages/ChangePin";
import TransferPage from "./pages/Transfer";
import TopUp from "./pages/TopUp";
import PrivateRoute from "./components/PrivateRoute";

const routerWithChildren = createBrowserRouter([
  {
    path: "/user/",
    element: (
      <PrivateRoute to={"/login"}>
        <UsersIndex />
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "topup",
        element: <TopUp />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "history",
        element: <TransferHistory />,
      },
      {
        path: "transfer",
        element: <TransferPage />,
      },
      {
        path: "transfer/:id",
        element: <TransferPage />,
      },
      {
        path: "changepassword",
        element: <ChangePassword />,
      },
      {
        path: "changepin",
        element: <ChangePin />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword />,
    errorElement: <Error />,
  },
  {
    path: "/enterpin",
    element: <EnterPin />,
    errorElement: <Error />,
  },
]);

export default routerWithChildren;
