import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/LandingPage"
import Home2 from "./pages/LandingPage2"


function Error() {
    return <div>Error</div>;
}

function NotFound() {
    return <div>Route Not Found</div>;
}

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
                path: "*",
                element: <NotFound />,
            }
        ],
    },

]);

export default routerWithChildren;
