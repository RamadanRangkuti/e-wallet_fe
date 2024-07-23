import topup from "../assets/icons/Upload.svg";
import peopleImage from "../assets/images/transfer-detail-image.png";
import unfilledStar from "../assets/icons/UnfilledStar.svg";
import moneyIcon from "../assets/icons/u_money-bill.svg";
import Bri from "../assets/images/BRI.png";
import BCA from "../assets/images/BCA.png";
import OVO from "../assets/images/OVO.png";
import Dana from "../assets/images/Dana.png";
import Gopay from "../assets/images/Gopay.png";

import { useState } from "react";
import PeopleDetailCard from "../components/PeopleDetailCard";
import EnterPinModal from "../components/EnterPinModal";
import TransferSuccessModal from "../components/TransferSuccess";
import TransferFailedModal from "../components/TransferFailed";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";



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

export default function TopUp() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);

  const [nominal, setNominal] = useState("0"); 
  const [subtotal, setSubtotal] = useState("0");
  const [adminFee, setAdminFee] = useState("0");
  const [paymentMethod, setPaymentMethod] = useState<string | number>(); 

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleNominalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, '');
    const numericValue = parseFloat(value);

    if (isNaN(numericValue)) {
      setNominal("0");
      setAdminFee("0");
      setSubtotal("0");
    } else {
      const calculatedAdminFee = numericValue * 0.01;
      const calculatedSubtotal = numericValue + calculatedAdminFee;

      const formattedNominal = numericValue.toLocaleString('id-ID');
      const formattedAdminFee = calculatedAdminFee.toLocaleString('id-ID');
      const formattedSubtotal = calculatedSubtotal.toLocaleString('id-ID');

      setNominal(formattedNominal);
      setAdminFee(formattedAdminFee);
      setSubtotal(formattedSubtotal);
    }
  };

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

  const handleSubmit = () => {
    setIsModalOpen(true); 
    
    const amountNumber = parseFloat(nominal.replace(/[,.]/g, '')); 
    const adminFeeNumber = parseFloat(adminFee.replace(/[,.]/g, '')); 
    const subtotalNumber = parseFloat(subtotal.replace(/[,.]/g, ''));

    console.log("Payment Method:", paymentMethod);
    console.log("Amount:", amountNumber);
    console.log("Admin Fee:", adminFeeNumber);
    console.log("Sub Total:", subtotalNumber);
  };  

  return (
    <main className="relative w-full">
      <div className="flex items-center bg-primary w-full text-white text-xs md:text-base md:font-bold py-2 px-5 md:px-8 md:bg-white md:text-black">
        <img className="hidden md:flex" width="20" src={topup} alt="" />
        <p className="md:ml-3">Transfer Money</p>
      </div>

      <div className="grid w-full px-5 md:px-8 md:pb-8">
        <div className="grid grid-cols-[1fr] grid-rows-[1fr,auto] lg:grid-rows-1 lg:grid-cols-[1fr,auto] gap-7">
          {/* Account Information */}
          <div className="grid grid-cols-1 w-full md:border mr-8 md:px-7 py-7 gap-6 h-fit ">
            {/* account */}
            <div className="flex flex-col font-semibold gap-4">
              <div>Account Information</div>
              <PeopleDetailCard image={person.image} name={person.name} phoneNumber={person.phoneNumber} isVerified={person.isVerified} favoriteIcon={person.favoriteIcon} />
            </div>

            {/* input nomninal */}
            <div className="flex flex-col justify-center">
              <div className="font-semibold">Amount</div>
              <div className="text-sm text-gray-500 mb-4">Type the amount you want to transfer and then press continue to the next steps.</div>
              <div className="relative flex items-center">
                <img src={moneyIcon} alt="Money Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                <input type="text" name="nominal"  value={nominal} onChange={handleNominalChange}  className="pl-10 border rounded-md focus:outline-gray-400 w-full h-12 font-semibold" placeholder="Enter Nominal Transfer" autoComplete="off" />
              </div>
            </div>

            {/* input bank */}
            <div>
              <div className="font-semibold">Payment Method</div>
              <div className="text-sm text-gray-500 mb-4">Choose your payment method for top up account.</div>

              <form action="">
                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "paymentMethod",
                      value: 1 ,
                      onChange:handlePaymentMethodChange
                    }}
                  />
                  <img className="w-auto h-8" src={Bri} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Bank Rakyat Indonesia</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "paymentMethod",
                      value: 2 ,
                      onChange:handlePaymentMethodChange
                    }}
                  />
                  <img className="w-auto h-3" src={Dana} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Dana</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "paymentMethod",
                     value: 3 ,
                      onChange:handlePaymentMethodChange
                    }}
                  />
                  <img className="w-auto h-3" src={BCA} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Bank Central Asia</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "paymentMethod",
                      value: 4 ,
                      onChange:handlePaymentMethodChange
                    }}
                  />
                  <img className="w-auto h-3" src={Gopay} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Gopay</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "paymentMethod",
                      value: 5,
                      onChange:handlePaymentMethodChange
                    }}
                  />
                  <img className="w-auto h-3" src={OVO} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">OVO</p>
                </div>
              </form>
            </div>
          </div>

          {/* Payment */}
          <div className="grid md:border md:px-7 pb-7 pt-4 mb-10 h-fit gap-6">
            <h1>Payment</h1>

            <div className="grid w-full lg:w-[250px] font-semibold lg:gap-4">
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <div className="grid grid-cols-2 text-sm lg:gap-12">
                    <p className="text-[#4F5665]">Amount</p>
                    <p className="text-end">Idr. {nominal || "0"}</p>
                  </div>
                  <div className="grid grid-cols-2 text-sm lg:gap-12">
                    <p className="text-[#4F5665]">admin</p>
                    <p className="text-end">Idr. {adminFee || "0" }</p>
                  </div>
                  <div className="h-[1px] w-full bg-[#E8E8E8]"></div>
                  <div className="grid grid-cols-2 text-sm gap-12">
                    <p className="text-[#4F5665]">Sub Total</p>
                    <p className="text-end">Idr. {subtotal || "0" }</p>
                  </div>
                </div>

                <button className="bg-blue-600 min-h-10 w-full rounded-lg text-white font-thin tracking-wider"  onClick={handleSubmit}>
                  Submit
                </button>
                {isModalOpen && <EnterPinModal onClose={() => setIsModalOpen(false)} onSuccess={handleSuccess} onFailure={handleFailure} />}
                <p className="text-[#4F5665] text-sm font-normal text-wrap">*Get Discount if you pay with Bank Central Asia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && <TransferSuccessModal onClose={() => setShowSuccessModal(false)} />}
      {showFailedModal && <TransferFailedModal onClose={() => setShowFailedModal(false)} onBackTo={handleDashboard} onTryAgain={handleTryAgain} />}
    </main>
  );
}
