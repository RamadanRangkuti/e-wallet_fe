import walletIcon from "../assets/icons/wallet.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import googleIcon from "../assets/icons/google-icon.svg";
import eyeIcon from "../assets/icons/eye-icon.svg";
import eyeOffIcon from "../assets/icons/eye-off-icon.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import passwordIcon from "../assets/icons/password-icon.svg";
import loginLogo from "../assets/images/login.webp";

import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <main className="font-montserrat md:grid md:grid-cols-2 md:bg-bgprimary w-full h-full">
      <section className="bg-white px-5 md:px-20 py-36 md:rounded-r-3xl">
        <div className="flex flex-wrap">
          <img className="mr-3" src={walletIcon} alt="wallet" />
          <div className="my-auto">
            <p className="text-primary text-xl font-nunitosans font-semibold">E-Wallet</p>
          </div>
        </div>
        <div className="block">
          <p className="text-black text-lg md:text-2xl font-semibold my-2">Hello Welcome Back 👋</p>
          <p className="text-gray-500 text-xs md:text-sm">Fill out the form correctly or you can login with several option.</p>
        </div>
        <div className="my-2 flex md:block justify-around">
          <button className="w-1/2 h-12 mr-5 md:mr-0 md:mb-2 md:w-full border border-solid border-gray-200 rounded-full hover:bg-darkwhite active:bg-darkwhite2">
            <div className="flex justify-center">
              <img className="uw:w-8 uw:h-8" width="22" height="22" src={googleIcon} alt="google-icon" />
              <div className="hidden md:flex uw:text-2xl ml-6">Sign In With Google</div>
            </div>
          </button>
          <button className="w-1/2 h-12 md:w-full border border-solid border-gray-200 rounded-full hover:bg-darkwhite active:bg-darkwhite2">
            <div className="flex justify-center">
              <img className="uw:w-8 uw:h-8" width="22" height="22" src={facebookIcon} alt="facebook-icon" />
              <div className="hidden md:flex uw:text-2xl ml-6">Sign In With Facebook</div>
            </div>
          </button>
        </div>
        <p className="text-center text-xs uw:text-2xl text-gray-500">Or</p>

        <form className="mt-2">
          <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="email">
            Email
          </label>
          <div className="relative mt-2">
            <img className="absolute mt-[11px] ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
            <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email" }} />
          </div>
          <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="pwd">
            Password
          </label>
          <div className="relative mt-2">
            <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
            <img className="absolute mt-3.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={togglePasswordVisibility} />
            <Input input={{ type: showPassword ? "text" : "password", name: "pwd", placeholder: "Enter Your Password", autocomplete: "off" }} />
          </div>
          <button className="text-white uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
            Login
          </button>
          <p className="text-center text-lightgray text-sm uw:text-2xl my-2">
            Not Have An Account?
            <Link to="/register" className="text-primary hover:text-blue-700 hover:underline active:text-blue-800 active:underline">
              Register
            </Link>
          </p>
        </form>
      </section>
      <section className="hidden md:grid md:place-items-center">
        <img width="700" height="700" src={loginLogo} alt="login" />
      </section>
    </main>
  );
}

export default Login;
