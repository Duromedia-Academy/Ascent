






















import { useRef } from "react";
import { Link } from "react-router-dom";

// Swiper Slide
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Re-usable Componets
import { Carousel } from "../../components";
// header
import { useGlobalContext } from "../../components/context";
// animation
import useAOS from "../../components/useAos";

// images
import { images } from "../../constants";
// Icons
import { BsFilePlay } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { BiSolidRightArrow } from "react-icons/bi";




const Home = () => {
  const { closeSubmenu } = useGlobalContext();
 const swiperRef = useRef();

 const Aos = useAOS();

  return (
    <div className=" overflow-x-hidden" onMouseOver={closeSubmenu}>
      <section className="py-14 lg:py-20 xl:py-28 px-6 lg:px-10">
        <div className=" max-w-3xl lg:max-w-6xl mx-auto " data-aos="fade-up">
          <div className=" grid grid-cols-1  lg:grid-cols-2 lg:place-content-center  gap-14 ">
            {/* Content side */}
            <div className="space-y-6 ">
              <div className="max-w-xl">
                <h2 className=" text-5xl md:text-6xl leading-[4rem] lg:leading-[4.5rem] font-bold  py-5 ">
                  Share what you know; we'll help you get paid for it
                </h2>
                <p className=" text-lg lg:text-xl py-2 ">
                  Teachable helps creators engage their online audiences and get
                  paid on their own terms with courses, coaching, and
                  downloadable content.
                </p>
              </div>

              <div className="max-w-2xl space-y-4">
                <form>
                  <label>Enter your email:</label>
                  <div className=" flex flex-col md:flex-row gap-4 mt-3">
                    <input
                      type="email"
                      placeholder="hello@email.com"
                      className=" border-0 outline-none py-4 px-2 flex-[65%] rounded-md   p-1 bg-gray-100 border-b-2  "
                    />
                    <button className=" bg-secondary-color text-white hover:bg-secondary-color/60 capitalize text-base  transition-colors duration-700  flex-[35%] py-4 px-2 font-semibold  rounded-md">
                      Join for free
                    </button>
                  </div>
                </form>
                <p className="   text-base pt-2">
                  *By submitting your email address, you agree to Teachable's{" "}
                  <Link href="#/" className=" underline">
                    Terms of use
                  </Link>{" "}
                  and{" "}
                  <Link href="#/" className=" underline">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
            {/* Image side */}

            <div className="">
              <Swiper
                effect={"slide"}
                speed={1500}
                spaceBetween={30}
                loop={true}
                showsPagination={false}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  stopOnLastSlide: false,
                  waitForTransition: true,
                }}
                modules={[Autoplay]}
                className="h-full w-full "
              >
                <SwiperSlide>
                  <img
                    src={images.homeSec1img1}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.homeSec1img2}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={images.homeSec1img3}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 xl:py-28 bg-secondary-color/40 px-6 lg:px-10">
        <div className="max-w-3xl lg:max-w-6xl mx-auto ">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-14  md:place-content-center md:place-items-center">
            {/* Image side */}

            <div data-aos="fade-right">
              <div className=" order-2 lg:order-1 ">
                <div>
                  <img
                    src={images.homeSec2img1}
                    alt=""
                    className=" max-w-full"
                  />
                </div>
                <div className="flex  items-center gap-3  ">
                  <p className="text-base ">Learn more about Teachable</p>
                  <BiSolidRightArrow className=" text-lg text-secondary-color" />
                </div>
              </div>
            </div>

            {/* Content side */}

            <div data-aos="fade-left">
              <div className=" space-y-7 order-1 lg:order-2">
                <h2 className=" text-4xl lg:text-5xl xl:text-6xl font-GothamMedium font-bold text-primary-color ">
                  Escape the algorithm
                </h2>
                <p className=" text-lg lg:text-xl ">
                  Teachable is a no-code platform for creators who want to build
                  more impactful businesses through courses, coaching, and
                  digital downloads. Whether you’re going viral on TikTok or
                  bringing your in-person classes online, with Teachable you own
                  your content and your students’ experience.
                </p>

                <div className=" ">
                  <button className=" bg-secondary-color text-white hover:bg-secondary-color/60 capitalize text-base  transition-colors duration-700   py-4 px-5 font-semibold  rounded-md">
                    start for free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20  xl:py-28 px-6 lg:px-10 bg-secondary-color/10">
        <div className="max-w-3xl lg:max-w-6xl mx-auto ">
          {/* Title  */}

          <div data-aos="fade-up">
            <div className=" text-center space-y-6 max-w-4xl mx-auto pb-10">
              <h3 className="font-bold  text-4xl lg:text-5xl ">
                Three ways to sell
              </h3>
              <p className=" text-lg  xl:text-xl ">
                There’s no all-in-one formula for success as a creator. That’s
                why we let you choose how to build your business.
              </p>
            </div>
          </div>

          {/* Content  */}
          <div className=" grid grid-cols-1  lg:grid-cols-3 gap-10 place-items-center max-w-xl lg:max-w-6xl mx-auto mmd:place-content-center md:place-items-center pt-10">
            <div className=" bg-white border  space-y-14 pb-8 ">
              <div
                style={{
                  backgroundImage: `url('${images.homeSec3img1}')`,
                }}
                className="h-[50vh] object-cover w-full border bg-center bg-cover bg-no-repeat "
              ></div>
              <div className="space-y-8 px-5 ">
                <div className="space-y-4">
                  <h4 className=" font-semibold text-xl lg:text-2xl">
                    Online courses
                  </h4>
                  <p className=" text-base  lg:text-lg ">
                    Our intuitive course builder gives you the power to share
                    what you know. No coding or design skills necessary.
                  </p>
                </div>

                <div className="flex self-start ">
                  <Link
                    href="#"
                    className="text-base font-bold self-start border-b-[3px] border-b-primary-color  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>

            <div className=" bg-white border  space-y-14 pb-8 ">
              <div
                style={{
                  backgroundImage: `url('${images.homeSec3img2}')`,
                }}
                className="h-[50vh] object-contain w-full border bg-center bg-cover bg-no-repeat "
              ></div>
              <div className="space-y-8 px-5 ">
                <div className="space-y-4">
                  <h4 className=" font-semibold text-xl lg:text-2xl">
                    Online courses
                  </h4>
                  <p className=" text-base  lg:text-lg">
                    Our intuitive course builder gives you the power to share
                    what you know. No coding or design skills necessary.
                  </p>
                </div>

                <div className="flex self-start ">
                  <Link
                    href="#"
                    className="text-base font-bold self-start border-b-[3px] border-b-primary-color  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>

            <div className=" bg-white border  space-y-14 pb-8 ">
              <div
                style={{
                  backgroundImage: `url('${images.homeSec1img1}')`,
                }}
                className="h-[50vh] object-contain w-full border bg-center bg-cover bg-no-repeat "
              ></div>
              <div className="space-y-8 px-5 ">
                <div className="space-y-4">
                  <h4 className=" font-bold text-xl lg:text-2xl">
                    Online courses
                  </h4>
                  <p className=" text-base  lg:text-lg  ">
                    Our intuitive course builder gives you the power to share
                    what you know. No coding or design skills necessary.
                  </p>
                </div>

                <div className="flex self-start ">
                  <Link
                    href="#"
                    className="text-base font-bold self-start border-b-[3px] border-b-primary-color  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 xl:py-28 bg-primary-color text-white px-6 lg:px-10">
        <div className="max-w-3xl lg:max-w-6xl mx-auto " data-aos="fade-up">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-14  md:place-content-center md:place-items-center">
            {/* Content 1 side */}
            <div className="space-y-5 max-w-md mx-auto ">
              <h2 className=" text-3xl lg:text-5xl  font-bold ">
                Free to start,{" "}
                <span className="font-semibold tracking-wider">
                  simple to scale
                </span>
              </h2>
              <p className=" text-lg lg:text-xl ">
                Our free plan includes everything you need to begin teaching and
                earning now. Upgrade later for additional resources to support
                your business’s changing needs.
              </p>
              <div className=" pt-5 flex justify-start ">
                <Link
                  href="#/"
                  className="text-base font-semibold self-start border-b-[3px] border-b-secondary-color  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5"
                >
                  View all plans
                </Link>
              </div>
            </div>
            {/* Content 3 side */}
            <div className=" border m-10 max-w-sm mx-auto ">
              <div className="relative -top-[20px] -left-[20px]   space-y-4 py-10 bg-white text-black px-8 ">
                <h3 className="text-3xl font-semibold  ">Free plan </h3>
                <p className="text-lg lg:text-xl pr-10">
                  {" "}
                  The foundational tools you need to start earning today. No
                  credit card required.
                </p>

                <p className="text-7xl font-bold leading-[4rem] py-5 text-secondary-color">
                  {" "}
                  $0
                </p>

                <div className=" ">
                  <button className=" bg-secondary-color text-white hover:bg-secondary-color/60 capitalize text-base   transition-colors duration-700   py-4 px-5 font-semibold  rounded-md">
                    start for free
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" ">
        <div>
          <img src={images.homeSec4img1} alt="" className=" w-full" />
        </div>
      </section>

      <section className=" py-14 lg:py-20 xl:py-28 px-6 lg:px-10 bg-secondary-color/[0.02]">
        <div className="max-w-3xl lg:max-w-6xl mx-auto ">
          {/* Title */}
          <div data-aos="fade-up">
            <div className=" text-center space-y-6 max-w-4xl  mx-auto pb-10">
              <h3 className="text-secondary-color px-10  font-bold text-4xl lg:text-5xl">
                Less stress. More results.
              </h3>
              <p className=" text-lg lg:text-xl ">
                The tools you need to build, grow, and manage a thriving
                knowledge business are right here. Get started in three simple
                steps.
              </p>
            </div>
          </div>

          {/* Content  */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-lg sm:max-w-xl lg:max-w-6xl mx-auto  place-items-center mt-10 gap-14 ">
            <div className="" data-aos="flip-left">
              <h2 className=" border-b-2 border-black pb-2 text-3xl"> 1</h2>
              <h3 className=" py-6 text-xl md:text-2xl">Prep your content</h3>
              <p className=" text-base  lg:text-lg">
                Outline your course, plan a coaching program, or design a
                digital product you’d like to upload and sell.
              </p>
            </div>
            <div className="" data-aos="flip-right">
              <h2 className=" border-b-2 border-black pb-2 text-3xl"> 2</h2>
              <h3 className=" py-6 text-xl md:text-2xl">Prep your content</h3>
              <p className=" text-base  lg:text-lg">
                Outline your course, plan a coaching program, or design a
                digital product you’d like to upload and sell.
              </p>
            </div>
            <div className="" data-aos="flip-left">
              <h2 className=" border-b-2 border-black pb-2 text-3xl"> 3</h2>
              <h3 className=" py-6 text-xl md:text-2xl">Prep your content</h3>
              <p className=" text-base  lg:text-lg">
                Outline your course, plan a coaching program, or design a
                digital product you’d like to upload and sell.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center ">
            <button className=" bg-secondary-color text-white hover:bg-secondary-color/60 capitalize text-base   transition-colors duration-700   py-4 px-5 font-semibold  rounded-md">
              start for free
            </button>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 xl:py-28 bg-primary-color text-white px-6 lg:px-10">
        <div className="max-w-3xl lg:max-w-6xl mx-auto ">
          {/* Title */}
          <div className=" text-center space-y-6 max-w-3xl  mx-auto pb-10">
            <h3 className=" px-10  font-bold text-4xl lg:text-5xl">
              Unmatched features built to transform lives
            </h3>
            <p className=" text-lg  xl:text-xl ">
              We’ve spent years working with creators. The result? Features that
              help you scale and give you peace of mind.
            </p>
          </div>

          {/* Content */}
          <div className=" max-w-3xl xl:max-w-6xl mx-auto mt-10 space-y-10 ">
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-14 place-items-center  pb-16">
              <div className="max-w-xl mx-auto " data-aos="zoom-in">
                <img src={images.homeSec5img1} alt="" className=" " />
              </div>
              <div className=" space-y-8 " data-aos="fade-up">
                <div className="space-y-4">
                  <h2 className="font-semibold text-xl">
                    More than a payment gateway
                  </h2>
                  <p className=" text-base  lg:text-lg  ">
                    Teachable:pay is an automated way to get paid, manage
                    payouts, and sell more confidently. Get a simple, reliable
                    checkout system, fraud protection, tax-inclusive pricing,
                    global currency conversion, automatic payouts, and more.
                    Plus, enjoy zero transaction fees on Pro and Business plans.{" "}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-semibold text-xl">
                    Flexibility at your fingertips
                  </h2>
                  <p className="text-base  lg:text-lg  ">
                    Our effortless course builder and customizable templates
                    mean you can personalize your course to align with your
                    style and branding. Course creators also have the
                    flexibility to utilize various forms of multimedia,
                    including audio, video, images, and text to adapt to
                    different learning styles.
                  </p>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-14 place-items-center  pb-16">
              <div className="max-w-xl mx-auto" data-aos="zoom-in">
                <img src={images.homeSec5img2} alt="" className=" " />
              </div>
              <div className=" space-y-8 " data-aos="fade-up">
                <div className="space-y-4">
                  <h2 className="font-semibold text-xl">
                    More than a payment gateway
                  </h2>
                  <p className=" text-base  lg:text-lg  ">
                    Teachable:pay is an automated way to get paid, manage
                    payouts, and sell more confidently. Get a simple, reliable
                    checkout system, fraud protection, tax-inclusive pricing,
                    global currency conversion, automatic payouts, and more.
                    Plus, enjoy zero transaction fees on Pro and Business plans.{" "}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-semibold text-xl">
                    Flexibility at your fingertips
                  </h2>
                  <p className=" text-base  lg:text-lg  ">
                    Our effortless course builder and customizable templates
                    mean you can personalize your course to align with your
                    style and branding. Course creators also have the
                    flexibility to utilize various forms of multimedia,
                    including audio, video, images, and text to adapt to
                    different learning styles.
                  </p>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 xl:grid-cols-2 gap-14 place-items-center  pb-16">
              <div className="max-w-xl mx-auto " data-aos="zoom-in">
                <img src={images.homeSec5img3} alt="" className=" " />
              </div>
              <div className=" space-y-8 " data-aos="fade-up">
                <div className="space-y-4">
                  <h2 className="font-semibold text-xl">
                    More than a payment gateway
                  </h2>
                  <p className=" text-base lg:text-xl ">
                    Teachable:pay is an automated way to get paid, manage
                    payouts, and sell more confidently. Get a simple, reliable
                    checkout system, fraud protection, tax-inclusive pricing,
                    global currency conversion, automatic payouts, and more.
                    Plus, enjoy zero transaction fees on Pro and Business plans.{" "}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-semibold text-xl">
                    Flexibility at your fingertips
                  </h2>
                  <p className=" text-base lg:text-xl  ">
                    Our effortless course builder and customizable templates
                    mean you can personalize your course to align with your
                    style and branding. Course creators also have the
                    flexibility to utilize various forms of multimedia,
                    including audio, video, images, and text to adapt to
                    different learning styles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col justify-center items-center ">
            <button className=" bg-secondary-color text-white hover:bg-secondary-color/60 capitalize text-base   transition-colors duration-700   py-4 px-5 font-semibold  rounded-md">
              start for free
            </button>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 xl:py-28 bg-secondary-color/10  text-black px-6 lg:px-10">
        <div className="max-w-3xl lg:max-w-6xl mx-auto ">
          {/* Title */}

          <div className="py-3" data-aos="fade-in">
            <div className="space-y-6    pb-10">
              <h3 className="text-primary-color   font-bold text-4xl lg:text-5xl">
                Need help fast?
              </h3>
              <p className=" text-lg  xl:text-xl ">
                Every big creator had to start somewhere. Our support resources
                are the launch pad you need to succeed.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-10 ">
            <div className=" space-y-8  bg-white p-5 border-t-8 border-primary-color ">
              <div className="">
                <img src={images.homeSec6img1} alt="" className="  " />
              </div>
              <div className=" space-y-8 pb-10">
                <h3 className=" text-2xl font-semibold">ascent:kid</h3>
                <p className=" text-base lg:text-lg max-w-sm ">
                  Marketing, video, course-building best practices—get access to
                  our mini course library on those topics and more.
                </p>
              </div>
              <div className="  relative  mt-10 flex ">
                <Link
                  href="#"
                  className="text-base font-bold self-start border-b-[3px] border-b-primary-color  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className=" space-y-8  bg-white p-5 border-t-8 border-primary-color ">
              <div className="">
                <img src={images.homeSec6img2} alt="" className="  " />
              </div>
              <div className=" space-y-8 pb-10">
                <h3 className=" text-2xl font-semibold">ascent:blog</h3>
                <p className=" text-base lg:text-lg max-w-sm ">
                  Marketing, video, course-building best practices—get access to
                  our mini course library on those topics and more.
                </p>
              </div>
              <div className="  relative  mt-10  flex ">
                <Link
                  href="#/"
                  className="text-base font-bold self-start border-b-[3px] border-b-primary-color  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5"
                >
                  Learn more
                </Link>
              </div>
            </div>
            <div className=" space-y-8  bg-white p-5 border-t-8 border-primary-color ">
              <div className="">
                <img src={images.homeSec6img3} alt="" className="  " />
              </div>
              <div className=" space-y-8 pb-10">
                <h3 className=" text-2xl font-semibold">ascent:entr</h3>
                <p className=" text-base lg:text-lg max-w-sm ">
                  Marketing, video, course-building best practices—get access to
                  our mini course library on those topics and more.
                </p>
              </div>
              <div className="  relative  mt-10 flex  ">
                <Link
                  href="#/"
                  className="text-base font-bold self-start border-b-[3px] border-b-primary-color  block  relative after:content-[''] after:absolute after:-bottom-0.5 after:left-0  after:w-0 after:h-0 after:transition-all after:duration-700 after:bg-secondary-color hover:after:w-full hover:after:h-0.5"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-14 lg:py-20 bg-primary-color text-white px-6 lg:px-10"
        id="homeSec7"
      >
        <div className="max-w-3xl lg:max-w-6xl mx-auto " data-aos="fade-up">
          <div className="">
            <Swiper
              modules={[Pagination, Autoplay, EffectFade, Navigation, A11y]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={50}
              speed={1000}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                stopOnLastSlide: false,
                waitForTransition: true,
              }}
              slidesPerView={1}
              effect="crossfade"
              grabCursor={true}
              className=" "
            >
              <div>
                <SwiperSlide>
                  <Carousel
                    title={"Now for some buzz"}
                    description={
                      "I really love teachable:hq! teachable:hq is like having a mastermind group in your back pocket 24/7. The give and take format is a big win for me and my business."
                    }
                    image={images.homeSec7img4}
                    name={"Jen W., Digital Scraper"}
                  ></Carousel>
                </SwiperSlide>

                <SwiperSlide>
                  <Carousel
                    title={"Now for some buzz"}
                    description={
                      "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                    }
                    image={images.homeSec7img4}
                    name={"Edward Z., Excellence Above"}
                  ></Carousel>
                </SwiperSlide>

                <SwiperSlide>
                  <Carousel
                    title={"Now for some buzz"}
                    description={
                      "The Teachable HQ Community and more got me back on track and both people from Teachable and other Teachable creators gave me the support and help I needed with great ideas. Within a month, I was totally kicking butt on not only Teachable; but also my general influencer growth abilities."
                    }
                    image={images.homeSec7img4}
                    name={"Christine Roebuck of Live my Life Debt Free"}
                  ></Carousel>
                </SwiperSlide>
              </div>
            </Swiper>
            <div className="flex flex-col justify-center items-center w-full   py-3 mt-5">
              <div className="flex justify-center items-center gap-6 relative bottom-[-26px]">
                <div className="custom-pagination "></div>
              </div>

              <div className="flex justify-center gap-24 items-center">
                <button
                  className="text-4xl font-bold"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <AiOutlineLeft />
                </button>
                <button
                  className="text-4xl font-bold"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" ">
        <div>
          <img src={images.homeSec4img1} alt="" className=" w-full" />
        </div>
      </section>

      <section className="py-14 lg:py-20 xl:py-28  bg-secondary-color px-6 lg:px-10">
        <div className="max-w-3xl lg:max-w-6xl mx-auto ">
          <div className=" text-center space-y-2 " data-aos="fade-up">
            <h2 className="  font-bold text-3xl lg:text-5xl ">
              Change your future
            </h2>
            <h3 className=" text-2xl lg:text-5xl  font-normal">
              with one click.
            </h3>
            <p className=" text-lg font-medium ">
              Try our (actually free) free plan today.
            </p>
            <div className="mt-10 flex flex-col justify-center items-center ">
              <button className=" bg-primary-color text-white hover:bg-primary-color/60 capitalize text-base mt-10  transition-colors duration-700   py-4 px-5 font-semibold  rounded-md">
                start for free
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
