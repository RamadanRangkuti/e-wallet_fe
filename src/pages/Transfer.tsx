// TransferDetail.tsx
import transferIcon from "../assets/icons/blueTransfer.svg"
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
import PeopleCard from '../components/PeopleCard';

const peopleData = [
  { image: image1, name: "Ghaluh 1", phoneNumber: "(239)555-0108", favorite: unfilledStar },
  { image: image2, name: "Ghaluh 2", phoneNumber: "(480)555-0103", favorite: unfilledStar },
  { image: image3, name: "Ghaluh 3", phoneNumber: "(225)555-0118", favorite: unfilledStar },
  { image: image4, name: "Ghaluh 4", phoneNumber: "(406)555-0120", favorite: unfilledStar },
  { image: image5, name: "Ghaluh 5", phoneNumber: "(303)555-0105", favorite: unfilledStar },
  { image: image6, name: "Ghaluh 6", phoneNumber: "(808)555-0111", favorite: unfilledStar },
  { image: image7, name: "Ghaluh 7", phoneNumber: "(671)555-0110", favorite: unfilledStar },
  { image: image8, name: "Ghaluh 8", phoneNumber: "(270)555-0117", favorite: unfilledStar }
];

function TransferDetail() {
  return (
    <div className="max-h-screen w-full pl-8 py-8">
      <div className="flex-col w-full">
        <div className="flex mb-7">
          <div className="flex flex-col gap-5">
            <div className="flex gap-4  font-semibold tracking-normal">
              <img src={transferIcon} alt="icon" />
              Transfer Money
            </div>
            <div className="flex w-full items-center gap-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-5 h-5 bg-blue-600 text-sm text-white rounded-full ml-2 mr-1">
                  1
                </div>
                <span className=" text-blue-600 tracking-wide">Find People</span>
              </div>
              <div className="flex-grow border-dashed border-t border-gray-400 w-20"></div>
              <div className="flex items-center h-full">
                <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-sm text-white rounded-full ml-2 mr-1">
                  2
                </div>
                <span className=" text-gray-600 tracking-wide">Set Nominal</span>
              </div>
              <div className="flex-grow border-dashed border-t border-gray-400 w-20"></div>
              <div className="flex items-center h-full">
                <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-sm text-white rounded-full ml-2 mr-1">
                  3
                </div>
                <span className=" text-gray-600 tracking-wide">Finish</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border mr-8 px-7 py-6 mb-10 max-h-full">
          <div className="flex flex-col  font-semibold gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div>Find People</div>
                <div className="relative w-fit">
                  <input
                    type="text"
                    placeholder="Enter Number or Fullname"
                    className="w-72 py-2 pl-4 pr-10 h-8  border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <img
                    src={searchIcon}
                    alt="Search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-100"
                  />
                </div>
              </div>
              <div className="flex text-sm text-gray-500 font-normal">8 People Found For Galuh</div>
            </div>
            <div className="text-gray-500 max-h-96 overflow-y-auto ">
              {peopleData.map((person, index) => (
                <PeopleCard key={index} person={person} index={index} />
              ))}
              {/* Pagination Here (Atur kalau gak pas) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferDetail;
