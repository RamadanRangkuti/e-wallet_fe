import arrowLeft from "../assets/icons/leftArrow.svg";
import jamesBond from "../assets/images/jamesbond.png";
import star from "../assets/icons/star.svg";
import arrowKanan from "../assets/icons/blueRightArrow.svg";

function TestimonialSection() {
  return (
    <section className="flex flex-col items-center mt-5">
      <div className="flex flex-col px-5 text-center max-md:max-w-full">
        <h2 className="w-full text-4xl font-medium text-slate-900 max-md:max-w-full">What Our Users Are Saying</h2>
        <p className="mt-6 w-full text-base text-gray-600 max-md:max-w-full">Ready to experience the future of payments? Download e-wallet now and enjoy a world of convenience at your fingertips.</p>
      </div>
      <div className="flex gap-5 justify-between items-center self-center px-5 mt-10 w-full text-base font-bold text-white max-w-[1180px] max-md:flex-wrap max-md:max-w-full">
        <button aria-label="Previous testimonial" className="shrink-0 self-stretch my-auto aspect-square w-[47px]">
          <img loading="lazy" src={arrowLeft} alt="" className="w-full h-full" />
        </button>
        <div className="flex flex-col justify-center self-stretch px-5 py-10 bg-blue-600 rounded-2xl max-md:max-w-full">
          <div className="flex flex-col items-center pb-7 max-md:max-w-full">
            <img loading="lazy" src={jamesBond} alt="James Bond" className="rounded-full aspect-square w-[58px]" />
            <h3 className="mt-5 text-lg text-center">James Bond</h3>
            <div className="flex gap-4 items-center mt-5 whitespace-nowrap">
              {[...Array(5)].map((_, index) => (
                <img key={index} loading="lazy" src={star} alt="" className="shrink-0 self-stretch my-auto aspect-[1.09] fill-amber-500 w-[13px]" />
              ))}
              <span className="self-stretch">5.0</span>
            </div>
            <div className="mt-5 text-5xl text-center max-md:text-4xl">"</div>
            <p className="self-stretch mt-5 text-center max-md:max-w-full">
              I've been using the e-wallet for over two years now, and I'm very satisfied with the ease of use. This has completely changed the way I shop and conduct financial transactions.
            </p>
          </div>
        </div>
        <button aria-label="Next testimonial" className="shrink-0 self-stretch my-auto aspect-square w-[47px]">
          <img loading="lazy" src={arrowKanan} alt="" className="w-full h-full" />
        </button>
      </div>
    </section>
  );
}

export default TestimonialSection;
