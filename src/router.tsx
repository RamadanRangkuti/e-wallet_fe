import { createBrowserRouter } from "react-router-dom";
import Error from "./pages/Error";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Home from "./pages/LandingPage";
import Home2 from "./pages/LandingPage2";

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
        path: "home2",
        element: <Home2 />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routerWithChildren;
