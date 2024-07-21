// PeopleCard.tsx
import React from 'react';

interface PeopleCardProps {
  person: {
    image?: string;
    name?: string;
    phoneNumber?: string;
    favorite?: string;
  };
  index: number;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ person, index }) => {
  return (
    <div key={index} className={`flex w-full items-center justify-between px-4 py-2 rounded-md font-normal ${index % 2 === 0 ? 'bg-gray-100 border-b' : ''}`}>
      <div className="px-20">

        <img src={person.image} alt={person.name} className="w-12 h-12 rounded-md" />
      </div>

      <div>{person.name}</div>
      <div>{person.phoneNumber}</div>
      <img src={person.favorite} alt="Favorite" className="w-5 h-5" />
    </div>
  );
};

export default PeopleCard;
