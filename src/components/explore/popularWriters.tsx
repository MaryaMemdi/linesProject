import line from "../../../public/assets/images/exploreIcons/Line 2.svg";
import Chervon from "../../../public/assets/images/exploreIcons/chevron-right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import PopularWritersCard from "./popularWritersCard";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const PopularWriters = () => {
    //this data use just for make ui
  const userData = [
    {
      id: 0,
      userName: "Matt Caulfield",
      email: "@Matt__Caulfield",
      worksNumber: 17,
      readingNumber: 10,
      followersNumber: 1700,
    },
  ];
  // just for make ui
  const exampleArray = new Array(8).fill(<PopularWritersCard  {...userData[0]}/>);
  const sliderRef = useRef<Slider>(null);
  // it use for slider sitting
  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 2.7,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="  w-80 md:w-[44rem] lg:w-[80rem] h-[28.5rem]  mx-auto mb-14">
      {/* header part */}
      <div className="flex  justify-between items-start gap-4 md:mb-[5rem] lg:w-full lg:mb-8">
        <div className="flex flex-col  gap-4  w-full mx-auto justify-center">
          {/* Title */}
          <div className="flex gap-3 ">
            <h3 className="text-stone-800 text-2xl md:text-3xl font-Quicksand font-semibold leading-[37.5px]">
              Top Stories
            </h3>
            <img src={line} alt="" className="w-[120px]" />
          </div>
          {/* see more */}
          <div className="items-center gap-1 flex   justify-between">
            <a
              className="text-stone-600 text-sm font-semibold font-Quicksand leading-[20px] inline-flex"
              href="#"
            >
              
              See More
              <img src={Chervon} alt="" className="w-6 h-6 flex rotate-180 " />
            </a>

            {/* Arrow slider */}
            <div className=" flex gap-2 w-24 h-11 justify-between">
              {/* chercon left */}
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className={` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`}
              >
               <div className="w-8 h-8 justify-center items-center flex text-2xl ">
                  <GoChevronLeft />
                </div>
              </button>
              {/* chervon right */}
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className={` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`}
              >
                <div className="w-8 h-8 justify-center items-center flex text-2xl ">
                  <GoChevronRight />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* slider  */}
      <Slider
        {...settings}
        ref={sliderRef}
        className="flex  justify-center mx-auto items-center "
      >
        {exampleArray.map((item) => {
          return (
            <div className={`h-[396px]  pt-11 gap-8 px-3 md:px-0  flex  `}>
              {item}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default PopularWriters;
