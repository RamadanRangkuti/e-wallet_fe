import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/Contact us-pana 1.webp';


import { useStoreSelector } from '../redux/hooks';
import { IProfileBody } from '../types/profile';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface TransferSuccessModalProps {
  onClose?: () => void;
  onTransferAgain?: () => void; // Add the new prop
}

export const TopupSuccessModal: React.FC<TransferSuccessModalProps> = ({ onClose, onTransferAgain }) => {
  const navigate = useNavigate();

  const { token } = useStoreSelector((state) => state.auth);
  const [id, setId] = useState<string>("");
  const [getProfile, setProfile] = useState<IProfileBody[]>([]);

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
        setProfile(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataUser();
  }, [id, token]);



  const handleTopupAgain = () => {
    if (onTransferAgain) onTransferAgain();
    navigate('/user/topup');
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={onTransferAgain}>
      <div className="bg-white w-64 md:w-auto p-5 rounded-md shadow-md" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col font-montserrat">
          <div className="flex w-full border-b border-gray-200 text-gray-400 text-xs md:text-sm font-semibold">TOPUP TO {getProfile[0]?.fullname}</div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center mx-10 md:mx-16 w-32 md:w-full">
              <img src={image} alt="contact-us" />
            </div>
            <div className="flex flex-col items-center">
              <div className="font-semibold">Yeay Topup <span className="text-green-600">Success</span></div>
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
                onClick={handleTopupAgain}
                className="border border-blue-600 h-10 md:h-12 w-full rounded-lg text-blue-600 text-sm md:text-base font-normal tracking-wider my-2"
              >
                Topup Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

