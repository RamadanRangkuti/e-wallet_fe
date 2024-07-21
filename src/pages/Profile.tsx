import userIcon from "../assets/icons/user.svg"
import editProfile from "../assets/icons/edit-profile.svg"
import deleteProfile from "../assets/icons/delete-profile.svg"
import emailIcon from "../assets/icons/email-icon.svg";
import phoneIcon from "../assets/icons/phone-icon.svg";
import profile2Blue from "../assets/icons/profile2-blue.svg";

import Input from "../components/Input";
import UserFooter from "../components/UserFooter";
import { Link } from "react-router-dom";


function Profile() {
  return (
    <main className="font-montserrat md:flex w-full">
    <div className="w-full md:mt-5">
          <div className='flex items-center bg-primary w-full text-white text-xs md:text-base md:font-bold px-5 py-2 md:bg-white md:text-black'>
              <img className="hidden md:flex" width="20" src={profile2Blue} alt="" />
              <p className="md:ml-3">Profile</p>
          </div>
          <div className="p-5 md:border md:border-solid md:mx-5">
              <h1 className="text-xs md:text-base text-black font-semibold">Profile Picture</h1>
              <div className="flex my-3">
                  <div className="mr-5 bg-gray-100 rounded-lg w-40 tbt:w-32 grid place-items-center">
                      <img width="30" height="30" src={userIcon} alt="user" />
                  </div>
                  <div className="w-full">
                      <button className="w-40 h-10 items-center flex bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg">
                          <div className="flex px-2 py-2">
                              <img width="15" src={editProfile} alt="edit-profile" />
                              <p className="text-white text-xs ml-2">Change Profile</p>
                          </div>
                      </button>
                      <button className="w-40 h-10 items-center flex bg-white hover:bg-gray-50 active:bg-gray-100 border border-solid border-red-600 rounded-lg rounded-lg mt-5">
                          <div className="flex px-2 py-2">
                              <img width="15" src={deleteProfile} alt="edit-profile" />
                              <p className="text-red-600 text-xs ml-2">Delete Profile</p>
                          </div>
                      </button>
                  </div>
              </div>
              <p className="text-[10px] md:text-xs">The profile picture must be 512 x 512 pixels or less</p>
              <form className="mt-3">
                  <label className="font-semibold text-sm md:text-base uw:text-2xl" htmlFor="full_name">
                      Full Name
                  </label>
                  <div className="relative mt-2">
                      <img className="absolute mt-[11px] ml-5" width="20" height="20" src={userIcon} alt="email-icon" />
                      <Input input={{ type: "text", name: "full_name", placeholder: "Enter Full Name", autocomplete: "name" }} />
                  </div>
                  <label className="font-semibold text-sm md:text-base uw:text-2xl" htmlFor="phone">
                      Phone
                  </label>
                  <div className="relative mt-2">
                      <img className="absolute mt-[11px] ml-5" width="20" height="20" src={phoneIcon} alt="email-icon" />
                      <Input input={{ type: "text", name: "phone", placeholder: "Enter Your Number Phone", autocomplete: "off" }} />
                  </div>
                  <label className="font-semibold text-sm md:text-base uw:text-2xl" htmlFor="email">
                      Email
                  </label>
                  <div className="relative mt-2">
                      <img className="absolute mt-[11px] ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
                      <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email" }} />
                  </div>
                  <p className="font-semibold text-sm mb-2 md:text-base uw:text-2xl">
                      Password
                  </p>
                  <Link to="#" className="flex mb-4 text-primary text-sm md:text-base uw:text-xl hover:underline">
                      Change Password
                  </Link>
                  <p className="font-semibold text-sm mb-2 md:text-base uw:text-2xl">
                      Pin
                  </p>
                  <Link to="#" className="flex mb-4 text-primary text-sm md:text-base uw:text-xl hover:underline">
                      Change Pin
                  </Link>
                  <button className="text-white text-sm uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
                      Submit
                  </button>
              </form>
          </div>
    </div>
          <UserFooter />
      </main>
  )
}

export default Profile