// TransferDetail.tsx
import React from 'react';
import UserNavbar from "../components/UserNavbar";
import Sidenavbar from "../components/UserSidebar";
import { TransferSvgHeader } from "../components/CustomSvgColor";
import searchIcon from "../assets/icons/Search.svg";
import userImage from "../assets/images/No_Image_Available.webp";
import unfilledStar from "../assets/icons/UnfilledStar.svg";
import PeopleCard from '../components/PeopleCard';

const peopleData = [
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar },
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar },
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar },
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar },
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar },
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar },
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar },
  { image: userImage, name: "Galuh", phoneNumber: "123-4567", favorite: unfilledStar }
];

const TransferDetail: React.FC = () => {
  return (
    <div>
      <UserNavbar />
      <div className='flex w-full'>
        <div>
          <Sidenavbar />
        </div>
        <div className="flex w-full p-8">
          <div className="flex flex-col w-full">
            <div className="flex mb-7">
              <div className="flex flex-col gap-5 pr-8">
                <div className="flex gap-4 text-sm font-semibold tracking-normal">
                  <TransferSvgHeader />
                  Transfer Money
                </div>
                <div className="flex w-full items-center gap-4">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-5 h-5 bg-blue-600 text-xs text-white rounded-full ml-2  mr-1">
                      1
                    </div>
                    <span className="text-sm text-blue-600 tracking-normal">Find People</span>
                  </div>
                  <div className="flex-grow border-dashed border-t border-gray-400 w-12"></div>
                  <div className="flex items-center h-full">
                    <div className="flex items-center justify-center w-4 h-4 bg-gray-700 text-xs text-white rounded-full ml-2  mr-1">
                      2
                    </div>
                    <span className="text-sm text-gray-600 tracking-normal">Set Nominal</span>
                  </div>
                  <div className="flex-grow border-dashed border-t border-gray-400 w-12"></div>
                  <div className="flex items-center h-full">
                    <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-xs text-white rounded-full ml-2  mr-1">
                      3
                    </div>
                    <span className="text-sm text-gray-600 tracking-normal">Finish</span>
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
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-100"
                      />
                    </div>
                  </div>
                  <div className="flex text-xs font-normal">8 People Found For Galuh</div>
                </div>
                <div>
                  {peopleData.map((person, index) => (
                    <PeopleCard key={index} person={person} index={index} />
                  ))}
                  {/* Pagination Here (Atur kalau gak pas) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferDetail;