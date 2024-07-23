import LandingPage2Testimonies from "../components/LandingPage2Testimonials";
import phone2 from "../assets/images/2phoneDashboard2.webp";
import applestore from "../assets/icons/applestore.svg";
import applestoreblue from "../assets/icons/applestore-blue.svg";
import playstore from "../assets/icons/playstore.svg";
import users2 from "../assets/icons/users2.svg";
import earphone from "../assets/icons/earphone.svg";
import protect from "../assets/icons/protect.svg";
import download from "../assets/icons/download.svg";
import potraitPhoto from "../assets/images/potraitPhoto.svg";
import onlinePayment from "../assets/images/Online-payment-phone.webp";
import checkList from "../assets/icons/checkList.svg";
import airbnb from "../assets/icons/airbnb.svg";
import canon from "../assets/icons/canon.svg";
import del from "../assets/icons/del.svg";
import hnm from "../assets/icons/h&m.svg";
import microsoft from "../assets/icons/microsoft.svg";
import dropbox from "../assets/icons/dropbox.svg";

export default function LandingPage() {
  return (
    <main className="font-montserrat">
      <section className="items-center px-5 md:px-20 pt-24 bg-primary">
        <h1 className="mb-5 md:text-6xl md:text-center text-white text-4xl">Experience the Future of Digital Payments with e-wallet</h1>
        <div className="md:flex md:flex-row-reverse md:gap-5 md:justify-center">
          <div className="self-center">
            <p className="text-sm text-white max-md:max-w-full">Simplify Your Life with Secure and Convenient Mobile Payments</p>
            <div className="flex mt-5 text-sm justify-between">
              <button className="w-1/2 py-2.5 mr-2 text-primary bg-white rounded-md">
                <div className="flex justify-center">
                  <img width="20" src={playstore} />
                  <p className="text-sm">Play Store</p>
                </div>
              </button>
              <button className="w-1/2 py-2.5 text-white rounded-md border border-white border-solid">
                <div className="flex justify-center">
                  <img width="20" src={applestore} />
                  <div className="text-sm">Apps Store</div>
                </div>
              </button>
            </div>
            <div className="mt-6 text-white max-md:max-w-full">
              <div className="flex gap-3 items-center">
                <p className="text-4xl">4.6 M</p>
                <img src={users2} />
              </div>
              <p className="mt-3 text-sm">Around the world, we already have over 4.6 happy user</p>
            </div>
          </div>
          <div className="grid place-items-center">
            <img src={phone2} />
          </div>
        </div>
      </section>
      <section className="md:flex md:gap-6 pt-10 pb-2.5 px-5 md:px-20">
        <div className="grid place-items-center md:flex md:gap-4">
          <img src={earphone} />
          <div className="text-center md:text-justify">
            <h2 className="my-3 md:my-0 text-lg font-bold text-slate-900">24/7 Support</h2>
            <p className="text-gray-600">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
          </div>
        </div>
        <div className="grid place-items-center md:flex md:gap-4">
          <img src={protect} />
          <div className="text-center md:text-justify">
            <h2 className="my-3 md:my-0 text-lg font-bold text-slate-900">Data Privacy</h2>
            <p className="text-gray-600">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
          </div>
        </div>
        <div className="grid place-items-center md:flex md:gap-4">
          <img src={download} />
          <div className="text-center md:text-justify">
            <h2 className="my-3 md:my-0 text-lg font-bold text-slate-900">Easy Download</h2>
            <p className="text-gray-600">Zwallet is 100% totally free to use it's now available on Google Play Store and App Store.</p>
          </div>
        </div>
      </section>
      <section className="md:flex md:flex-row-reverse md:gap-5 md:justify-center px-5 md:px-20 grid place-items-center md:place-items-end">
        <div>
          <img src={potraitPhoto} />
        </div>
        <div className="mt-11 md:w-1/2 md:pb-5 text-center md:text-left">
          <h2 className="text-lg font-bold text-blue-600">WELCOME TO E-WALLET</h2>
          <h3 className="my-5 text-2xl lg:text-4xl font-semibold text-slate-900">Your All-in-One Digital Payment Solution</h3>
          <p className="text-gray-600">
            Say goodbye to cash and hello to the future of payments! With e-wallet, you have the power of secure, fast, and convenient digital transactions right at your fingertips. Whether you're shopping, dining out, or sending money to
            loved ones, we've got you covered.
          </p>
          <button className="w-full p-2.5 mt-6 text-sm text-center text-white bg-blue-600 rounded-md">Get Started</button>
        </div>
      </section>
      <section className="md:flex md:gap-3 md:justify-center bg-gray-200 bg-opacity-30 px-5 md:px-20 py-10 mt-10">
        <div className=" grid place-items-center">
          <img src={onlinePayment} />
        </div>
        <div className="mt-10 md:mt-0 md:self-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-stone-900">All The Great Zwallet Features.</h2>
          <p className="mt-6 lg:text-lg text-stone-900">We have some great features from the application and it's totally free to use by all users around the world.</p>
          <ul className="flex flex-col gap-3 mt-6 font-bold text-green-600">
            <li className="flex gap-3">
              <img src={checkList} />
              <p>Small Fee</p>
            </li>
            <li className="flex gap-3">
              <img src={checkList} />
              <p>Data Secured</p>
            </li>
            <li className="flex gap-3">
              <img src={checkList} />
              <p>User Friendly</p>
            </li>
          </ul>
          <button className="w-full md:w-48 p-2.5 mt-6 text-sm text-center text-white bg-blue-600 rounded-md">Get Started</button>
        </div>
      </section>
      <section className="px-5 md:px-20 py-20 md:flex md:justify-center">
        <div className="text-center md:text-start md:w-1/2">
          <h2 className="text-4xl md:text-2xl font-medium text-slate-900">100+ Trusted Partners</h2>
          <p className="mt-6 lg:text-lg text-gray-600">We have reached global level and have 100+ brand partners around the globe.</p>
        </div>
        <div className="grid place-items-center md:justify-center gap-5 md:flex md:gap-0 md:w-1/2">
          <div>
            <img src={microsoft} />
          </div>
          <div>
            <img src={dropbox} />
          </div>
          <div>
            <img src={hnm} />
          </div>
          <div>
            <img src={airbnb} />
          </div>
          <div>
            <img src={canon} />
          </div>
          <div>
            <img src={del} />
          </div>
        </div>
      </section>
      <LandingPage2Testimonies />
      <section className="md:flex md:flex-row-reverse md:gap-5 pt-14 w-full bg-gray-200 bg-opacity-30 px-5 md:px-20 mt-10">
        <div className="mt-10 md:mt-0 md:w-1/2 md:self-center">
          <h2 className="text-4xl text-slate-900 font-semibold">Download The App</h2>
          <p className="mt-5 text-slate-900">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
          <div className="flex mt-5 text-sm justify-between">
            <button className="w-1/2 py-2.5 mr-2 text-white bg-primary rounded-md">
              <div className="flex justify-center">
                <img width="20" src={playstore} />
                <p className="text-sm">Play Store</p>
              </div>
            </button>
            <button className="w-1/2 py-2.5 text-primary rounded-md border border-primary border-solid">
              <div className="flex justify-center items-center">
                <img width="20" height="20" src={applestoreblue} />
                <div className="text-sm">Apps Store</div>
              </div>
            </button>
          </div>
        </div>
        <div className="grid place-items-center mt-5 md:mt-0 md:w-1/2">
          <img src={phone2} />
        </div>
      </section>
    </main>
  );
}
