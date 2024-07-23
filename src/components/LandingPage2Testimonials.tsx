import arrowLeft from "../assets/icons/leftArrow.svg";
import jamesBond from "../assets/images/jamesbond.webp";
import star from "../assets/icons/star.svg";
import arrowKanan from "../assets/icons/blueRightArrow.svg";

function TestimonialSection() {
  return (
    <section className="font-montserrat text-center px-5 md:px-20">
      <div className="">
        <h2 className="text-2xl font-semibold text-slate-900">What Our Users Are Saying</h2>
        <p className="mt-5 text-gray-600">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
      </div>
      <div className="gap-5 md:flex md:items-center md:justify-between mt-10 text-white">
        <button aria-label="Previous testimonial" className="hidden md:flex">
          <img src={arrowLeft} alt="" />
        </button>
        <div className="px-5 py-10 bg-blue-600 rounded-2xl md:w-1/2">
          <div className="grid place-items-center">
            <img width="70" src={jamesBond} alt="James Bond" />
          </div>
          <h3 className="mt-5 text-lg font-bold text-center">James Bond</h3>
          <div className="flex gap-4 justify-center mt-5">
            {[...Array(5)].map((_, index) => (
              <img key={index} src={star} alt="" />
            ))}
            <p>5.0</p>
          </div>
          <div className="mt-5 text-4xl font-bold text-center">“</div>
          <p className="mt-5 text-center">I've been using the e-wallet for over two years now, and I'm very satisfied with the ease of use. This has completely changed the way I shop and conduct financial transactions.</p>
        </div>
        <div className="flex gap-2 mt-8 md:hidden justify-center">
          <div className="dot w-7 h-2 bg-primary rounded-full" data-page="1"></div>
          <div className="dot w-2 h-2 bg-gray-300 rounded-full" data-page="2"></div>
          <div className="dot w-2 h-2 bg-gray-300 rounded-full" data-page="3"></div>
          <div className="dot w-2 h-2 bg-gray-300 rounded-full" data-page="4"></div>
        </div>
        <button aria-label="Next testimonial" className="hidden md:flex">
          <img src={arrowKanan} alt="" />
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;
