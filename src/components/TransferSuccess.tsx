import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/Contact us-pana 1.webp';

interface TransferSuccessModalProps {
  onClose?: () => void;
  onTransferAgain?: () => void;
  recieverName?: string | null;
}

const TransferSuccessModal: React.FC<TransferSuccessModalProps> = ({ onClose, onTransferAgain, recieverName }) => {
  const navigate = useNavigate();

  const handleTransferAgain = () => {
    if (onTransferAgain) onTransferAgain();
    navigate('/user/transfer');
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onTransferAgain}>
      <div className="bg-white w-64 md:w-auto p-5 rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col font-montserrat">
          <div className="flex w-full border-b border-gray-200 text-gray-400 text-xs md:text-sm font-semibold">TRANSFER TO {recieverName}</div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center mx-10 md:mx-16 w-32 md:w-full">
              <img src={image} alt="contact-us" />
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold">Yeay Transfer <span className="text-green-600">Success</span></div>
              <div className="text-sm text-gray-400 mt-2">Thank you for using this application for your financial needs</div>
            </div>
            <div className="flex flex-col items-center mt-2 w-full">
              <button
                onClick={onClose}
                className="bg-blue-600 h-10 md:h-12 w-full rounded-lg text-white text-sm md:text-base font-light tracking-wider my-2"
              >
                Done
              </button>
              <button
                onClick={handleTransferAgain}
                className="border border-blue-600 h-10 md:h-12 w-full rounded-lg text-blue-600 text-sm md:text-base font-normal tracking-wider my-2"
              >
                Transfer Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSuccessModal;
