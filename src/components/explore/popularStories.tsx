import line from "../../../public/assets/images/exploreIcons/Line 2.svg";
import Chervon from "../../../public/assets/images/exploreIcons/chevron-right.svg";
import StoryCard from "./storyCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const PopularStories = () => {
  // just for make ui
  const exampleArray = new Array(8).fill(<StoryCard />);
  const sliderRef = useRef<Slider>(null);

  const [subTitle, setSubTitle] = useState("");
  useEffect(() => {
    const updateSubTitle = () => {
      if (window.innerWidth <= 1024) {
        setSubTitle("See More");
      } else {
        setSubTitle("See All");
      }
    };
    updateSubTitle();
    window.addEventListener("resize", updateSubTitle);
  }, []);
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
    <div className="  w-80 md:w-[44rem] lg:w-[80rem] h-[28.5rem]  mx-auto mb-[3.5rem]">
      {/* header part */}
      <div className="flex  justify-between items-start gap-4 md:mb-[5rem] lg:w-full lg:mb-8">
        <div className="flex flex-col  gap-4  w-full mx-auto justify-center">
          {/* Title */}
          <div className="flex gap-3 ">
            <h3 className="text-stone-800 text-2xl md:text-3xl font-Quicksand font-semibold leading-[37.5px]">
              Popular Stories
            </h3>
            <img src={line} alt="" className="w-[120px]" />
          </div>
          {/* see more */}
          <div className="items-center gap-1 flex   justify-between">
            <a
              className="text-stone-600 text-sm font-semibold font-Quicksand leading-[20px] inline-flex"
              href="#"
            >
              {subTitle}
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
        className="flex  justify-center mx-auto items-center gap-8 "
      >
        {exampleArray.map((item) => {
          return (
            <div className={`h-[396px]  pt-11  px-3   flex  `}>{item}</div>
          );
        })}
      </Slider>
    </div>
  );
};
export default PopularStories;
