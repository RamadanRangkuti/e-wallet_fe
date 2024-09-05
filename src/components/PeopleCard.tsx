import peopleImage from "../assets/images/user.webp";

interface PeopleCardProps {
  person: {
    id: number;
    image?: string;
    fullname?: string;
    phoneNumber?: string;
  };
  favorite?: string;
  index: number;
  onClick: (id: number) => void;
}

function PeopleCard({ person, favorite, index, onClick }: PeopleCardProps) {
  return (
    <div
      key={person.id}
      className={`flex w-full items-center justify-between px-4 py-2 rounded-md text-xs md:text-base font-normal cursor-pointer ${index % 2 === 0 ? 'bg-gray-100 border-b' : ''}`}
      onClick={() => onClick(person.id)}
    >
      <div className="md:px-20 max-w-52">
        <img src={person.image || peopleImage} alt={person.fullname || 'Person'} className="w-12 h-12 rounded-md" />
      </div>
      <div className="flex justify-center w-52">{person.fullname || 'Unknown'}</div>
      <div className="flex justify-center w-52">{person.phoneNumber || 'N/A'}</div>
      <img src={favorite || 'default-favorite.png'} alt="Favorite" className="w-5 h-5" />
    </div>
  );
}

export default PeopleCard;
