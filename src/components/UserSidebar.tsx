
import dashboard from '../assets/icons/dashboard.svg'
import transfer from '../assets/icons/transfer.svg'
import history from '../assets/icons/history.svg'
import quit from '../assets/icons/quit.svg'
import topUp from '../assets/icons/topUp.svg'
import profile2 from '../assets/icons/porfile.svg'

export default function Sidenavbar() {
  return (
    <>
      <main className="flex flex-col justify-center items-start px-10 py-6 max-w-full text-sm tracking-normal leading-6 text-gray-600 bg-white border-r border-gray-200 border-solid w-[261px] max-md:pl-5">
        <div className="flex flex-col justify-center mb-96 max-md:mb-10">
          <div className="flex flex-col">
            <button className="flex gap-2 px-2 py-1 mt-4 whitespace-nowrap rounded-md focus:text-base focus:tracking-normal focus:leading-6 focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                loading="lazy"
                src={dashboard}
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-1">Dashboard</div>
            </button>
            <button className="flex gap-2 px-2 py-1 mt-4 whitespace-nowrap rounded-md focus:text-base focus:tracking-normal focus:leading-6 focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                loading="lazy"
                src={transfer}
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-1">Transfer</div>
            </button>
            <button className="flex gap-2 px-2 py-1 mt-4 whitespace-nowrap rounded-md focus:text-base focus:tracking-normal focus:leading-6 focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                loading="lazy"
                src={history}
                className="shrink-0 w-6 aspect-square fill-white fill-opacity-0"
              />
              <div className="flex-1">History</div>
            </button>
            <button className="flex gap-2 px-2 py-1 mt-4 rounded-md focus:text-base focus:tracking-normal focus:leading-6 focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                loading="lazy"
                src={topUp}
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-1">Top Up</div>
            </button>
            <button className="flex gap-2 px-2 py-1 mt-4 whitespace-nowrap rounded-md focus:text-base focus:tracking-normal focus:leading-6 focus:text-blue-600  focus:border-l-4 focus:border-blue-600 focus:border-solid focus:bg-blue-600 focus:bg-opacity-10">
              <img
                loading="lazy"
                src={profile2}
                className="shrink-0 w-6 aspect-square"
              />
              <div className="flex-1">Profile</div>
            </button>
            <div className="flex flex-col justify-center py-2 mt-4 text-red-700 whitespace-nowrap">
              <button className="flex gap-2 px-2 py-1 rounded-md focus:text-base focus:tracking-normal focus:leading-6  focus:border-l-4 focus:border-red-600 focus:border-solid focus:bg-red-600 focus:bg-opacity-10">
                <img
                  loading="lazy"
                  src={quit}
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-1">Keluar</div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}