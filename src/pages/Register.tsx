import walletIcon from "../assets/icons/wallet.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import googleIcon from "../assets/icons/google-icon.svg";
import eyeIcon from "../assets/icons/eye-icon.svg";
import eyeOffIcon from "../assets/icons/eye-off-icon.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import passwordIcon from "../assets/icons/password-icon.svg";
import registerLogo from "../assets/images/register.webp";

import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Register() {
  const [form, setForm] = useState<{ email: string; password: string }>({ email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => {
      return {
        ...form,
        [e.target.name]: e.target.value,
      };
    });
  };


  const onConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      return setErrorMessage("Harap masukkan email valid");
    }
    if (form.password.length < 8) {
      return setErrorMessage("Password harus memiliki minimal 8 karakter");
    }
    if (form.password !== confirmPassword) {
      return setErrorMessage("Password harus sama");
    }
    setErrorMessage("");
    try {
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/auth/register`;
      const result = await axios.post(url, form);
      console.log(result.data);
      Swal.fire({
        title: "Success!",
        text: "Register Success",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      navigate("/login");
    } catch (err) {
      Swal.fire({
        title: "Failed!",
        text: "Register Failed!",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
        position: "top-end",
        customClass: {
          popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
        },
        toast: true,
      });
      console.log(err);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return (
    <main className="font-montserrat md:grid md:grid-cols-2 md:bg-bgprimary w-full h-screen">
      <section className="bg-white px-5 md:px-20 py-10 md:py-5 md:rounded-r-3xl">
        <div className="flex">
          <img className="mr-3" src={walletIcon} alt="wallet" />
          <div className="my-auto">
            <p className="text-primary text-xl font-nunitosans font-semibold">E-Wallet</p>
          </div>
        </div>
        <div className="block">
          <p className="text-black font-semibold my-2">Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</p>
          <p className="text-gray-500 text-xs">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</p>
        </div>
        <div className="my-2 flex md:block">
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
        <form onSubmit={onSubmitHandler} className="mt-2">
          <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="email">
            Email
          </label>
          <div className="relative mt-2">
            <img className="absolute mt-[11px] ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
            <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email", value: form.email, onChange: onChangeHandler }} />
          </div>
          <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="password">
            Password
          </label>
          <div className="relative mt-2">
            <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
            <img className="absolute mt-3.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={togglePasswordVisibility} />
            <Input input={{ type: showPassword ? "text" : "password", name: "password", placeholder: "Enter Your Password", autocomplete: "off", value: form.password, onChange: onChangeHandler }} />
          </div>
          <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="confirmpassword">
            Confirm Password
          </label>
          <div className="relative mt-2">
            <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
            <img className="absolute mt-3.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showConfirmPassword ? eyeOffIcon : eyeIcon} alt="toggle-confirm-password-visibility" onClick={toggleConfirmPasswordVisibility} />
            <Input input={{ type: showConfirmPassword ? "text" : "password", name: "confirmpassword", placeholder: "Enter Your Password Again", autocomplete: "off", value: confirmPassword, onChange: onConfirmPasswordChange }} />
          </div>
          <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="pin">
            Pin
          </label>
          <div className="relative mt-2">
            <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="pin-icon" />
            <Input input={{ type: "password", name: "pin", placeholder: "Enter Your Pin", autocomplete: "off", maxLength: 6, value: form.pin, onChange: onChangePinHandler }} />
          </div>
          {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}
          <button className="text-white uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
            Register
          </button>
          <p className="text-center text-lightgray text-sm uw:text-2xl my-2">
            Have An Account?
            <Link to="/login" className="text-primary hover:text-blue-700 hover:underline active:text-blue-800 active:underline">
              Login
            </Link>
          </p>
        </form>
      </section>
      <section className="hidden md:grid md:place-items-center">
        <img width="700" height="700" src={registerLogo} alt="register" />
      </section>
    </main>
  );
}

export default Register;
