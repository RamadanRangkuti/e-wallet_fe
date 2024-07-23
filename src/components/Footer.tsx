import wallet from "../assets/icons/wallet.svg";
import socmed from "../assets/icons/socmed.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import email from "../assets/icons/email-icon-white.svg";
import phone from "../assets/icons/phone.svg";
import Input from "./Input";

export default function Footer() {
  return (
    <footer className="font-montserrat bg-blue-600 px-5 md:px-20 pt-10 text-white mt-10 bottom-0">
      <div>
        <div className="md:flex md:justify-between md:gap-5 w-full">
          <div>
            <div className="flex gap-4">
              <img width="40" src={wallet} />
              <p className="font-nunitosans justify-center self-center w-48 text-4xl md:text-2xl">E-Wallet</p>
            </div>
            <p className="mt-6 md:mt-2 text-sm leading-7 w-56">Clarity gives you the blocks and components you need to create a truly professional website.</p>
          </div>
          <div className="text-zinc-100 mt-10 md:mt-0 md:ml-5">
            <p className="text-lg md:text-base leading-5 text-white">GET IN TOUCH</p>
            <div className="flex gap-4 mt-7 md:mt-5">
              <img width="20" src={phone} />
              <p className="text-sm md:text-xs">+62 5637 8882 9901</p>
            </div>
            <div className="flex gap-4 mt-5">
              <img width="20" src={email} />
              <p className="text-sm">contact@zwallet.com</p>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:ml-5">
            <p className="text-lg md:text-base leading-5 text-white uppercase">Social Media</p>
            <img width="222" src={socmed} className="mt-6" />
          </div>
          <div className="md:ml-5 mt-10 md:mt-0 w-3/12">
            <label className="text-lg md:text-base leading-5 text-white uppercase" htmlFor="email">
              NEWSLETTER
            </label>
            <div className="relative mt-2">
              <img className="absolute mt-[11px] ml-5" width="20" height="20" src={emailIcon} alt="email-icon" />
              <Input input={{ type: "text", name: "email", placeholder: "Enter your email", autocomplete: "email" }} />
            </div>
            <div className="justify-center items-center py-2 mt-4 font-semibold text-center text-primary bg-white rounded-md px-5">Subscribe</div>
          </div>
        </div>
        <div className="shrink-0 mt-24 h-px bg-white border border-white border-solid max-md:mt-10 max-md:max-w-full" />
        <div className="self-center mt-8 text-sm leading-5 text-center text-white">© Copyright 2022, All Rights Reserved by ClarityUI</div>
      </div>
    </footer>
  );
}
