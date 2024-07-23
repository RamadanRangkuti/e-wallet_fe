import wallet from "../assets/icons/wallet.svg";
import profile from "../assets/images/ProfileNavbar.png";
import dropdown from "../assets/icons/dropdown.svg";

export default function UserNavbar() {
  return (
    <>
      <header className="hidden md:flex flex-col justify-center bg-white font-montserrat">
        <nav className="flex gap-5 justify-between py-3.5 px-5 w-full bg-white border-b border-gray-200 border-solid max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col justify-center items-start my-auto text-xl font-semibold text-blue-600 whitespace-nowrap">
            <div className="flex flex-col justify-center max-w-full w-[129px]">
              <div className="flex gap-4">
                <img src={wallet} />
                <div className="justify-center py-1.5 my-auto">E-Wallet</div>
              </div>
            </div>
          </div>
          <button className="flex gap-5 items-center">
            <p>Galuh Wizard</p>
            <img src={profile} width="40" className="rounded-full" />
            <img width="20" src={dropdown} />
          </button>
        </nav>
      </header>
    </>
  );
}
