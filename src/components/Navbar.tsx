import walletIcon from "../assets/icons/walletIcons.svg"

export default function Navbar() {
  return (
    <header className="flex justify-center items-center self-stretch px-16 py-3.5 w-full bg-blue-600 max-md:px-5 max-md:max-w-full container-fluid fixed top-0">
      <div className="flex gap-8 justify-between w-full max-w-[1180px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-4 my-auto text-xl font-semibold text-white whitespace-nowrap">
          <img
            loading="lazy"
            src={walletIcon}
            className="shrink-0 w-8 aspect-square"
          />
          <div className="justify-center px-px py-1.5 my-auto">E-Wallet</div>
        </div>
        <div className="flex gap-5 justify-between text-sm font-medium tracking-wider leading-6 text-center">
          <button className="justify-center px-5 py-3 text-white whitespace-nowrap rounded-md border border-white border-solid">
            SignIn
          </button>
          <button className="justify-center px-5 py-3 text-blue-500 bg-white rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}
