import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Home from "./pages/LandingPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import EnterPin from "./pages/EnterPin";
import Dashboard from './pages/Dashboard'
import UsersIndex from "./pages/UsersIndex";
import Profile from "./pages/Profile";
import TransferHistory from "./pages/TransferHistory";

const routerWithChildren = createBrowserRouter([
  {
    path: "/user/",
    element: <UsersIndex />,
    errorElement: <Error />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "history",
        element: <TransferHistory />,
      },
      {
        path: "profile",
        element: <Profile />,
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
