import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Home from "./pages/LandingPage";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import EnterPin from "./pages/EnterPin";

const routerWithChildren = createBrowserRouter([
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
