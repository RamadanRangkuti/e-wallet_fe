import { useState, useEffect } from "react";
import axios from "axios";
// import TransactionHistory from "../components/TransactionHistory";
import transfer from "../assets/icons/transferLight.svg";
import topUp from "../assets/icons/topUpLight.svg";
import balanceIcon from "../assets/icons/balance.svg";
import Upgraph from "../assets/icons/Upgraph.svg";
import Downgraph from "../assets/icons/Downgraph.svg";
import user from "../assets/images/user.webp";
// import profile from "../assets/images/ProfileNavbar.png";
// import profileImage from "../assets/images/user.webp";
import FinancialChart from "../components/FinancialChart";
import { Link } from "react-router-dom";
import { useStoreSelector } from "../redux/hooks";
import { jwtDecode } from "jwt-decode";

interface BalanceData {
  balance: number;
}

interface Transaction {
  method: string;
  id: number;
  receiver_fullname: string;
  sender_fullname: string;
  sender_id: string;
  type: string;
  transfer_amount: string;
  isIncome: boolean;
  sender_image: string;
}

export default function Dashboard() {
  const { token } = useStoreSelector((state) => state.auth);
  const [id, setId] = useState<string>("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balanceData, setBalanceData] = useState<BalanceData>({
    balance: 0,
  });

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode<{ id: string }>(token);
      setId(decodedToken.id);
    }
  }, [token]);

  useEffect(() => {
    const fetchBalanceData = async () => {
      try {
        const url1 = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/transactions/${id}`;
        const result = await axios.get(url1, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/user/${id}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        const data = response.data.data[0];
        setTransactions(result.data.data);
        setBalanceData({
          balance: data.balance,
        });
        console.log(result)
      } catch (error) {
        console.error("Error fetching balance data:", error);
      }
    };

    fetchBalanceData();
  }, [id, token]);

  return (
    <>
      <main className="w-full p-4 md:p-8">
        <section className="w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start py-5 pr-16 pl-3.5 whitespace-nowrap rounded-md border border-gray-200 border-solid max-md:pr-5 max-md:mt-5">
                <div className="flex gap-3 text-base tracking-normal leading-6 text-gray-600">
                  <img loading="lazy" src={balanceIcon} className="shrink-0 my-auto w-6 aspect-square" alt="Balance" />
                  <div>Balance</div>
                </div>
                <div className="mt-5 text-2xl font-medium tracking-normal leading-6 text-slate-900">Rp.{balanceData.balance.toLocaleString()}</div>
                <div className="flex gap-5 mt-6 text-xs">
                  <div className="flex flex-col flex-1">
                    <div className="tracking-normal text-gray-600 leading-[200%]">Income</div>
                    <div className="flex gap-1.5 mt-3.5 text-right text-green-700 leading-[150%]">
                      <div>Rp.200.000</div>
                      <div>+2%</div>
                      <img loading="lazy" src={Upgraph} className="shrink-0 self-start w-4 aspect-square" alt="Income Graph" />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="tracking-normal text-gray-600 leading-[200%]">Expense</div>
                    <div className="flex gap-1.5 mt-3 text-right text-red-700 leading-[150%]">
                      <div>Rp.100.000</div>
                      <div>+5%</div>
                      <img loading="lazy" src={Downgraph} className="shrink-0 self-start w-4 aspect-square" alt="Expense Graph" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-3.5 py-16 text-base tracking-normal rounded-md border border-gray-200 border-solid max-md:mt-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                  <div className="my-auto font-semibold leading-6 text-slate-900">Fast Service</div>
                  <div className="flex gap-3.5 text-white leading-[150%]">
                    <Link to={"/user/transfer"}>
                      <button className="flex gap-2 py-1 pr-3 pl-2 whitespace-nowrap bg-blue-600 rounded-md">
                        <img loading="lazy" src={transfer} className="shrink-0 w-6 aspect-square" alt="Transfer" />
                        <span>Transfer</span>
                      </button>
                    </Link>
                    <Link to={"/user/topup"}>
                      <button className="flex gap-2 py-1 pr-3 pl-2 bg-blue-600 rounded-md">
                        <img loading="lazy" src={topUp} className="shrink-0 w-6 aspect-square" alt="Top Up" />
                        <span>Top Up</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-4 w-full max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 w-full justify-between">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <FinancialChart />
            </div>
            <div className="flex flex-col w-full max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 pt-4 pb-8 rounded-md border border-gray-200 border-solid max-md:mt-5 w-full">
                <div className="flex gap-5">
                  <h2 className="flex-auto text-base font-semibold tracking-normal leading-6 text-slate-900">Transaction History</h2>
                  <button className="text-xs font-medium tracking-normal leading-6 text-blue-600">See All</button>
                </div>
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex gap-5 justify-between items-center mt-7 text-base p-4">
                    <img
                      loading="lazy"
                      src={transaction.sender_image || user}
                      className="shrink-0 self-stretch w-14 aspect-square"
                      alt={`${transaction.sender_fullname}'s profile`}
                    />
                    <div className="flex flex-col self-stretch pr-2.5 my-auto">
                      <div className="font-semibold text-slate-900">{transaction.sender_fullname ? transaction.sender_fullname : "Nama sender" }</div>
                      <div className="mt-3 text-gray-600">{transaction.type}</div>
                    </div>
                    <div className="mt-3 text-gray-600">{transaction.method || "E-wallet"}</div>
                    <div className={`self-stretch my-auto font-semibold text-right ${(transaction.sender_id == id) ? "text-red-700" : "text-green-500"}`}>Rp {transaction.transfer_amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
