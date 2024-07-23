import walletIcon from "../assets/icons/wallet.svg";
import emailIcon from "../assets/icons/email-icon.svg";

import Input from "../components/Input";

function ForgotPassword() {
  return (
    <main className="font-montserrat grid place-items-center bg-bgprimary h-screen">
      <section className="bg-white rounded-3xl w-4/5 tbt:w-96 px-5 py-10">
        <div className="flex flex-wrap">
          <img className="mr-3" src={walletIcon} alt="wallet" />
          <div className="my-auto">
            <p className="text-primary text-xl font-nunitosans font-semibold">E-Wallet</p>
          </div>
        </div>
        <div className="block">
          <p className="text-black font-semibold my-5">Fill Out Form Correctly 👋</p>
          <p className="text-gray-500 text-xs">We will send new password to your email</p>
        </div>
        <form className="mt-5">
          <label className="font-semibold uw:text-2xl" htmlFor="email">
            Email
          </label>
          <div className="relative mt-2">
            <img className="absolute mt-4 ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
            <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email" }} />
          </div>
          <button className="text-white mt-3 uw:text-2xl bg-primary hover:bg-blue-700 active:bg-blue-800 rounded-lg w-full h-11 uw:h-16" type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default ForgotPassword;
