import {jwtDecode} from "jwt-decode";
import historyTransfer from "../assets/icons/historyTransfer.svg";
import search from "../assets/icons/searchDark.svg";
import { useStoreSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import axios from "axios";

interface DataHistory {
  id: number;
  created_at: string;
  transfer_amount: string;
  receiver_fullname: string;
  receiver_phone: string;
  sender_phone: string;
  sender_image: string;
  sender_fullname: string;
  phone: string;
  receiver_id: number;
  sender_id: number;
}

interface TransferItemProps {
  data: DataHistory;
  userId: number;
}

function TransferItem({ data, userId }: TransferItemProps) {
  return (
    <div className="flex gap-5 mt-2 w-full font-medium leading-5 text-gray-600 text-lg items-center max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <div className="flex flex-row justify-between p-4 w-full ">
        <img loading="lazy" src={data.sender_image} className="w-[48px] h-[48px] object-cover rounded-xl hidden md:block" alt={data.sender_fullname} />
        <div className="flex flex-col gap-4 md:hidden">
          <div>{data.sender_fullname}</div>
          <div>{ data.sender_phone }</div>
        </div>
        <div className="hidden md:block">{data.created_at}</div>
        <div className="hidden md:block">{data.sender_phone }</div>
        <div className="hidden md:block">{data.sender_fullname}</div>
        <div className={data.sender_id === userId ? "text-red-500" : "text-green-500"}>{data.transfer_amount}</div>
      </div>
    </div>
  );
}

function TransferHistory() {
  const { token } = useStoreSelector((state) => state.auth);
  const [userId, setUserId] = useState<number | null>(null);
  const [data, setUserData] = useState<DataHistory[]>([]);

  useEffect(() => {
    if (!token) return;

    const decodedToken = jwtDecode<{ id: string }>(token);
    setUserId(parseInt(decodedToken.id));

    const getTransactions = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/transactions/7`;
        const result = await axios.get(url);
        setUserData(result.data.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    getTransactions();
  }, [token]);

  if (userId === null) return null;

  return (
    <>
      <div className="flex items-center bg-primary w-screen text-white text-xs md:text-base md:font-bold py-2 px-5 md:px-8 md:bg-white md:text-black md:hidden">
        <div>History Transaction</div>
      </div>
      <div className="bg-white w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:max-w-full p-4 w-full">
                <div className="gap-4 self-start px-5 font-semibold tracking-normal leading-6 text-slate-900 text-lg hidden md:flex">
                  <img loading="lazy" src={historyTransfer} className="shrink-0 my-auto w-6 aspect-square" alt="History Transfer" />
                  <div>History Transaction</div>
                </div>
                <div className="flex flex-col md:px-8 pb-11 md:border md:border-gray-200 md:border-solid max-md:px-5 max-md:max-w-full w-full gap-4">
                  <div className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                    <div className="flex-auto my-auto font-semibold tracking-normal leading-6 text-slate-900 text-lg">Find Transaction</div>
                    <div className="flex gap-8 p-4 text-sm font-medium leading-5 text-gray-600 rounded-md border border-gray-200 border-solid">
                      <div className="flex-1 text-base">Enter Number Or Full Name</div>
                      <img loading="lazy" src={search} className="shrink-0 my-auto w-4 aspect-square" alt="Search Icon" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-7">
                    {data.map((item) => (
                      <TransferItem key={item.id} data={item} userId={userId} />
                    ))}
                  </div>
                  <div className="flex gap-5 mt-10 w-full font-medium leading-5 text-gray-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full text-lg">
                    <div className="flex-auto my-auto text-lg">Show {data.length} History of 100 History</div>
                    <div className="flex gap-5 whitespace-nowrap text-lg">
                      <div>Prev</div>
                      <div className="text-blue-800">1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div className="text-stone-950">Next</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransferHistory;
