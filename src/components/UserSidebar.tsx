
import dashboard from '../assets/icons/dashboard.svg'
import transfer from '../assets/icons/transfer.svg'
import history from '../assets/icons/history.svg'
import quit from '../assets/icons/quit.svg'
import topUp from '../assets/icons/topUp.svg'
import profile2 from '../assets/icons/porfile.svg'
import { Link } from 'react-router-dom'

export default function SideNavbar() {
  return (
    <>
      <main className="hidden md:flex h-full px-5 py-6 max-w-full text-sm tracking-normal leading-6 text-gray-600 bg-white border-r border-gray-200 border-solid w-[261px] font-montserrat">
          <div className="inline-block w-full">
          <Link to="/user/dashboard">
            <button className="w-full h-10 items-center pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
              width="20"
              height="20"
                src={dashboard}
              />
              <div className="ml-2">Dashboard</div>
            </button>
          </Link>
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                width="20"
                height="20"
                src={transfer}
              />
              <div className="ml-2">Transfer</div>
            </button>
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
              width="20"
              height="20"
                src={history}
              />
              <div className="ml-2">History</div>
            </button>
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                width="20"
                height="20"
                src={topUp}
              />
              <div className="ml-2">Top Up</div>
            </button>
            <Link to="/user">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                width="20"
                height="20"
                src={profile2}
              />
              <div className="ml-2">Profile</div>
            </button>
            </Link>
              <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:border-l-4 focus:border-red-600 focus:border-solid focus:bg-red-600 focus:bg-opacity-10">
                <img
                width="20"
                height="20"
                  src={quit}
                />
                <div className="ml-2">Keluar</div>
              </button>
          </div>
      </main>
    </>
  );
}