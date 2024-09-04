import topup from "../assets/icons/Upload.svg";
import peopleImage from "../assets/images/user.webp";
import unfilledStar from "../assets/icons/UnfilledStar.svg";
import moneyIcon from "../assets/icons/u_money-bill.svg";
import Bri from "../assets/images/BRI.png";
import BCA from "../assets/images/BCA.png";
import OVO from "../assets/images/OVO.png";
import Dana from "../assets/images/Dana.png";
import Gopay from "../assets/images/Gopay.png";

import { useEffect, useState } from "react";
import PeopleDetailCard from "../components/PeopleDetailCard";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useStoreSelector } from "../redux/hooks";
import axios from "axios";
import { IProfileBody } from "../types/profile";
import { jwtDecode } from "jwt-decode";
import { TopupSuccessModal } from "../components/TopupSuccessModal";
import { TopupFailedModal } from "../components/TopupFailedModal";

interface Person {
  image: string;
  name: string;
  phoneNumber: string;
  isVerified: boolean;
  favoriteIcon: string;
}

const person: Person = {
  image: peopleImage,
  name: "Enter Your Name",
  phoneNumber: "Enter Your Phone Number",
  isVerified: true,
  favoriteIcon: unfilledStar,
};

export default function TopUp() {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useStoreSelector((state) => state.auth);
  const [id, setId] = useState<string>("");
  const [getProfile, setProfile] = useState<IProfileBody[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  const [nominal, setNominal] = useState("0");
  const [subtotal, setSubtotal] = useState("0");
  const [adminFee, setAdminFee] = useState("0");
  const [paymentMethod, setPaymentMethod] = useState<string | number>();

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleNominalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/\D/g, ""); // Hapus karakter non-digit

    const numericValue = parseFloat(value); // Konversi menjadi angka desimal

    if (isNaN(numericValue)) {
      setNominal("0");
      setAdminFee("0");
      setSubtotal("0");
    } else {
      const calculatedAdminFee = numericValue * 0.01;
      const calculatedSubtotal = numericValue + calculatedAdminFee;

      const formattedNominal = Math.round(numericValue).toLocaleString("id-ID");
      const formattedAdminFee = calculatedAdminFee.toFixed(0).toLocaleString();
      const formattedSubtotal = calculatedSubtotal.toLocaleString("id-ID");

      setNominal(formattedNominal);
      setAdminFee(formattedAdminFee);
      setSubtotal(formattedSubtotal);
    }
  };

  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/user/topup");
  };

  const handleDashboard = () => {
    navigate("user/dashboard");
  };

  const handleSubmit = async () => {
    const amountNumber = parseFloat(nominal.replace(/[,.]/g, ""));
    const adminFeeNumber = parseFloat(adminFee.replace(/[,.]/g, ""));

    if (amountNumber < 10000) {
      setError("The minimum top-up amount is IDR 10,000.");
      return;
    }

    if (amountNumber > 5000000) {
      setError("The maximum top-up amount is IDR 5,000,000.");
      return;
    }
    const data = {
      user_id: id,
      payment_id: paymentMethod,
      amount: amountNumber,
      admin: adminFeeNumber,
    };

    setIsLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/transactions/topup`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Transaction successful:", response.data);

      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error during transaction:", error);
      setShowFailedModal(true);
    } finally {
      setIsLoading(false);
    }
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
              <PeopleDetailCard
                image={getProfile.length > 0 ? getProfile[0]?.image ?? person.image : person.image}
                name={getProfile.length > 0 ? getProfile[0]?.fullname ?? person.name : person.name}
                phoneNumber={getProfile.length > 0 ? getProfile[0]?.phone ?? person.phoneNumber : person.phoneNumber}
                isVerified={person.isVerified}
                favoriteIcon={person.favoriteIcon}
              />
            </div>

            {/* input nomninal */}
            <div className="flex flex-col justify-center">
              <div className="font-semibold">Amount</div>
              <div className="text-sm text-gray-500 mb-4">Type the amount you want to transfer and then press continue to the next steps.</div>
              <div className="relative flex items-center">
                <img src={moneyIcon} alt="Money Icon" className="absolute left-3 w-5 h-5 text-gray-400" />
                <input type="text" name="nominal" value={nominal} onChange={handleNominalChange} className="pl-10 border rounded-md focus:outline-gray-400 w-full h-12 font-semibold" placeholder="Enter Nominal Transfer" autoComplete="off" />
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
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
                      name: "bri",
                      value: 1,
                      onChange: handlePaymentMethodChange,
                    }}
                  />
                  <img className="w-auto h-8" src={Bri} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Bank Rakyat Indonesia</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "dana",
                      value: 2,
                      onChange: handlePaymentMethodChange,
                    }}
                  />
                  <img className="w-auto h-3" src={Dana} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Dana</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "bca",
                      value: 3,
                      onChange: handlePaymentMethodChange,
                    }}
                  />
                  <img className="w-auto h-3" src={BCA} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Bank Central Asia</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "gopay",
                      value: 4,
                      onChange: handlePaymentMethodChange,
                    }}
                  />
                  <img className="w-auto h-3" src={Gopay} alt="..." />
                  <p className="text-base font-normal text-[#4F5665]">Gopay</p>
                </div>

                <div className="grid grid-cols-[auto,auto,1fr] gap-7 items-center ">
                  <Input
                    input={{
                      type: "radio",
                      name: "ovo",
                      value: 5,
                      onChange: handlePaymentMethodChange,
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
                    <p className="text-end">Idr. {adminFee || "0"}</p>
                  </div>
                  <div className="h-[1px] w-full bg-[#E8E8E8]"></div>
                  <div className="grid grid-cols-2 text-sm gap-12">
                    <p className="text-[#4F5665]">Sub Total</p>
                    <p className="text-end">Idr. {subtotal || "0"}</p>
                  </div>
                </div>

                <button className="bg-blue-600 min-h-10 w-full rounded-lg text-white font-thin tracking-wider" onClick={handleSubmit}>
                  {isLoading ? "Submit..." : "Submit"}
                </button>
                <p className="text-[#4F5665] text-sm font-normal text-wrap">*Get Discount if you pay with Bank Central Asia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && <TopupSuccessModal onClose={() => setShowSuccessModal(false)} />}
      {showFailedModal && <TopupFailedModal onClose={() => setShowFailedModal(false)} onBackTo={handleDashboard} onTryAgain={handleTryAgain} />}
    </main>
  );
}
