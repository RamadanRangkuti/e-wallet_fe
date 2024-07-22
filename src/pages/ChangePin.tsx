import NavbarProfile from "../components/NavbarProfile";
import { useState } from "react";

function ChangePassword() {
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));

  const handleChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      (document.getElementById(`pin-${index + 1}`) as HTMLInputElement).focus();
    }
  };

  return (
    <main className="font-montserrat w-full">
      <div className="md:mt-5">
        <NavbarProfile />
        <div className="px-5 py-20 md:border md:border-solid md:mx-5">
          <h1 className="text-center text-black font-bold">Change Pin 👋</h1>
          <p className="text-[11px] mt-2 text-gray-500 text-center">Please save your pin because this so important.</p>
          <form className="mt-10">
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
