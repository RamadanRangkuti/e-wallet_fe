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
    <main className="font-montserrat max-w-fit">
      <section className="items-center px-5 md:px-20 pt-24 bg-primary">
        <h1 className="mb-5 md:text-6xl text-4xl text-center text-white">
          Experience the Future of Digital Payments with e-wallet
        </h1>
        <div className="md:flex md:flex-row-reverse md:gap-5 md:justify-center">
          <div className="self-center">
            <p className="text-sm text-white max-md:max-w-full">
              Simplify Your Life with Secure and Convenient Mobile Payments
            </p>
            <div className="flex mt-5 text-sm justify-between">
              <button className="w-1/2 py-2.5 mr-2 text-primary bg-white rounded-md">
                <div className="flex justify-center items-center">
                  <img width="20" src={playstore} alt="Play Store" />
                  <p className="ml-2">Play Store</p>
                </div>
              </button>
              <button className="w-1/2 py-2.5 text-white rounded-md border border-white border-solid">
                <div className="flex justify-center items-center">
                  <img width="20" src={applestore} alt="App Store" />
                  <p className="ml-2">App Store</p>
                </div>
              </button>
            </div>
            <div className="mt-6 text-white max-md:max-w-full">
              <div className="flex gap-3 items-center">
                <p className="text-4xl">4.6M</p>
                <img src={users2} alt="Users Icon" />
              </div>
              <p className="mt-3 text-sm">
                Around the world, we already have over 4.6 million happy users
              </p>
            </div>
          </div>
          <div className="grid place-items-center">
            <img src={phone2} alt="Phone Dashboard" />
          </div>
        </div>
      </section>
      
      <section className="md:flex md:gap-6 pt-10 pb-2.5 px-5 md:px-20">
        {[
          { imgSrc: earphone, title: "24/7 Support", description: "We have 24/7 contact support so you can contact us whenever you want and we will respond to it." },
          { imgSrc: protect, title: "Data Privacy", description: "We make sure your data is safe in our database and we will encrypt any data you submit to us." },
          { imgSrc: download, title: "Easy Download", description: "Zwallet is 100% free to use and is now available on Google Play Store and App Store." },
        ].map((feature, idx) => (
          <div key={idx} className="grid place-items-center md:flex md:gap-4">
            <img src={feature.imgSrc} alt={feature.title} />
            <div className="text-center md:text-left">
              <h2 className="my-3 md:my-0 text-lg font-bold text-slate-900">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="md:flex md:flex-row-reverse md:gap-5 md:justify-center px-5 md:px-20 grid place-items-center md:place-items-end">
        <div>
          <img src={potraitPhoto} alt="Portrait Photo" />
        </div>
        <div className="mt-11 md:w-1/2 md:pb-5 text-center md:text-left">
          <h2 className="text-lg font-bold text-blue-600">WELCOME TO E-WALLET</h2>
          <h3 className="my-5 text-2xl lg:text-4xl font-semibold text-slate-900">
            Your All-in-One Digital Payment Solution
          </h3>
          <p className="text-gray-600">
            Say goodbye to cash and hello to the future of payments! With e-wallet, you have the power of secure, fast, and convenient digital transactions right at your fingertips. Whether you're shopping, dining out, or sending money to loved ones, we've got you covered.
          </p>
          <button className="w-full p-2.5 mt-6 text-sm text-center text-white bg-blue-600 rounded-md">
            Get Started
          </button>
        </div>
      </section>

      <section className="md:flex md:gap-3 md:justify-center bg-gray-200 bg-opacity-30 px-5 md:px-20 py-10 mt-10">
        <div className="grid place-items-center">
          <img src={onlinePayment} alt="Online Payment" />
        </div>
        <div className="mt-10 md:mt-0 md:self-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-stone-900">All The Great Zwallet Features</h2>
          <p className="mt-6 lg:text-lg text-stone-900">We have some great features in the application and it's totally free to use by all users around the world.</p>
          <ul className="flex flex-col gap-3 mt-6 font-bold text-green-600">
            {["Small Fee", "Data Secured", "User Friendly"].map((feature, idx) => (
              <li key={idx} className="flex gap-3">
                <img src={checkList} alt="Check List" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <button className="w-full md:w-48 p-2.5 mt-6 text-sm text-center text-white bg-blue-600 rounded-md">
            Get Started
          </button>
        </div>
      </section>

      <section className="px-5 md:px-20 py-20 md:flex md:justify-center">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-4xl md:text-2xl font-medium text-slate-900">100+ Trusted Partners</h2>
          <p className="mt-6 lg:text-lg text-gray-600">
            We have reached a global level and have 100+ brand partners around the globe.
          </p>
        </div>
        <div className="grid place-items-center md:justify-center gap-5 md:flex md:gap-0 md:w-1/2">
          {[microsoft, dropbox, hnm, airbnb, canon, del].map((partner, idx) => (
            <div key={idx}>
              <img src={partner} alt="Partner Logo" />
            </div>
          ))}
        </div>
      </section>

      <LandingPage2Testimonies />

      <section className="md:flex md:flex-row-reverse md:gap-5 pt-14 w-full bg-gray-200 bg-opacity-30 px-5 md:px-20 mt-10">
        <div className="mt-10 md:mt-0 md:w-1/2 md:self-center">
          <h2 className="text-4xl text-slate-900 font-semibold">Download The App</h2>
          <p className="mt-5 text-slate-900">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
          <div className="flex mt-5 text-sm justify-between">
            <button className="w-1/2 py-2.5 mr-2 text-white bg-primary rounded-md">
              <div className="flex justify-center items-center">
                <img width="20" src={playstore} alt="Play Store" />
                <p className="ml-2">Play Store</p>
              </div>
            </button>
            <button className="w-1/2 py-2.5 text-primary rounded-md border border-primary border-solid">
              <div className="flex justify-center items-center">
                <img width="20" src={applestoreblue} alt="App Store" />
                <p className="ml-2">App Store</p>
              </div>
            </button>
          </div>
        </div>
        <div className="grid place-items-center">
          <img src={phone2} alt="Phone Dashboard" />
        </div>
      </section>
    </main>
  );
}
