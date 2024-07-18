
import pagination_testimonies from "../assets/icons/pagination_testimonies.svg"
import blueRightArrow from "../assets/icons/blueRightArrow.svg"
import leftArrow from "../assets/icons/leftArrow.svg"
import jamesbond from "../assets/images/jamesbond.png"
import star from "../assets/icons/star.svg"
import smallfee from "../assets/icons/smallFee.svg"
import dataSecured from "../assets/icons/dataSecured.svg"
import friendly from "../assets/icons/friendly.svg"
import imagesPhone from "../assets/images/imagesPhone.svg"
import onlinePayment from "../assets/images/Online-payment-phone.png"
import airbnb from "../assets/icons/airbnb.svg"
import canon from "../assets/icons/canon.svg"
import del from "../assets/icons/del.svg"
import hnm from "../assets/icons/h&m.svg"
import microsoft from "../assets/icons/microsoft.svg"
import dropbox from "../assets/icons/dropbox.svg"
import earphone from "../assets/images/earphone.png"
import protect from "../assets/images/protect.png"
import download from "../assets/images/download.png"

export default function LandingPage() {
return (
  <main className="flex flex-col items-center bg-white gap-16 container-fluid">
    
    <div className="flex justify-center items-center self-stretch p-2.5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="mt-6 mb-1 w-full max-w-[1180px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-8 max-md:max-w-full">
              <p className="text-5xl text-slate-900 max-md:max-w-full max-md:text-4xl">
                Smart Way to Your Financial Business
              </p>
              <p className="mt-6 text-base text-gray-600 max-md:max-w-full">
                We bring you a mobile app for banking problems that
                <br />
                oftenly wasting much of your times.
              </p>
              <button className="justify-center self-start p-2.5 mt-6 text-sm leading-5 text-center text-white bg-blue-600 rounded-md max-md:px-5">
                Get Started
              </button>

            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src={onlinePayment}
              className="grow w-full aspect-[1.33] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center self-stretch px-16 py-10 w-full rounded-3xl bg-gray-200 bg-opacity-30 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1215px] max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src={microsoft}
          className="shrink-0 max-w-full aspect-[1.45] w-[135px]"
        />
        <img
          loading="lazy"
          src={dropbox}
          className="shrink-0 max-w-full aspect-[1.45] w-[135px]"
        />
        <img
          loading="lazy"
          src={hnm}
          className="shrink-0 max-w-full aspect-[1.45] w-[135px]"
        />
        <img
          loading="lazy"
          src={airbnb}
          className="shrink-0 max-w-full aspect-[1.45] w-[135px]"
        />
        <img
          loading="lazy"
          src={canon}
          className="shrink-0 max-w-full aspect-[1.45] w-[135px]"
        />
        <img
          loading="lazy"
          src={del}
          className="shrink-0 max-w-full aspect-[1.45] w-[135px]"
        />
      </div>
    </div>
    <div className="px-5 w-full max-w-[1180px] max-md:mt-10 max-md:max-w-full ">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-medium text-slate-900 max-md:max-w-full">
              About The Aplication
            </div>
            <p className="mt-6 text-base text-gray-600 max-md:max-w-full">
              We have some great features from the application and it’s
              totally free to use by all users around the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-3.5 py-9 w-full text-white rounded-lg bg-[linear-gradient(180deg,#396AFC_0%,#2948FF_100%)] max-md:mt-6">
            <img
              loading="lazy"
              src={earphone}
              className="bg-white rounded-full aspect-square h-[58px] w-[58px]"
            />
            <div className="mt-5 text-lg font-bold">24/7 Support</div>
            <p className="self-stretch mt-5 text-base text-center">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-3.5 py-9 w-full text-white rounded-lg bg-[linear-gradient(180deg,#396AFC_0%,#2948FF_100%)] max-md:mt-6">
            <img
              loading="lazy"
              src={protect}
              className="bg-white rounded-full aspect-square h-[58px] w-[58px]"
            />
            <div className="mt-5 text-lg font-bold">Data Privacy</div>
            <p className="self-stretch mt-5 text-base text-center">
              We make sure your data is safe in our database and we will
              encrypt any data you submitted to us.
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-center px-3.5 py-9 w-full text-white rounded-lg bg-[linear-gradient(180deg,#396AFC_0%,#2948FF_100%)] max-md:mt-6">
            <img
              loading="lazy"
              src={download}
              className="bg-white rounded-full aspect-square h-[58px] w-[58px]"
            />
            <div className="mt-5 text-lg font-bold">Easy Download</div>
            <p className="self-stretch mt-5 text-base text-center">
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className=" w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full bg-[#2948FF]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imagesPhone}
            className="w-full shadow-sm aspect-[0.47] max-md:mt-10"
          />
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col grow px-5 mt-48 text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-4xl font-medium max-md:max-w-full">
              All The Great Zwallet Features.
            </div>
            <div className="mt-6 text-base max-md:max-w-full">
              We have some great features from the application and it’s
              totally free to use by all users around the world.
            </div>
            <div className="flex gap-3 mt-6 max-md:flex-wrap">
              <img
                loading="lazy"
                src={smallfee}
                className="shrink-0 my-auto w-12 aspect-square"
              />
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-lg font-bold max-md:max-w-full">
                  Small Fee
                </div>
                <div className="mt-1.5 text-base max-md:max-w-full">
                  We only charge 5% of every success transaction done in
                  Zwallet app.
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6 max-md:flex-wrap">
              <img
                loading="lazy"
                src={dataSecured}
                className="shrink-0 my-auto w-12 aspect-square"
              />
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-lg font-bold max-md:max-w-full">
                  Data Secured
                </div>
                <div className="mt-1.5 text-base max-md:max-w-full">
                  All your data is secured properly in our system and it’s
                  encrypted.
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6 max-md:flex-wrap">
              <img
                loading="lazy"
                src={friendly}
                className="shrink-0 my-auto w-12 aspect-square"
              />
              <div className="flex flex-col max-md:max-w-full">
                <div className="text-lg font-bold max-md:max-w-full">
                  User Friendly
                </div>
                <div className="mt-1.5 text-base max-md:max-w-full">
                  Zwallet come up with modern and sleek design and not
                  complicated.
                </div>
              </div>
            </div>
            <button className="justify-center self-start p-2.5 mt-6 text-sm font-medium leading-5 text-center text-blue-500 bg-white rounded-md max-md:px-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    <section>
        <div className="mt-8 text-5xl font-medium text-center text-slate-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Here From Our Customer
        </div>
        <div className="mt-6 text-base text-center text-gray-600 max-md:max-w-full">
        We always do our best for our customers to stay comfortable using the
        applications we provide
        </div>
        <div className="flex gap-5 justify-between px-5 mt-20 w-full text-base font-bold max-w-[1180px] text-slate-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <button>
                <img
                    loading="lazy"
                    src={leftArrow}
                    className="shrink-0 my-auto aspect-square w-[47px]"
                />
            </button>
            
        <div className="flex flex-col justify-center p-2.5 rounded-lg bg-gray-200 bg-opacity-30">
            <img
            loading="lazy"
            src={jamesbond}
            className="self-center rounded-full aspect-square w-[58px]"
            />
            <div className="mt-5 text-lg text-center">James Bond</div>
            <div className="flex gap-4 items-center self-center mt-5 whitespace-nowrap">
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto w-3.5 aspect-[1.08] fill-amber-500"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <div className="self-stretch">5.0</div>
            </div>
            <div className="mt-5 text-5xl text-center max-md:text-4xl">“</div>
            <div className="mt-5 text-center text-gray-600">
            “I use Zwallet to manage all financial needs. It’s super easy to use
            and it’s 100% free app”
            </div>
        </div>
        <div className="flex flex-col justify-center p-2.5 rounded-lg bg-gray-200 bg-opacity-30">
            <img
            loading="lazy"
            src={jamesbond}
            className="self-center rounded-full aspect-square w-[58px]"
            />
            <div className="mt-5 text-lg text-center">James Bond</div>
            <div className="flex gap-4 items-center self-center mt-5 whitespace-nowrap">
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto w-3.5 aspect-[1.08] fill-amber-500"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <div className="self-stretch">5.0</div>
            </div>
            <div className="mt-5 text-5xl text-center max-md:text-4xl">“</div>
            <div className="mt-5 text-center text-gray-600">
            “I use Zwallet to manage all financial needs. It’s super easy to use
            and it’s 100% free app”
            </div>
        </div>
        <div className="flex flex-col justify-center p-2.5 rounded-lg bg-gray-200 bg-opacity-30">
            <img
            loading="lazy"
            src={jamesbond}
            className="self-center rounded-full aspect-square w-[58px]"
            />
            <div className="mt-5 text-lg text-center">James Bond</div>
            <div className="flex gap-4 items-center self-center mt-5 whitespace-nowrap">
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto w-3.5 aspect-[1.08] fill-amber-500"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <img
                loading="lazy"
                src={star}
                className="shrink-0 self-stretch my-auto aspect-square fill-amber-500 w-[13px]"
            />
            <div className="self-stretch">5.0</div>
            </div>
            <div className="mt-5 text-5xl text-center max-md:text-4xl">“</div>
            <div className="mt-5 text-center text-gray-600">
            “I use Zwallet to manage all financial needs. It’s super easy to use
            and it’s 100% free app”
            </div>
        </div>
        <button>
            <img
                loading="lazy"
                src={blueRightArrow}
                className="shrink-0 my-auto aspect-square w-[47px]"
            />
        </button>
        </div>
        <img
        loading="lazy"
        src={pagination_testimonies}
        className="mt-9 aspect-[9.09] w-[76px]"
        />
    </section>  
    
  </main>
);
}