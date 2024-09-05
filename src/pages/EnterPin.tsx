import walletIcon from "../assets/icons/wallet.svg";
import enterPinLogo from "../assets/images/enterpin.webp";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStoreSelector } from "../redux/hooks";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

function EnterPin() {
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));
  const { token } = useStoreSelector((state) => state.auth);
  const [id, setId] = useState<string>("");
  const [userPin, setUserPin] = useState<string>("")
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

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);


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
        console.log(result.data.data[0]);
        setUserPin(result.data.data[0].pin);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [id, token]);

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

  const handleSubmit = async () => {
    const enteredPin = pin.join("");

    const data = {
      id: id,
      pin: enteredPin
    }

    const pinData = {
      pin: enteredPin
    }

    if (userPin) {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/auth/enterpin`;
        const result = await axios.post(url, data, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        });
        console.log(result.data);
        Swal.fire({
          title: "Success!",
          text: "Logged In",
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
          text: "Wrong Pin!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          customClass: {
            popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
          },
          toast: true,
        });
      }
    } else {
      try {

        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/editpin/${id}`;
        console.log(url);
        await axios.put(url, pinData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        Swal.fire({
          title: "Success!",
          text: "Logged In",
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
          text: "Update Pin Error!",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
          position: "top-end",
          customClass: {
            popup: "border-solid border-5 border-primary text-sm rounded-lg shadow-lg mt-8 tbt:mt-16",
          },
          toast: true,
        });
      }
    }
  };



  return (
    <main className="font-montserrat grid place-items-center md:grid-cols-2 bg-bgprimary h-screen">
      <section className="bg-white rounded-3xl w-4/5 tbt:w-96 md:w-full md:h-full md:rounded-r-3xl md:rounded-l-none px-5 md:px-20 py-10 md:py-52">
        <div className="flex flex-wrap">
          <img className="mr-3" src={walletIcon} alt="wallet" />
          <div className="my-auto">
            <p className="text-primary text-xl font-nunitosans font-semibold">E-Wallet</p>
          </div>
        </div>
        {userPin ? (
          <>
            <div className="block">
              <p className="text-black md:text-2xl font-semibold my-5">Enter Your Pin 👋</p>
              <p className="text-gray-500 text-xs">Please save your pin because this so important.</p>
            </div>
          </>
        ) :
          <div className="block">
            <p className="text-black md:text-2xl font-semibold my-5">Create Your Pin 👋</p>
            <p className="text-gray-500 text-xs">Please save your pin because this so important.</p>
          </div>
        }
        <div className="flex justify-between mb-6">
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pin-${index}`}
              type="password"
              maxLength={1}
              className="w-7 h-10 py-5 text-center font-semibold text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              autoFocus={index === 0}
            />
          ))}
        </div>
        <button onClick={handleSubmit} className="text-white mt-3 uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
          Submit
        </button>
        <p className="text-center text-lightgray text-sm uw:text-2xl my-2">
          Forgot Your Pin?
          <Link to="#" className="text-primary hover:text-blue-700 hover:underline active:text-blue-800 active:underline">
            Reset
          </Link>
        </p>
      </section>
      <section className="hidden md:inline-block md:mt-auto">
        <img width="550" height="550" src={enterPinLogo} alt="register" />
      </section>
    </main>
  );
}

export default EnterPin;
