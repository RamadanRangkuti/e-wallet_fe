import LandingPage2Testimonies from "../components/LandingPage2Testimonials"
import phone2 from '../assets/images/2phoneDashboard2.svg'
import applestore from '../assets/icons/applestore.svg'
import playstore from '../assets/icons/playstore.svg'
import users2 from '../assets/icons/users2.svg'
import earphone from "../assets/icons/earphone2.svg"
import protect from "../assets/icons/protect2.svg"
import download from "../assets/icons/download2.svg"
import potraitPhoto from "../assets/images/potraitPhoto.svg"
import onlinePayment from "../assets/images/Online-payment-phone.png"
import checkList from "../assets/icons/checkList.svg"
import airbnb from "../assets/icons/airbnb.svg"
import canon from "../assets/icons/canon.svg"
import del from "../assets/icons/del.svg"
import hnm from "../assets/icons/h&m.svg"
import microsoft from "../assets/icons/microsoft.svg"
import dropbox from "../assets/icons/dropbox.svg"


export default function LandingPage2() {
return (
    <main className="flex flex-col bg-white">
    <header className="flex flex-col items-center px-16 pt-16 w-full bg-blue-600 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1052px] max-md:max-w-full">
            <h1 className="self-center text-6xl font-medium text-center text-white max-md:max-w-full max-md:text-4xl">
                Experience the Future of Digital Payments with e-wallet
            </h1>
            <div className="mt-9 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <img loading="lazy" src={phone2} className="grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full" />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                            <p className="text-base text-white max-md:max-w-full">
                                Simplify Your Life with Secure and Convenient Mobile Payments
                            </p>
                            <div className="flex gap-5 mt-6 text-sm font-medium leading-5 text-center max-md:flex-wrap">
                                <button className="flex flex-1 gap-2.5 justify-center p-2.5 text-blue-600 bg-white rounded-md max-md:px-5">
                                    <img loading="lazy" src={playstore} className="shrink-0 w-6 aspect-square" />
                                    <div className="my-auto">Play Store</div>
                                </button>
                                <button className="flex flex-1 gap-2.5 justify-center p-2.5 text-white rounded-md border border-white border-solid max-md:px-5">
                                    <img loading="lazy" src={applestore} className="shrink-0 w-6 aspect-square" />
                                    <div className="my-auto">Apps Store</div>
                                </button>
                            </div>
                            <div className="flex flex-col mt-6 text-white max-md:max-w-full">
                                <div className="flex gap-3 pr-20 text-5xl font-medium max-md:flex-wrap max-md:pr-5 max-md:text-4xl">
                                    <div className="max-md:text-4xl">4.6 M</div>
                                    <img loading="lazy" src={users2} className="shrink-0 my-auto max-w-full aspect-[2.5] w-[120px]" />
                                </div>
                                <p className="mt-3 text-base max-md:max-w-full">
                                    Around the world, we already have over 4.6 happy user
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <section className="flex justify-center items-center p-2.5 w-full max-md:px-5 max-md:max-w-full px-32">
        <div className="flex gap-5 max-md:flex-wrap">
            <article className="flex gap-2.5 pr-2.5">
                <img loading="lazy" src={earphone} className="shrink-0 my-auto aspect-square w-[58px]" />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-slate-900">24/7 Support</h2>
                    <p className="mt-2 text-base text-gray-600">
                        We have 24/7 contact support so you can contact us whenever you
                        want and we will respond it.
                    </p>
                </div>
            </article>
            <article className="flex gap-2.5 pr-2.5">
                <img loading="lazy" src={protect} className="shrink-0 my-auto aspect-square w-[58px]" />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-slate-900">Data Privacy</h2>
                    <p className="mt-2 text-base text-gray-600">
                        We make sure your data is safe in our database and we will
                        encrypt any data you submitted to us.
                    </p>
                </div>
            </article>
            <article className="flex gap-2.5 pr-2.5">
                <img loading="lazy" src={download} className="shrink-0 my-auto aspect-square w-[58px]" />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold text-slate-900">Easy Download</h2>
                    <p className="mt-2 text-base text-gray-600">
                        Zwallet is 100% totally free to use it’s now available on Google
                        Play Store and App Store.
                    </p>
                </div>
            </article>
        </div>
    </section>
    <section className="self-center mt-1.5 w-full max-w-[1180px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <article className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow px-5 mt-11 font-medium max-md:mt-10 max-md:max-w-full">
                    <h2 className="text-lg font-bold text-blue-600 max-md:max-w-full">WELCOME TO E-WALLET</h2>
                    <h3 className="mt-6 text-4xl text-slate-900 max-md:max-w-full">Your All-in-One Digital Payment Solution</h3>
                    <p className="mt-6 text-base leading-6 text-gray-600 max-md:max-w-full">
                        Say goodbye to cash and hello to the future of payments! With
                        e-wallet, you have the power of secure, fast, and convenient
                        digital transactions right at your fingertips. Whether you're
                        shopping, dining out, or sending money to loved ones, we've got
                        you covered.
                    </p>
                    <button className="justify-center self-start p-2.5 mt-6 text-sm leading-5 text-center text-white bg-blue-600 rounded-md max-md:px-5">
                        Get Started
                    </button>
                </div>
            </article>
            <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                <img loading="lazy" src={potraitPhoto} className="grow w-full aspect-[1.67] max-md:mt-5 max-md:max-w-full" />
            </div>
        </div>
    </section>
    <section className="flex justify-center items-center p-2.5 mt-20 w-full bg-gray-200 bg-opacity-30 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-w-[1180px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src={onlinePayment} className="w-full aspect-square max-md:mt-10 max-md:max-w-full" />
                </div>
                <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start self-stretch my-auto text-lg font-bold text-green-700 max-md:mt-10 max-md:max-w-full">
                        <h2 className="self-stretch text-4xl font-medium text-stone-900 max-md:max-w-full">All The Great Zwallet Features.</h2>
                        <p className="self-stretch mt-6 text-base text-stone-900 max-md:max-w-full">
                            We have some great features from the application and it’s
                            totally free to use by all users around the world.
                        </p>
                        <ul className="flex flex-col gap-3 mt-6">
                            <li className="flex gap-3">
                                <img loading="lazy" src={checkList} className="shrink-0 w-6 aspect-square" />
                                <span className="justify-center self-start">Small Fee</span>
                            </li>
                            <li className="flex gap-3">
                                <img loading="lazy" src={checkList} className="shrink-0 w-6 aspect-square" />
                                <span className="justify-center self-start">Data Secured</span>
                            </li>
                            <li className="flex gap-3">
                                <img loading="lazy" src={checkList} className="shrink-0 w-6 aspect-square" />
                                <span className="justify-center self-start">User Friendly</span>
                            </li>
                        </ul>
                        <button className="justify-center p-2.5 mt-6 text-sm font-medium leading-5 text-center text-white bg-blue-600 rounded-md max-md:px-5">
                            Get Started
                        </button>
                    </div>
                </article>
            </div>
        </div>
    </section>
    <section className="flex justify-center items-center px-16 py-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1168px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-2.5 max-md:max-w-full">
                        <h2 className="text-4xl font-medium text-slate-900 max-md:max-w-full">100+ Trusted Partners</h2>
                        <p className="mt-6 text-base text-gray-600 max-md:max-w-full">
                            We have reached global level and have 100+
                            <br />
                            brand partners around the globe.
                        </p>
                    </div>
                </article>
                <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                    <div className="flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap max-md:mt-7">
                        <img loading="lazy" src={microsoft} className="shrink-0 max-w-full aspect-[1.45] w-[100px]" />
                        <img loading="lazy" src={dropbox} className="shrink-0 max-w-full aspect-[1.45] w-[100px]" />
                        <img loading="lazy" src={hnm} className="shrink-0 max-w-full aspect-[1.45] w-[100px]" />
                        <img loading="lazy" src={airbnb} className="shrink-0 max-w-full aspect-[1.45] w-[100px]" />
                        <img loading="lazy" src={canon} className="shrink-0 max-w-full aspect-[1.45] w-[100px]" />
                        <img loading="lazy" src={del} className="shrink-0 max-w-full aspect-[1.45] w-[100px]" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <LandingPage2Testimonies />
    <footer className="flex flex-col items-center px-16 pt-14 mt-16 w-full bg-gray-200 bg-opacity-30 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className=" w-full max-w-[1180px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img loading="lazy" src={phone2} className="grow w-full aspect-[0.95] max-md:mt-10 max-md:max-w-full" />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                        <h2 className="text-4xl text-slate-900 max-md:max-w-full">Download The App</h2>
                        <p className="mt-6 text-base leading-6 text-slate-900 max-md:max-w-full">
                            Ready to experience the future of payments? Download e-wallet
                            now and enjoy a world of convenience at your fingertips.
                        </p>
                        <div className="flex gap-5 mt-6 text-sm leading-5 text-center max-md:flex-wrap">
                            <button className="flex flex-1 gap-2.5 justify-center p-2.5 text-white bg-blue-600 rounded-md max-md:px-5">
                                <img loading="lazy" src={playstore} className="shrink-0 w-6 aspect-square" />
                                <div className="my-auto">Play Store</div>
                            </button>
                            <button className="flex flex-1 gap-2.5 justify-center p-2.5 text-blue-600 rounded-md border border-blue-600 border-solid max-md:px-5">
                                <img loading="lazy" src={applestore} className="shrink-0 w-6 aspect-square" />
                                <div className="my-auto">Apps Store</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</main>


    );
}