// import * as React from "react";
import wallet from "../assets/icons/wallet.svg";
// import profile from "../assets/images/ProfileNavbar.png";
import dropdown from "../assets/icons/dropdown.svg";
import { Link } from "react-router-dom";
import { MouseEventHandler, useState } from "react";


export default function UserNavbar() {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropDown: MouseEventHandler<HTMLButtonElement> = () => {
      const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
      const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');
      setIsDropdownOpen((prevState) => !prevState);
      isDropdownOpen ? dropdownMenu1?.classList.remove("hidden") : dropdownMenu1?.classList.add("hidden");
      isDropdownOpen ? dropdownMenu?.classList.remove("hidden") : dropdownMenu?.classList.add("hidden");
    };

  return (
    <>
      <header className="hidden md:flex flex-col justify-center bg-white font-montserrat">
        <nav className="flex gap-5 justify-between py-3.5 px-5 w-full bg-white border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center items-start my-auto text-xl font-semibold text-blue-600 whitespace-nowrap">
            <div className="flex flex-col justify-center max-w-full w-[129px]">
              <div className="flex gap-4">
                <img src={wallet} />
                <div className="justify-center py-1.5 my-auto">E-Wallet</div>
              </div>
            </div>
          </div>
          <div className="">
        <div>
          <button
            onClick={dropDown}
            type="button"
            className="dropdown-menu  inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <img src={dropdown} alt="" />
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
              <button className="justify-center px-5 py-3 text-blue-500 bg-white rounded-md border border-white border-solid w-full active:border active:border-primary active:border-solid focus:border focus:border-primary focus:border-solid">
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
        </nav>
      </header>
    </>
  );
}
