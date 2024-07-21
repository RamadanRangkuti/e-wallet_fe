import historyTransfer from '../assets/icons/historyTransfer.svg';

interface DataHistory {
  id: number;
  date: string;
  amount: string;
  receiver: string;
  imgSrc: string;
}

const transferHistoryData: DataHistory[] = [
  { id: 1, date: '2024-07-19', amount: '$100', receiver: 'Alice', imgSrc: 'https://example.com/alice.jpg' },
  { id: 2, date: '2024-07-18', amount: '$200', receiver: 'Bob', imgSrc: 'https://example.com/bob.jpg' },
];

interface TransferItemProps {
  data: DataHistory;
}

function TransferItem({ data }: TransferItemProps) {
  return (
    <div className="flex gap-5 mt-2 w-full text-base font-medium leading-5 text-gray-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <img
        loading="lazy"
        src={data.imgSrc}
        className="shrink-0 my-auto w-10 h-10 rounded-full"
        alt={data.receiver}
      />
      <div className="flex-auto my-auto">
        {data.date} - {data.receiver} - {data.amount}
      </div>
    </div>
  );
}

function TransferHistory() {
  return (
    <div className="flex flex-col bg-white">
      <div className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-7 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 self-start px-5 text-base font-semibold tracking-normal leading-6 text-slate-900">
                <img
                  loading="lazy"
                  src={historyTransfer}
                  className="shrink-0 my-auto w-6 aspect-square"
                  alt="History Transfer"
                />
                <div>History Transaction</div>
              </div>
              <div className="flex flex-col px-8 pt-6 pb-11 mt-9 border border-gray-200 border-solid max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex-auto my-auto text-base font-semibold tracking-normal leading-6 text-slate-900">
                    Find Transaction
                  </div>
                  <div className="flex gap-2.5 p-2.5 text-sm font-medium leading-5 text-gray-600 rounded-md border border-gray-200 border-solid">
                    <div className="flex-1">Enter Number Or Full Name</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a928e0cb0e294d462ca30bc7600c44b7524d05c5b748d845be4f63ce37e2f62?apiKey=b75a55b5285647ecbff457fc782c7d82&"
                      className="shrink-0 my-auto w-4 aspect-square"
                      alt="Search Icon"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-7">
                  {transferHistoryData.map((item) => (
                    <TransferItem key={item.id} data={item} />
                  ))}
                </div>
                <div className="flex gap-5 mt-7 w-full text-xs font-medium leading-5 text-gray-600 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="flex-auto my-auto">
                    Show {transferHistoryData.length} History of 100 History
                  </div>
                  <div className="flex gap-5 whitespace-nowrap">
                    <div>Prev</div>
                    <div className="text-blue-800">1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div className="text-stone-950">Next</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferHistory;
