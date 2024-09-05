import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import SideNavbar from "../components/UserSidebar";
import Profile from "./Profile";

function UsersIndex() {
  const location = useLocation();

  return (
    <div className="h-screen w-full flex flex-col">
      <UserNavbar />
      <div className="md:flex">
        <SideNavbar />
        {location.pathname === "/user" ? <Profile /> : <Outlet />}
      </div>
    </div>
  );
}

export default UsersIndex;
