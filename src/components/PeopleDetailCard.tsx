import React from 'react';
import verifiedIcon from "../assets/icons/verified.svg";

interface PeopleCardProps {
  image: string;
  name: string;
  phoneNumber: string;
  isVerified: boolean;
  favoriteIcon: string;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ image, name, phoneNumber, isVerified, favoriteIcon }) => {
  return (
    <div className="flex w-full bg-gray-100 rounded-md p-4 justify-between items-center">
      <div className="flex gap-4">
        <img src={image} alt="user-image" className="rounded-md w-24 h-24" />
        <div className="flex flex-col gap-2 justify-center">
          <div>{name}</div>
          <div className="text-gray-500 font-normal">{phoneNumber}</div>
          <div className={`flex w-fit h-5 px-2 text-sm ${isVerified ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'} font-extralight tracking-wider rounded-md items-center gap-1`}>
            {isVerified && <img src={verifiedIcon} alt="verified" />}
            {isVerified ? 'Verified' : 'Not Verified'}
          </div>
        </div>
      </div>
      <img src={favoriteIcon} alt="Favorite" className="w-5 h-5" />
    </div>
  );
};

export default PeopleCard;
