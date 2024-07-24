import { Link } from "react-router-dom";
import ThreeDots from "../assets/icons/Threedots.svg";
import walletIcon from "../assets/icons/wallet.svg";
import { MouseEventHandler, useState } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDown: MouseEventHandler<HTMLButtonElement> = () => {
    const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
    const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');
    setIsDropdownOpen((prevState) => !prevState);
    isDropdownOpen ? dropdownMenu1?.classList.remove("hidden") : dropdownMenu1?.classList.add("hidden");
    isDropdownOpen ? dropdownMenu?.classList.remove("hidden") : dropdownMenu?.classList.add("hidden");
  };

  return (
    <header className="flex justify-between px-5 md:px-20 py-3.5 w-full bg-blue-600 fixed top-0">
      <div className="flex gap-4 text-xl font-semibold text-white">
        <img width="30" src={walletIcon} />
        <div className="self-center">
          <p>E-Wallet</p>
        </div>
      </div>
      <div className="hidden gap-5 md:flex text-sm text-center">
        <Link to={"/login"} >
          <button className="px-5 py-3 w-30 text-white rounded-md border border-white border-solid">Sign In</button>
        </Link>
        <Link to={"/register"}>
          <button className="px-5 py-3 w-30 text-blue-500 bg-white rounded-md">Sign Up</button>
        </Link>
      </div>
      <div className="md:hidden">
        <div>
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
          className="bg-white absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button1"
        >
          <div className="py-5 flex flex-col gap-2 p-4" role="none">
            <Link to={"#"}>
              <button className="justify-center px-5 py-3 text-blue-500 bg-white rounded-md border border-white border-solid w-full  active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                Log out
              </button>
            </Link>
            <Link to={"#"}>
              <button className="justify-center px-5 py-3 text-blue-500 bg-white rounded-md border border-white border-solid w-full active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
                xxxxxx
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
