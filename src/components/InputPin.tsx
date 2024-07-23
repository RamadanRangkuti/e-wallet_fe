import React, { useState } from "react";

type InputPinProps = {
  length: number;
};

function InputPin({ length }: InputPinProps) {
  const [pin, setPin] = useState<string[]>(new Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;

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

  return (
    <form>
      <div className="flex justify-between mb-10 mt-4 gap-2 md:gap-4">
        {pin.map((digit, index) => (
          <input
            key={index}
            id={`pin-${index}`}
            type="text"
            maxLength={1}
            className="w-8 md:w-12 h-8 md:h-12 py-5 text-center font-semibold text-base md:text-xl border-b border-gray-300 focus:outline-none focus:border-blue-500"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            autoFocus={index === 0}
          />
        ))}
      </div>
    </form>
  );
}

export default InputPin;
