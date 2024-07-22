import walletIcon from "../assets/icons/wallet.svg";
import enterPinLogo from "../assets/images/enterpin.webp";
// import emailIcon from "../assets/icons/email-icon.svg";

// import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";

function EnterPin() {
  const [pin, setPin] = useState<string[]>(new Array(5).fill(""));

  const handleChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      (document.getElementById(`pin-${index + 1}`) as HTMLInputElement).focus();
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
        <div className="block">
          <p className="text-black md:text-2xl font-semibold my-5">Enter Your Pin 👋</p>
          <p className="text-gray-500 text-xs">Please save your pin because this so important.</p>
        </div>
        <form className="mt-5">
          <div className="flex justify-between mb-6">
            {pin.map((digit, index) => (
              <input
                key={index}
                id={`pin-${index}`}
                type="text"
                maxLength={1}
                className="w-7 h-10 py-5 text-center font-semibold text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
              />
            ))}
          </div>
          <button className="text-white mt-3 uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
            Submit
          </button>
          <p className="text-center text-lightgray text-sm uw:text-2xl my-2">
            Forgot Your Pin?
            <Link to="#" className="text-primary hover:text-blue-700 hover:underline active:text-blue-800 active:underline">
              Reset
            </Link>
          </p>
        </form>
      </section>
      <section className="hidden md:inline-block md:mt-auto">
        <img width="550" height="550" src={enterPinLogo} alt="register" />
      </section>
    </main>
  );
}

export default EnterPin;
