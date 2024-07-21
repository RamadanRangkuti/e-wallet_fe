import { Outlet, useLocation } from "react-router-dom";
import Home from "./LandingPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Index() {
  const location = useLocation();

  return (
    <div className="container-fluid h-full w-full">
      <Navbar />
      {location.pathname === "/" ? <Home /> : <Outlet />}
      <Footer />
    </div>
  );
}

export default Index;
