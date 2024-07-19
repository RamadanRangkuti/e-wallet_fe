import React from 'react';

interface Transaction {
  id: number;
  name: string;
  type: string;
  amount: string;
  isIncome: boolean;
  imageUrl: string;
}

const transactions: Transaction[] = [
  { id: 1, name: "Robert Fox", type: "Transfer", amount: "+Rp50.000", isIncome: true, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e135a30154268f41158729d56dbcf40a172ee7f60864c2a0aa1123be90e663a3?apiKey=b75a55b5285647ecbff457fc782c7d82&" },
  { id: 2, name: "Floyd Miles", type: "Send", amount: "-Rp50.000", isIncome: false, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a324df7f849df53523de43381d52873bfdfe2b9524b81609f3dd0dd5d1abcb03?apiKey=b75a55b5285647ecbff457fc782c7d82&" },
  { id: 3, name: "Ujang", type: "Send", amount: "-Rp50.000", isIncome: false, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6ef87b31a1c144c8a6dbce82a2ddc6aab6b094856e02f28b405d0c96a71c683?apiKey=b75a55b5285647ecbff457fc782c7d82&" },
  { id: 4, name: "Robert Fox", type: "Transfer", amount: "+Rp50.000", isIncome: true, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e135a30154268f41158729d56dbcf40a172ee7f60864c2a0aa1123be90e663a3?apiKey=b75a55b5285647ecbff457fc782c7d82&" },
  { id: 5, name: "Floyd Miles", type: "Send", amount: "-Rp50.000", isIncome: false, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/a324df7f849df53523de43381d52873bfdfe2b9524b81609f3dd0dd5d1abcb03?apiKey=b75a55b5285647ecbff457fc782c7d82&" },
  { id: 6, name: "Ujang", type: "Send", amount: "-Rp50.000", isIncome: false, imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e6ef87b31a1c144c8a6dbce82a2ddc6aab6b094856e02f28b405d0c96a71c683?apiKey=b75a55b5285647ecbff457fc782c7d82&" },
];

  const TransactionHistory: React.FC = () => {
  return (
    <div className="flex flex-col grow px-5 pt-4 pb-8 rounded-md border border-gray-200 border-solid max-md:mt-5 w-fit">
      <div className="flex gap-5">
        <h2 className="flex-auto text-base font-semibold tracking-normal leading-6 text-slate-900">
          Transaction History
        </h2>
        <button className="text-xs font-medium tracking-normal leading-6 text-blue-600">
          See All
        </button>
      </div>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex gap-5 justify-between items-center mt-7 text-base p-4">
          <img
            loading="lazy"
            src={transaction.imageUrl}
            className="shrink-0 self-stretch w-14 aspect-square"
            alt={`${transaction.name}'s profile`}
          />
          <div className="flex flex-col self-stretch pr-2.5 my-auto">
            <div className="font-semibold text-slate-900">{transaction.name}</div>
            <div className="mt-3 text-gray-600">{transaction.type}</div>
          </div>
          <div className={`self-stretch my-auto font-semibold text-right ${transaction.isIncome ? 'text-green-500' : 'text-red-700'}`}>
            {transaction.amount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;