import React from 'react';
import image from '../assets/images/Oh no-cuate 1.webp';

interface TransferSuccessModalProps {
  onClose?: () => void;
  onTryAgain?: () => void;
  onBackTo?: () => void;
}

const TransferSuccessModal: React.FC<TransferSuccessModalProps> = ({ onClose, onTryAgain, onBackTo }) => {


  return (
    <div className="absolute h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="bg-white w-auto p-5 rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col font-montserrat">
          <div className="flex w-full border-b border-gray-200 text-gray-400 text-sm font-semibold">TRANSFER TO GHALUH 1</div>
          <div className="flex flex-col justify-center">
            <img src={image} alt="contact-us" className="mx-16" />
            <div className="flex flex-col items-center">
              <div className="font-semibold">Oops Transfer <span className="text-red-600">Failed</span></div>
              <div className="text-sm text-gray-400 mt-2">Sorry There is an issue for your transfer, try again later!</div>
            </div>
            <div className="flex flex-col items-center mt-2">
              <button
                onClick={onTryAgain}
                className="bg-blue-600 h-12 w-full rounded-lg text-white font-light tracking-wider my-2"
              >
                Try Again
              </button>
              <button
                onClick={onBackTo}
                className="border border-blue-600 h-12 w-full rounded-lg text-blue-600 font-semibold tracking-wider my-2"
              >
                Back To Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferSuccessModal;
