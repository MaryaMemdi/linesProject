import { useState } from "react";
import { BannerSliderProps, Slide } from "../../types/explorePageTypes";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const BannerSlider: React.FC<BannerSliderProps> = ({ slide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  let slides: Slide[] = [];
  if (slide) {
    slides = [...slide];
  }
  const handleBackClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    console.log(currentIndex);
  };
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    console.log(currentIndex);
  };

  return (
    <div className="w-full h-[356px] flex-col justify-center mx-auto  items-center gap-3 flex  mb-20">
      <div
        className={`h-[332px] w-full bg-[#ede8ff] rounded-xl  md:w-[44rem] lg:w-[80rem] justify-center items-start gap-[252px]  md:gap-[616px] lg:gap-[1190px] inline-flex mx-5 `}
        style={{
          background:
            slides[currentIndex] && slides[currentIndex].image
              ? `url(${slides[currentIndex].image}) center center/cover no-repeat  `
              : "bg-[#ede8ff]",
        }}
      >
        {/* right chervon */}
        <button
          className={` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`}
          onClick={handleNextClick}
        >
          <div className="w-8 h-8 justify-center items-center flex text-2xl">
            <GoChevronLeft />
          </div>
        </button>

        {/* left chervon */}
        <button
          className={` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`}
          onClick={handleBackClick}
        >
          <div className="w-8 h-8 justify-center items-center flex text-2xl ">
            <GoChevronRight />
          </div>
        </button>
      </div>
      {/* circle part in buttom  */}
      <div className=" justify-start items-center gap-1 inline-flex">
        {slides.map((slide) => {
          return (
            <div
              className={`w-3 h-3 rounded-full  ${
                slide.id === currentIndex ? "bg-[#8e53ff]" : "bg-stone-200"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
export default BannerSlider;
