import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TransferSuccessModal from "./TransferSuccess";
import TransferFailedModal from "./TransferFailed";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface EnterPinModalProps {
  onClose: () => void;
  onSuccess: () => void;
  onFailure: () => void;
  userId: number;
  targetId: number;
  amount: number;
  notes?: string;
}

function EnterPinModal({ onClose, onSuccess, onFailure, userId, targetId, amount, notes }: EnterPinModalProps) {
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showFailedModal, setShowFailedModal] = useState<boolean>(false);

  const token = useSelector((state: RootState) => state.auth.token);

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

  const handleSubmit = async () => {
    const enteredPin = pin.join("");
    const correctPin = "123456"; // Dummy PIN for validation

    if (enteredPin === correctPin) {
      try {
        const formData = new FormData();
        formData.append("sender_id", userId.toString());
        formData.append("receiver_id", targetId.toString());
        formData.append("amount", amount.toString());
        formData.append("notes", notes || "");
        console.log('form data:', formData)

        const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/transactions/transfer`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
        );
        console.log(res);

        // On success, display success modal and call onSuccess
        setShowSuccessModal(true);
        onSuccess();
      } catch (error) {
        console.error("Error making transfer:", error);
        // On failure, display failure modal and call onFailure
        setShowFailedModal(true);
        onFailure();
      }
    } else {
      // On incorrect PIN, display failure modal and call onFailure
      setShowFailedModal(true);
      onFailure();
    }
  };

  return (
    <>
      {showSuccessModal && <TransferSuccessModal onClose={() => setShowSuccessModal(false)} />}
      {showFailedModal && <TransferFailedModal onTryAgain={() => setShowFailedModal(false)} />}
      <div className="absolute inset-0 flex items-center justify-center z-40 bg-black bg-opacity-30" onClick={onClose}>
        <div className="bg-white w-auto p-5 rounded-md shadow-md relative" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col font-montserrat">
            <div className="flex w-full border-b border-gray-200 text-gray-400 text-xs md:text-sm font-semibold">TRANSFER TO GHALUH 1</div>
            <div className="flex flex-col justify-center my-8">
              <div className="flex text-base md:text-xl mb-2 font-semibold">Enter Your Pin 👋</div>
              <div className="text-xs md:text-sm text-gray-400">Enter Your Pin For Transaction</div>
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
              <div className="flex flex-col items-center">
                <button onClick={handleSubmit} className="bg-blue-600 h-10 md:h-12 w-full rounded-lg text-white text-sm md:text-base font-light tracking-wider my-2">
                  Next
                </button>
                <div className="text-xs md:text-sm">
                  Forgot Your Pin?{" "}
                  <Link to="#" className="text-blue-600">
                    {" "}
                    Reset
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnterPinModal;
