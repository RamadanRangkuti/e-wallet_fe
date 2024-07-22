import passwordIcon from "../assets/icons/password-icon.svg";
import eyeIcon from "../assets/icons/eye-icon.svg";
import eyeOffIcon from "../assets/icons/eye-off-icon.svg";

import Input from "../components/Input";
import NavbarProfile from "../components/NavbarProfile";
import { useState } from "react";

function ChangePassword() {
  const [showExistingPassword, setShowExistingPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const toggleExistingPasswordVisibility = () => {
    setShowExistingPassword((prev) => !prev);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword((prev) => !prev);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword((prev) => !prev);
  };

  return (
    <main className="font-montserrat w-full">
      <div className="md:mt-5">
        <NavbarProfile />
        <div className="p-5 md:border md:border-solid md:mx-5">
          <h1 className="text-xs md:text-base text-black font-semibold">Change Password</h1>
          <form className="mt-3">
            <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="existingpassword">
              Existing Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
              <img className="absolute mt-2.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showExistingPassword ? eyeOffIcon : eyeIcon} alt="toggle-existing-password-visibility" onClick={toggleExistingPasswordVisibility} />
              <Input input={{ type: showExistingPassword ? "text" : "password", name: "existingpassword", placeholder: "Enter Your Existing Password", autocomplete: "off" }} />
            </div>
            <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="newpassword">
              New Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
              <img className="absolute mt-2.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showNewPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={toggleNewPasswordVisibility} />
              <Input input={{ type: showNewPassword ? "text" : "password", name: "newpassword", placeholder: "Enter Your Password Again", autocomplete: "off" }} />
            </div>
            <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="confirmnewpassword">
              Confirm New Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
              <img className="absolute mt-2.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showConfirmNewPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={toggleConfirmNewPasswordVisibility} />
              <Input input={{ type: showConfirmNewPassword ? "text" : "password", name: "confirmnewpassword", placeholder: "Enter Your Password Again", autocomplete: "off" }} />
            </div>
            <button className="text-white text-sm uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ChangePassword;
