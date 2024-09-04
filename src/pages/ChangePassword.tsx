import passwordIcon from "../assets/icons/password-icon.svg";
import eyeIcon from "../assets/icons/eye-icon.svg";
import eyeOffIcon from "../assets/icons/eye-off-icon.svg";

import Input from "../components/Input";
import NavbarProfile from "../components/NavbarProfile";
import { useEffect, useState } from "react";
import { useStoreSelector } from "../redux/hooks";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

function ChangePassword() {
  const [form, setForm] = useState<{ password: string; newpassword: string }>({ password: "", newpassword: "" });
  const { token } = useStoreSelector((state) => state.auth);
  const [id, setId] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showExistingPassword, setShowExistingPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.newpassword !== confirmPassword) {
      return setErrorMessage("Password harus sama");
    }
    setErrorMessage("");
    const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/editpassword/${id}`;
    axios
      .put(url, form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Update Success",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          customClass: {
            popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
          },
          toast: true,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Failed!",
          text: "Update Failed!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          customClass: {
            popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
          },
          toast: true,
        });
        console.error(err);
      });
  };

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
          <form onSubmit={onSubmitHandler} className="mt-3">
            <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="password">
              Existing Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="password-icon" />
              <img className="absolute mt-2.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showExistingPassword ? eyeOffIcon : eyeIcon} alt="toggle-existing-password-visibility" onClick={toggleExistingPasswordVisibility} />
              <Input input={{ type: showExistingPassword ? "text" : "password", name: "password", placeholder: "Enter Your Existing Password", autocomplete: "off", value: form.password, onChange: onChangeHandler }} />
            </div>
            <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="newpassword">
              New Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
              <img className="absolute mt-2.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showNewPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={toggleNewPasswordVisibility} />
              <Input input={{ type: showNewPassword ? "text" : "password", name: "newpassword", placeholder: "Enter Your Password Again", autocomplete: "off", value: form.newpassword, onChange: onChangeHandler }} />
            </div>
            <label className="font-semibold md:text-xl uw:text-2xl" htmlFor="confirmpassword">
              Confirm New Password
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={passwordIcon} alt="confirmpassword-icon" />
              <img className="absolute mt-2.5 mr-5 right-0 cursor-pointer" width="20" height="20" src={showConfirmNewPassword ? eyeOffIcon : eyeIcon} alt="toggle-password-visibility" onClick={toggleConfirmNewPasswordVisibility} />
              <Input input={{ type: showConfirmNewPassword ? "text" : "password", name: "confirmpassword", placeholder: "Enter Your Password Again", autocomplete: "off", value: confirmPassword, onChange: onConfirmPasswordChange }} />
            </div>
            {errorMessage && <p className="text-red-500 text-sm mb-3">{errorMessage}</p>}
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
