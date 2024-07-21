import React, { useState } from "react";

type InputPinProps = {
  length: number;
};

function InputPin({ length }: InputPinProps) {
  const [pin, setPin] = useState<string[]>(new Array(length).fill(""));

  const handleChange = (value: string, index: number) => {
    if (value === "" || /^[0-9]$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Otomatis fokus pada input field berikutnya atau sebelumnya jika dihapus
      if (value !== "" && index < pin.length - 1) {
        (document.getElementById(`pin-${index + 1}`) as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newPin = [...pin];
      if (pin[index] === "" && index > 0) {
        newPin[index - 1] = "";
        setPin(newPin);
        (document.getElementById(`pin-${index - 1}`) as HTMLInputElement).focus();
      } else {
        newPin[index] = "";
        setPin(newPin);
      }
    }
  };

  return (
    <form>
      <div className="flex justify-between mb-6">
        {pin.map((digit, index) => (
          <input
            key={index}
            id={`pin-${index}`}
            type="tel"
            maxLength={1}
            className="w-7 h-10 py-5 text-center font-semibold text-lg border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
    </form>
  );
}

export default InputPin;
