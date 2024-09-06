import historyTransfer from "../assets/icons/historyTransfer.svg";
import searchIcon from "../assets/icons/searchDark.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/HeaderPage";
import { useStoreSelector } from "../redux/hooks";
import { jwtDecode } from "jwt-decode";
import moment from "moment";

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

function TransferHistory() {
  const { token } = useStoreSelector((state) => state.auth);
  const [userId] = useState<number | null>(3);
  const [data, setData] = useState<DataHistory[]>([]);
  const [id, setId] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        let url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/transactions/${id}`;
        if (search) {
          url += `?search=${search}`;
        }

        const result = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(result.data.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    if (id) {
      getTransactions();
    }
  }, [id, search, token]);

  if (userId === null) return null;

  return (
    <>
      <div className="bg-white w-full">
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:max-w-full w-full">
                <Header title="History Transaction" icons={historyTransfer} />
                <div className="flex flex-col md:px-8 pb-11 md:border md:border-gray-200 md:border-solid max-md:px-5 max-md:max-w-full w-full gap-4">
                  <div className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full p-4">
                    <div className="flex-auto my-auto font-semibold tracking-normal leading-6 text-slate-900 text-lg">Find Transaction</div>
                    <div className="flex gap-8 p-4 text-sm font-medium leading-5 text-gray-600 rounded-md border border-gray-200 border-solid">
                      <input
                        className="flex-1 text-base outline-none"
                        placeholder="Enter fullname"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            setSearch((e.target as HTMLInputElement).value);
                          }
                        }}
                      />
                      <img loading="lazy" src={searchIcon} className="shrink-0 my-auto w-4 aspect-square" alt="Search Icon" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-7">
                    {data.map((item) => (
                      <div key={item.id} className="flex gap-5 mt-2 w-full font-medium leading-5 text-gray-600 text-lg items-center justify-center max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                        <div className="flex flex-row justify-between items-center p-4 w-full">
                          <img loading="lazy" src={item.sender_image} className="w-[48px] h-[48px] object-cover rounded-xl hidden md:block" alt={item.sender_fullname} />
                          <div className="flex flex-col gap-4 md:hidden">
                            <div>{item.sender_fullname}</div>
                            <div>{item.sender_phone}</div>
                          </div>
                          <div className="hidden md:block">{moment(item.created_at).format("MMM D Y")}</div>
                          <div className="hidden md:block">{item.sender_phone}</div>
                          <div className="hidden md:block">{item.sender_fullname}</div>
                          <div className={item.sender_id === userId ? "text-green-500" : "text-red-500"}>{item.transfer_amount ? `Rp.${item.transfer_amount}` : ""}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-5 mt-10 w-full font-medium leading-5 text-gray-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full text-lg">
                    <div className="flex-auto my-auto text-lg">Show {data.length} History of {data.length} History</div>
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
