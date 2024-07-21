import UserNavbar from "../components/UserNavbar"
import Sidenavbar from "../components/UserSidebar"
import { TransferSvgHeader } from "../components/CustomSvgColor"
import NoIMage from "../assets/images/No_Image_Available.webp"


export default function TransferDetail() {
  return (
    <div>
      <UserNavbar />
      <div className='flex w-full'>
        <div>
          <Sidenavbar />
        </div>
        <div className="flex w-full px-8">
          <div className="flex flex-col w-full">
            <div className="flex py-10">
              <div className="flex flex-col gap-5">
                <div className="flex gap-4 text-sm  font-semibold tracking-normal">
                  <TransferSvgHeader />
                  Transfer Money
                </div>
                <div className="flex w-full items-center gap-4">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-xs text-white rounded-full ml-2  mr-1">
                      1
                    </div>
                    <span className="text-sm text-gray-600 tracking-normal">Find People</span>
                  </div>
                  <div className="flex-grow border-dashed border-t border-gray-400 w-12"></div>
                  <div className="flex items-center h-full">
                    <div className="flex items-center justify-center w-5 h-5 bg-blue-600 text-xs text-white rounded-full ml-2  mr-1">
                      2
                    </div>
                    <span className="text-sm text-blue-600 tracking-normal">Set Nominal</span>
                  </div>
                  <div className="flex-grow border-dashed border-t border-gray-400 w-12"></div>
                  <div className="flex items-center h-full">
                    <div className="flex items-center justify-center w-5 h-5 bg-gray-700 text-xs text-white rounded-full ml-2  mr-1">
                      3
                    </div>
                    <span className="text-sm text-gray-600 tracking-normal">Finish</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col border h-full mr-8 p-7">
              {/* Template */}
              <div className="flex flex-col text-sm font-semibold gap-4">
                <div>People Information</div>
                <div className="flex w-full bg-gray-100 rounded-md p-4 items-center">
                  {/* user image harus di ganti */}
                  <img src={NoIMage} alt="user-image" className="rounded-md w-24 h-24" />
                  <div className="flex flex-col gap-2 items-center">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                  </div>
                </div>
              </div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}