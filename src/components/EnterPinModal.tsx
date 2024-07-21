import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TransferSuccessModal from './TransferSuccess';
import TransferFailedModal from './TransferFailed';

interface EnterPinModalProps {
  onClose: () => void;
  onSuccess: () => void;
  onFailure: () => void;
}

const EnterPinModal: React.FC<EnterPinModalProps> = ({ onClose, onSuccess, onFailure }) => {
  const [pin, setPin] = useState<string[]>(new Array(6).fill(""));
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showFailedModal, setShowFailedModal] = useState<boolean>(false);

  const handleChange = (value: string, index: number) => {
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    if (value && index < pin.length - 1) {
      (document.getElementById(`pin-${index + 1}`) as HTMLInputElement).focus();
    }
  };

  const handleSubmit = () => {
    const enteredPin = pin.join('');
    const correctPin = '123456'; // Dummy correct PIN

    if (enteredPin === correctPin) {
      setShowSuccessModal(true);
      onSuccess();
    } else {
      setShowFailedModal(true);
      onFailure();
    }
  };

  return (
    <>
      {showSuccessModal && <TransferSuccessModal onClose={() => setShowSuccessModal(false)} />}
      {showFailedModal && <TransferFailedModal onClose={() => setShowFailedModal(false)} />}

      <div className="absolute h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
        <div className="bg-white w-auto p-5 rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col font-montserrat">
            <div className="flex w-full border-b border-gray-200 text-gray-400 text-sm font-semibold">TRANSFER TO GHALUH 1</div>
            <div className="flex flex-col justify-center my-8">
              <div className="flex text-xl mb-2 font-semibold">
                Enter Your Pin 👋
              </div>
              <div className="text-sm text-gray-400">Enter Your Pin For Transaction</div>
              <div className="flex justify-between mb-10 mt-4 gap-4">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    id={`pin-${index}`}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 py-5 text-center font-semibold text-xl border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    autoFocus={index === 0}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 h-12 w-full rounded-lg text-white font-light tracking-wider my-2"
                >
                  Next
                </button>
                <div className="text-sm">Forgot Your Pin? <Link to="#" className="text-blue-600"> Reset</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterPinModal;
