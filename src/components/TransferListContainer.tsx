import { useNavigate } from "react-router-dom";
import PeopleCard from "../components/PeopleCard";
import searchIcon from "../assets/icons/searchDark.svg";
import image1 from "../assets/images/people1.png";
import image2 from "../assets/images/people2.png";
import image3 from "../assets/images/people3.png";
import image4 from "../assets/images/people4.png";
import image5 from "../assets/images/people5.png";
import image6 from "../assets/images/people6.png";
import image7 from "../assets/images/people7.png";
import image8 from "../assets/images/people8.png";
import unfilledStar from "../assets/icons/UnfilledStar.svg";

interface TransferListContainerProps {
  onSelectPerson: (id: number) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const peopleData = [
  { id: 1, image: image1, name: "Ghaluh 1", phoneNumber: "(239)555-0108", favorite: unfilledStar },
  { id: 2, image: image2, name: "Ghaluh 2", phoneNumber: "(480)555-0103", favorite: unfilledStar },
  { id: 3, image: image3, name: "Ghaluh 3", phoneNumber: "(225)555-0118", favorite: unfilledStar },
  { id: 4, image: image4, name: "Ghaluh 4", phoneNumber: "(406)555-0120", favorite: unfilledStar },
  { id: 5, image: image5, name: "Ghaluh 5", phoneNumber: "(303)555-0105", favorite: unfilledStar },
  { id: 6, image: image6, name: "Ghaluh 6", phoneNumber: "(808)555-0111", favorite: unfilledStar },
  { id: 7, image: image7, name: "Ghaluh 7", phoneNumber: "(671)555-0110", favorite: unfilledStar },
  { id: 8, image: image8, name: "Ghaluh 8", phoneNumber: "(270)555-0117", favorite: unfilledStar },
];

function TransferListContainer({ onSelectPerson }: TransferListContainerProps) {
  const navigate = useNavigate();

  const handleSelectPerson = (id: number) => {
    onSelectPerson(id);
    navigate(`/user/transfer/${id}`);
  };

  return (
    <div className="flex flex-col md:border md:mr-8 px-5 py-6">
      <div className="flex flex-col font-semibold gap-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-xs md:text-base">Find People</div>
          <div className="relative w-full md:w-fit">
            <input
              type="text"
              placeholder="Enter Number or Fullname"
              className="text-xs md:text-base w-full md:w-72 py-2 pl-2 md:pl-4 md:pr-10 h-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-normal md:font-semibold"
            />
            <img src={searchIcon} alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-100" />
          </div>
        </div>
        <div className="hidden md:flex text-sm text-gray-500 font-normal">8 People Found For Galuh</div>
        <div>
          <div className="text-gray-500">
            {peopleData.map((person, index) => (
              <PeopleCard key={person.id} person={person} index={index} onClick={() => handleSelectPerson(person.id)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferListContainer;
