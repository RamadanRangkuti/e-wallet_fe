import axios from "axios";
import NavbarProfile from "../components/NavbarProfile";
import { useEffect, useState } from "react";
import { useStoreSelector } from "../redux/hooks";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ChangePassword() {
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));
  const { token } = useStoreSelector((state) => state.auth);
  const [id, setId] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      (document.getElementById(`pin-${index + 1}`) as HTMLInputElement).focus();
    }

    setPin(newPin);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace" && pin[index] === "") {
      if (index > 0) {
        const newPin = [...pin];
        newPin[index - 1] = "";
        setPin(newPin);
        (document.getElementById(`pin-${index - 1}`) as HTMLInputElement).focus();
      }
    }
  };

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredPin = pin.join("");
    try {
      const formData = new FormData();
      if (enteredPin.length === 6) {
        formData.append("pin", enteredPin);
      }
      const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/editpin/${id}`;
      await axios.put(url, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
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
      navigate("/user");
    } catch (err) {
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
    }
  };

  return (
    <main className="font-montserrat w-full">
      <div className="md:mt-5">
        <NavbarProfile />
        <div className="px-5 py-20 md:border md:border-solid md:mx-5">
          <h1 className="text-center text-black font-bold">Change Pin 👋</h1>
          <p className="text-[11px] mt-2 text-gray-500 text-center">Please save your pin because this so important.</p>
          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex justify-around mb-10 tbt:px-40">
              {pin.map((digit, index) => (
                <input
                  key={index}
                  id={`pin-${index}`}
                  type="text"
                  maxLength={1}
                  className="w-7 h-10 py-5 text-center font-semibold text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  autoFocus={index === 0}
                />
              ))}
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
