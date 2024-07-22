import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/Contact us-pana 1.webp';

interface TransferSuccessModalProps {
  onClose?: () => void;
}

const TransferSuccessModal: React.FC<TransferSuccessModalProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleTransferAgain = () => {
    navigate('/user/transfer');
  };

  return (
    <div className="absolute h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white w-auto p-5 rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col font-montserrat">
          <div className="flex w-full border-b border-gray-200 text-gray-400 text-sm font-semibold">TRANSFER TO GHALUH 1</div>
          <div className="flex flex-col justify-center">
            <img src={image} alt="contact-us" className="mx-16" />
            <div className="flex flex-col items-center">
              <div className="font-semibold">Yeay Transfer <span className="text-green-600">Success</span></div>
              <div className="text-sm text-gray-400 mt-2">Thank you for using this application for your financial needs</div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <button
                onClick={onClose}
                className="bg-blue-600 h-12 w-full rounded-lg text-white font-light tracking-wider my-2"
              >
                Done
              </button>
              <button
                onClick={handleTransferAgain}
                className="border border-blue-600 h-12 w-full rounded-lg text-blue-600 font-semibold tracking-wider my-2"
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
