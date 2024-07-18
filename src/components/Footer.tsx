import walletIcon from "../assets/icons/walletIcons.svg"
import socmed from '../assets/icons/socmed.svg'
import emailBlack from '../assets/icons/emailBlack.png'
import email from '../assets/icons/email.svg'
import phone from '../assets/icons/phone.svg'

export default function Footer() {
  return (
    <footer className="flex justify-center items-center self-stretch px-16 py-11 mt-20 w-full bg-blue-600 max-md:px-5 max-md:mt-10 max-md:max-w-full bottom-0 ">
      <div className="flex flex-col w-full max-w-[1166px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="flex gap-4 text-4xl font-semibold whitespace-nowrap">
                  <img
                    loading="lazy"
                    src={walletIcon}
                    className="shrink-0 aspect-square w-[50px]"
                  />
                  <div className="justify-center self-start py-3">
                    E-Wallet
                  </div>
                </div>
                <div className="mt-6 text-base leading-7">
                  Clarity gives you the blocks and components you need to
                  create a truly professional website.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base font-semibold leading-7 text-zinc-100 max-md:mt-10">
                <div className="text-lg tracking-wider leading-5 text-white uppercase">
                  Get In Touch
                </div>
                <div className="flex gap-4 mt-7">
                  <img
                    loading="lazy"
                    src={phone}
                    className="shrink-0 my-auto w-6 aspect-square"
                  />
                  <div>+62 5637 8882 9901</div>
                </div>
                <div className="flex gap-4 mt-3 whitespace-nowrap">
                  <img
                    loading="lazy"
                    src={email}
                    className="shrink-0 self-start mt-1 w-6 aspect-square"
                  />
                  <div>contact@zwallet.com</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-4 text-lg font-semibold tracking-wider leading-5 text-white uppercase max-md:mt-10">
                <div>Social Media</div>
                <img
                  loading="lazy"
                  src={socmed}
                  className="self-center mt-6 aspect-[5.26] w-[222px]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-4 max-md:mt-10">
                <div className="text-lg font-semibold tracking-wider leading-5 text-white uppercase">
                  Newsletter
                </div>
                <div className="flex gap-2.5 px-3.5 py-3.5 mt-5 text-xs tracking-wider text-gray-600 bg-white rounded-lg border border-solid border-neutral-200">
                  <img
                    loading="lazy"
                    src={emailBlack}
                    className="shrink-0 w-4 aspect-square"
                  />
                  <div className="flex-1">Enter Your Email</div>
                </div>
                <div className="justify-center items-center px-2.5 py-2 mt-4 text-base font-medium text-center text-blue-600 whitespace-nowrap bg-white rounded-md max-md:px-5">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-24 h-px bg-white border border-white border-solid max-md:mt-10 max-md:max-w-full" />
        <div className="self-center mt-8 text-sm leading-5 text-center text-white">
          © Copyright 2022, All Rights Reserved by ClarityUI
        </div>
      </div>
    </footer>
  )
}
