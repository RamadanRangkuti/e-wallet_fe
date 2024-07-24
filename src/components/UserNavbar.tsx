import wallet from "../assets/icons/wallet.svg";
import userIcon from "../assets/images/user.webp";
import dropdown from "../assets/icons/dropdown.svg";
import quit from "../assets/icons/quit.svg";
import user from "../assets/icons/user.svg";

import { Link, useNavigate } from "react-router-dom";
import { MouseEventHandler, useEffect, useState } from "react";
import { logout } from "../redux/slices/auth";
import { useStoreDispatch, useStoreSelector } from "../redux/hooks";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { IProfileBody } from "../types/profile";

export default function UserNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useStoreDispatch();
  const [id, setId] = useState<string>("");
  const { token } = useStoreSelector((state) => state.auth);
  const [getProfile, setProfile] = useState<IProfileBody[]>([]);

  const dropDown: MouseEventHandler<HTMLButtonElement> = () => {
    const dropdownMenu = document.querySelector('.absolute[aria-labelledby="menu-button"]');
    const dropdownMenu1 = document.querySelector('.absolute[aria-labelledby="menu-button1"]');
    setIsDropdownOpen((prevState) => !prevState);
    isDropdownOpen ? dropdownMenu1?.classList.remove("hidden") : dropdownMenu1?.classList.add("hidden");
    isDropdownOpen ? dropdownMenu?.classList.remove("hidden") : dropdownMenu?.classList.add("hidden");
  };

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);

  console.log(id);

  useEffect(() => {
    const getDataUser = async () => {
      if (!id || !token) return;
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/${id}`;
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(result.data.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [id, token]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
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
              <button onClick={dropDown} type="button" className="flex gap-5 items-center" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <p>{getProfile[0]?.fullname || "fullname"}</p>
                <img src={getProfile[0]?.image || userIcon} width="40" className="rounded-full" />
                <img width="20" src={dropdown} />
              </button>
            </div>
            <div
              className="bg-white absolute right-5 mt-4 w-56 origin-top-right divide-y divide-gray-100 hidden shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button1"
            >
              <div className="p-3 flex flex-col gap-2" role="none">
                <Link to={"/user"}>
                  <button className="pl-2 py-1 w-full flex bg-white rounded-md border border-white border-solid active:bg-primary active:text-white focus:bg-primary focus:text-white">
                    <img width="20" height="20" src={user} />
                    <p className="ml-2">Profile</p>
                  </button>
                </Link>
                <button onClick={handleLogout} className="pl-2 py-1 w-full flex text-red-600 bg-white rounded-md border border-white border-solid active:border active:bg-gray-100 focus:bg-gray-100">
                  <img width="20" height="20" src={quit} />
                  <p className="ml-2">Keluar</p>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
