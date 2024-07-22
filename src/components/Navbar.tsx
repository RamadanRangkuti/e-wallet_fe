import { Link } from "react-router-dom";
import ThreeDots from '../assets/icons/Threedots.svg'
import walletIcon from "../assets/icons/wallet.svg";
import { MouseEventHandler, useState } from "react";

export default function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropDown: MouseEventHandler<HTMLButtonElement> = () => {
    const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
    const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');
    setIsDropdownOpen((prevState) => !prevState)
    isDropdownOpen ? dropdownMenu1?.classList.remove('hidden') : dropdownMenu1?.classList.add('hidden');
    isDropdownOpen ? dropdownMenu?.classList.remove('hidden') : dropdownMenu?.classList.add('hidden');
  }

  return (
    <header className="flex justify-center items-center self-stretch px-16 py-3.5 w-full bg-blue-600 max-md:px-5 max-md:max-w-full container-fluid fixed top-0">
      <div className="flex gap-8 justify-between w-full max-w-[1180px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-4 my-auto text-xl font-semibold text-white whitespace-nowrap">
          <img loading="lazy" src={walletIcon} className="shrink-0 w-8 aspect-square" />
          <div className="justify-center px-px py-1.5 my-auto">E-Wallet</div>
        </div>
        <div className="hidden md:flex gap-5 justify-between text-sm font-medium tracking-wider leading-6 text-center">
          <button className="justify-center px-5 py-3 text-white whitespace-nowrap rounded-md border border-white border-solid">Sign In</button>
          <button className="justify-center px-5 py-3 text-blue-500 bg-white rounded-md">Sign Up</button>
        </div>

        <div id="logged_button" className="md:hidden">
          <div >
            <button
              onClick={dropDown}
              type="button"
              className="dropdown-menu  inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset "
              id="menu-button" aria-expanded="true" aria-haspopup="true">
              <img src={ThreeDots} alt="" />
            </button>
          </div>
          <div className="bg-blue-600 absolute right-0 z-10 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button1">
            <div className="py-1 flex flex-col gap-2 p-4" role="none">
              <Link to={"/login"}>
                <button className="justify-center px-5 py-3 text-blue-500 bg-white whitespace-nowrap rounded-md border border-white border-solid w-full focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-opacity-10">Sign In</button>
              </Link>
              <Link to={"/register"}>
                <button className="justify-center px-5 py-3 text-blue-500 bg-white rounded-md w-full focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-opacity-10">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
