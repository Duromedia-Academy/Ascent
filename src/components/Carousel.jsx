const Carousel = ({ title, description, image, name }) => {
  return (
  

        <div className="">
          <div className=" flex flex-col lg:flex-row lg:flex-row-reverse  text-white ">
            <div className="lg:flex-[75%] text-left px-3 md:px-0">
              <p className=" text-xl lg:text-2xl leading-8 font-medium py-8 ">
                <svg
                  className="quote-mark mb-8 text-3xl "
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.6 13.06L10.59 0.369998L12.66 1.81L6.81 13.06H11.04V23.59H0.6V13.06ZM14.1 13.06L24.09 0.369998L26.16 1.81L20.31 13.06H24.54V23.59H14.1V13.06Z"
                    fill="#fff"
                  ></path>
                </svg>
                {description}
              </p>

              <div className=" flex items-center gap-4  ">
                <img src={image} alt="" className="lg:hidden w-[100px]" />
                <div className="space-y-1  lg:block ">
                  <p className="text-base font-semibold lg:text-lg ">{name}</p>
                  <p className="text-base ">{title} </p>
                </div>
              </div>
            </div>

            <div className=" flex items-center lg:flex-[25%]  gap-4">
              <img
                src={image}
                alt=""
                className="hidden lg:block w-[150px] xl:w-[200px]"
              />

              <div className="space-y-1 hidden lg:hidden ">
                <p className="text-base font-semibold lg:text-lg ">{name}</p>
                <p className="text-base ">{title} </p>
              </div>
            </div>
          </div>
        </div>
 

  );
};

export default Carousel;
