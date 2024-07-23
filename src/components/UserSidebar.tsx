import dashboard from "../assets/icons/dashboard.svg";
import transfer from "../assets/icons/transfer.svg";
import history from "../assets/icons/history.svg";
import quit from "../assets/icons/quit.svg";
import topUp from "../assets/icons/topUp.svg";
import profile2 from "../assets/icons/porfile.svg";
import { Link, useNavigate } from "react-router-dom";
import { useStoreDispatch } from "../redux/hooks";
import { useRef, useState } from "react";
import { authAction } from "../redux/slices/auth";

export default function SideNavbar() {
  const logoutModalBgRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);
  const { logout } = authAction;
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();

  const handleClickOutside = (event: React.MouseEvent) => {
    if (event.target === logoutModalBgRef.current) {
      setShowModal(false);
    }
  };

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmLogout = () => {
    dispatch(logout());
    setShowModal(false);
    navigate("/login");
  };

  return (
    <>
      <main className="hidden md:inline-block px-5 py-6 text-sm text-gray-600 bg-white border-r border-gray-200 border-solid w-[261px] font-montserrat">
        <div className="inline-block w-full">
          <Link to="/user/dashboard">
            <button className="w-full h-10 items-center pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={dashboard} />
              <div className="ml-2">Dashboard</div>
            </button>
          </Link>
          <Link to="/user/transfer">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={transfer} />
              <div className="ml-2">Transfer</div>
            </button>
          </Link>
          <Link to="/user/history">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={history} />
              <div className="ml-2">History</div>
            </button>
          </Link>
          <Link to="/user/topup">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={topUp} />
              <div className="ml-2">Top Up</div>
            </button>
          </Link>
          <Link to="/user">
            <button className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img width="20" height="20" src={profile2} />
              <div className="ml-2">Profile</div>
            </button>
          </Link>
          <button onClick={handleLogout} className="w-full h-10 items-center mt-2 pl-2 flex rounded-md focus:border-l-4 focus:border-red-600 focus:border-solid focus:bg-red-600 focus:bg-opacity-10">
            <img width="20" height="20" src={quit} />
            <div className="ml-2">Keluar</div>
          </button>
        </div>
        {showModal && (
          <div ref={logoutModalBgRef} onClick={handleClickOutside} className="show fixed z-50 inset-0 bg-black bg-opacity-50 modal-bg justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg max-w-md uw:max-w-2xl w-3/4 tbt:w-full text-center">
              <h2 className="text-sm tbt:text-2xl uw:text-4xl font-semibold mb-4">Confirm Log Out</h2>
              <p className="text-xs xsm:text-sm tbt:text-base uw:text-2xl mb-6">Are you sure you want to log out?</p>
              <div className="flex justify-center">
                <button onClick={handleConfirmLogout} className="text-xs tbt:text-base uw:text-2xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white px-4 py-2 rounded mr-2">
                  Log Out
                </button>
                <button onClick={handleCloseModal} className="text-xs tbt:text-base uw:text-2xl bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
