// TransferDetail.tsx
import React from 'react';
import { TransferSvgHeader } from "../components/CustomSvgColor";
import searchIcon from "../assets/icons/Search.svg";
import image1 from "../assets/images/people1.png"
import image2 from "../assets/images/people2.png"
import image3 from "../assets/images/people3.png"
import image4 from "../assets/images/people4.png"
import image5 from "../assets/images/people5.png"
import image6 from "../assets/images/people6.png"
import image7 from "../assets/images/people7.png"
import image8 from "../assets/images/people8.png"
import unfilledStar from "../assets/icons/UnfilledStar.svg";
import PeopleCard from '../components/PeopleCard';

const peopleData = [
  { image: image1, name: "Galuh 1", phoneNumber: "(239)555-0108", favorite: unfilledStar },
  { image: image2, name: "Galuh 2", phoneNumber: "(480)555-0103", favorite: unfilledStar },
  { image: image3, name: "Galuh 3", phoneNumber: "(225)555-0118", favorite: unfilledStar },
  { image: image4, name: "Galuh 4", phoneNumber: "(406)555-0120", favorite: unfilledStar },
  { image: image5, name: "Galuh 5", phoneNumber: "(303)555-0105", favorite: unfilledStar },
  { image: image6, name: "Galuh 6", phoneNumber: "(808)555-0111", favorite: unfilledStar },
  { image: image7, name: "Galuh 7", phoneNumber: "(671)555-0110", favorite: unfilledStar },
  { image: image8, name: "Galuh 8", phoneNumber: "(270)555-0117", favorite: unfilledStar }
];

const TransferDetail: React.FC = () => {
  return (
    <div className="w-full pl-8 py-8">
      <div className="flex-col w-full">
        <div className="flex mb-7">
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 text-sm font-semibold tracking-normal">
              <TransferSvgHeader />
              Transfer Money
            </div>
            <div className="flex w-full items-center gap-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-5 h-5 bg-blue-600 text-xs text-white rounded-full ml-2 mr-1">
                  1
                </div>
                <span className="text-sm text-blue-600 tracking-wide">Find People</span>
              </div>
              <div className="flex-grow border-dashed border-t border-gray-400 w-20"></div>
              <div className="flex items-center h-full">
                <div className="flex items-center justify-center w-4 h-4 bg-gray-700 text-xs text-white rounded-full ml-2 mr-1">
                  2
                </div>
                <span className="text-sm text-gray-600 tracking-wide">Set Nominal</span>
              </div>
              <div className="flex-grow border-dashed border-t border-gray-400 w-20"></div>
              <div className="flex items-center h-full">
                <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-xs text-white rounded-full ml-2 mr-1">
                  3
                </div>
                <span className="text-sm text-gray-600 tracking-wide">Finish</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border mr-8 px-7 py-6 mb-10">
          <div className="flex flex-col text-sm font-semibold gap-4">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <div>People Information</div>
                <div className="relative w-fit">
                  <input
                    type="text"
                    placeholder="Enter Number or Fullname"
                    className="w-72 py-2 pl-4 pr-10 h-8 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <img
                    src={searchIcon}
                    alt="Search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-100"
                  />
                </div>
              </div>
              <div className="flex text-xs text-gray-500 font-normal">8 People Found For Galuh</div>
            </div>
            <div className="text-gray-500">
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