import { useState } from "react";
import transferIcon from "../assets/icons/blueTransfer.svg";
import peopleImage from "../assets/images/transfer-detail-image.png";
import unfilledStar from "../assets/icons/UnfilledStar.svg";
import PeopleDetailCard from "../components/PeopleDetailCard";
import moneyIcon from "../assets/icons/u_money-bill.svg";
import EnterPinModal from "../components/EnterPinModal";
import TransferSuccessModal from "../components/TransferSuccess";
import TransferFailedModal from "../components/TransferFailed";
import { useNavigate } from "react-router-dom";

interface Person {
  image: string;
  name: string;
  phoneNumber: string;
  isVerified: boolean;
  favoriteIcon: string;
}

const person: Person = {
  image: peopleImage,
  name: "Ghaluh 1",
  phoneNumber: "(239) 555-0108",
  isVerified: true,
  favoriteIcon: unfilledStar,
};

function TransferDetail() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const handleSuccess = () => {
    setIsModalOpen(false);
    setShowSuccessModal(true);
  };

  const handleFailure = () => {
    setIsModalOpen(false);
    setShowFailedModal(true);
  };

  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/user/transfer");
  };

  const handleDashboard = () => {
    navigate("/");
  };

  return (
    <div className="relative max-h-screen w-full pl-8 py-8">
      <div className="flex flex-col w-full">
        <div className="flex mb-7">
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 font-semibold tracking-normal">
              <img src={transferIcon} alt="icon" />
              Transfer Money
            </div>
            <div className="flex w-full items-center gap-4">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-sm text-white rounded-full ml-2 mr-1">1</div>
                <span className="text-gray-600 tracking-wide">Find People</span>
              </div>
              <div className="flex-grow border-dashed border-t border-gray-400 w-20"></div>
              <div className="flex items-center h-full">
                <div className="flex items-center justify-center w-5 h-5 bg-blue-600 text-sm text-white rounded-full ml-2 mr-1">2</div>
                <span className="text-blue-600 tracking-wide">Set Nominal</span>
              </div>
              <div className="flex-grow border-dashed border-t border-gray-400 w-20"></div>
              <div className="flex items-center h-full">
                <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-sm text-white rounded-full ml-2 mr-1">3</div>
                <span className="text-gray-600 tracking-wide">Finish</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border mr-8 px-7 py-7 mb-10 max-h-[400px] gap-6 overflow-y-auto">
          <div className="flex flex-col font-semibold gap-4">
            <div>People Information</div>
            <PeopleDetailCard image={person.image} name={person.name} phoneNumber={person.phoneNumber} isVerified={person.isVerified} favoriteIcon={person.favoriteIcon} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold">Amount</div>
            <div className="text-sm text-gray-500 mb-4">Type the amount you want to transfer and then press continue to the next steps.</div>
            <div className="relative flex items-center">
              <img src={moneyIcon} alt="Money Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
              <input type="text" name="nominal" className="pl-10 border rounded-md focus:outline-gray-400 w-full h-12 font-semibold" placeholder="Enter Nominal Transfer" autoComplete="off" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">Notes</div>
            <div className="text-sm text-gray-500 mb-4">You can add some notes for this transfer such as payment coffee or something</div>
            <textarea name="notes" className="border rounded-md focus:outline-gray-400 font-semibold p-4 h-32 resize-none" placeholder="Enter Some Notes" autoComplete="off" style={{ textAlign: "start", paddingTop: "0.5rem" }} />
          </div>
          <button className="bg-blue-600 min-h-10 rounded-lg text-white font-thin tracking-wider" onClick={() => setIsModalOpen(true)}>
            Submit & Transfer
          </button>
          {isModalOpen && <EnterPinModal onClose={() => setIsModalOpen(false)} onSuccess={handleSuccess} onFailure={handleFailure} />}
        </div>
      </div>
      {showSuccessModal && <TransferSuccessModal onClose={() => setShowSuccessModal(false)} />}
      {showFailedModal && <TransferFailedModal onClose={() => setShowFailedModal(false)} onBackTo={handleDashboard} onTryAgain={handleTryAgain} />}
    </div>
  );
}

export default TransferDetail;
