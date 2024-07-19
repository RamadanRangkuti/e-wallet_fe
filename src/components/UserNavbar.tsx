// import * as React from "react";
import wallet from '../assets/icons/wallet.svg'
import profile from '../assets/images/ProfileNavbar.png'
import dropdown from '../assets/icons/dropdown.svg'

export default function UserNavbar() {
  return (
    <>
      <header className="flex flex-col justify-center bg-white">
        <nav className="flex gap-5 justify-between py-3.5 pr-16 pl-11 w-full bg-white border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center items-start my-auto text-xl font-semibold text-blue-600 whitespace-nowrap">
            <div className="flex flex-col justify-center max-w-full w-[129px]">
              <div className="flex gap-4">
                <img
                  loading="lazy"
                  src={wallet}
                  className="shrink-0 w-8 aspect-square"
                />
                <div className="justify-center px-px py-1.5 my-auto">
                  E-Wallet
                </div>
              </div>
            </div>
          </div>
          <button className="flex gap-5 items-center pl-20 max-md:flex-wrap">
            <p className='text-xl font-base'>Galuh Wizard</p>
            <img
              loading="lazy"
              src={profile}
              className="shrink-0 self-stretch w-12 rounded-full aspect-square"
            />
            <img
              loading="lazy"
              src={dropdown}
              className="shrink-0 self-stretch my-auto w-6 aspect-square"
            />
          </button>
        </nav>
      </header>
    </>
  );
}