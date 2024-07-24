import {  useStoreSelector } from "../redux/hooks";
import {jwtDecode} from "jwt-decode";
import { useEffect, useState } from "react";
import axios from "axios";

interface Transaction {
  id: number;
  receiver_fullname: string;
  sender_fullname: string;
  sender_id: string;
  type: string;
  transfer_amount: string;
  isIncome: boolean;
  sender_image: string;
}

const TransactionHistory = () => {
  const { token } = useStoreSelector((state) => state.auth);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    if (!token) return;

    const decodedToken = jwtDecode<{ id: string }>(token);
    setUserId(decodedToken.id);

    const getTransactions = async () => {
      try {
        const url = `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/transactions/7`;
        const result = await axios.get(url);
        setTransactions(result.data.data);
        console.log(result.data)
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    getTransactions();
  }, [token]);

  return (
    <div className="flex flex-col grow px-5 pt-4 pb-8 rounded-md border border-gray-200 border-solid max-md:mt-5 w-full">
      <div className="flex gap-5">
        <h2 className="flex-auto text-base font-semibold tracking-normal leading-6 text-slate-900">Transaction History</h2>
        <button className="text-xs font-medium tracking-normal leading-6 text-blue-600">See All</button>
      </div>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex gap-5 justify-between items-center mt-7 text-base p-4">
          <img loading="lazy" src={transaction.sender_image} className="shrink-0 self-stretch w-14 aspect-square" alt={`${transaction.sender_fullname}'s profile`} />
          <div className="flex flex-col self-stretch pr-2.5 my-auto">
            <div className="font-semibold text-slate-900">{transaction.sender_fullname}</div>
            <div className="mt-3 text-gray-600">{transaction.type}</div>
          </div>
          <div className={`self-stretch my-auto font-semibold text-right ${(transaction.sender_id == userId) ? "text-red-700" : "text-green-500"}`}>Rp {transaction.transfer_amount}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;
