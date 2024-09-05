import { MouseEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { logout } from "../redux/slices/auth";
import ThreeDots from "../assets/icons/Threedots.svg";

interface NavbarProps {
  title: string;
  icons: string;
}


export default function Header({ title, icons }: NavbarProps) {
  const { token } = useStoreSelector((state) => state.auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const dropDown: MouseEventHandler<HTMLButtonElement> = () => {
    const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
    const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');
    setIsDropdownOpen((prevState) => !prevState);
    isDropdownOpen ? dropdownMenu1?.classList.remove("hidden") : dropdownMenu1?.classList.add("hidden");
    isDropdownOpen ? dropdownMenu?.classList.remove("hidden") : dropdownMenu?.classList.add("hidden");
  };


  return (
    <>
      <div className="flex items-center justify-between md:justify-normal bg-primary w-full text-white text-xs md:text-base md:font-bold px-5 md:px-0 py-2 md:bg-white md:text-black gap-2">
        <div className="flex">
          <img src={icons} alt="icon" className="shrink-0 my-auto w-6 aspect-square mr-5 hidden md:flex" />
          {title}
        </div>
        <div className="md:hidden">
          <div className="flex">
            <button
              onClick={dropDown}
              type="button"
              className="dropdown-menu  inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <img src={ThreeDots} alt="" />
            </button>
          </div>
          <div
            className="bg-white absolute right-0 mt-2 w-42 origin-top-right divide-y divide-gray-100 hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button1"
          >
            <div className="py-5 flex flex-col gap-2 p-4" role="none">
              <Link to={"/user/dashboard"}>
                <button className="justify-center px-5 py text-blue-500 bg-white rounded-md border border-white border-solid w-full  active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                  Dashoard
                </button>
              </Link>
              <Link to={"/user/transfer"}>
                <button className="justify-center px-5 py text-blue-500 bg-white rounded-md border border-white border-solid w-full  active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                  Transfer
                </button>
              </Link>
              <Link to={"/user/history"}>
                <button className="justify-center px-5 py text-blue-500 bg-white rounded-md border border-white border-solid w-full  active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                  History
                </button>
              </Link>
              <Link to={"/user/topup"}>
                <button className="justify-center px-5 py text-blue-500 bg-white rounded-md border border-white border-solid w-full  active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                  Topup
                </button>
              </Link>
              <Link to={"/user"}>
                <button className="justify-center px-5 py text-blue-500 bg-white rounded-md border border-white border-solid w-full  active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                  Profile
                </button>
              </Link>
              {token ? (
                <button onClick={handleLogout} className="justify-center px-5 py text-red-500 bg-white rounded-md border border-white border-solid w-full active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                  Logout
                </button>) : ""}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}