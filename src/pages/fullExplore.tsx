
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { TbBolt, TbFlame, TbAward, TbEye } from "react-icons/tb";
import Slider from "react-slick";
import StoryCard from "../components/explore/storyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const FullExplore = () => {
  //category Item
  const categories = [
    { id: 0, title: "All" },
    { id: 1, title: "Neuest", icons: <TbBolt /> },
    { id: 2, title: "Most Read", icons: <TbEye /> },
    { id: 3, title: "Hottest", icons: <TbFlame /> },
    { id: 4, title: "Highest Quality", icons: <TbAward /> },
  ];
  // example arraye to make ui
  const cards = Array(80).fill(<StoryCard />);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [clicked, setClicked] = useState(false);
  const [currentButton, setCurrentButton] = useState(1);
  const handleClick = (id: number) => {
    setClicked(!clicked);
    setCurrentButton(id);
  };

  //use for making pagination
  const totalSlide = Math.ceil(cards.length / 16);
  const pagination = [];
  for (let i = 1; i <= totalSlide; i++) {
    pagination.push(i);
  }

  // setting of slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 4,
    slidesPerRow: 4,
    
    afterChange: (current: number) => setCurrentSlide(current + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef<Slider>(null);

  return (
    <div className="lg:w-[1280px] md:w-[768px] w-[360px] justify-center mx-auto lg:pt-8  min-w-80 lg:mt-10">
      
      {/* breadcrumbs box */}
      <div className=" w-[15.875rem] gap-[10px] h-6 mt-12 md:mt-14 ml-5 md:ml-8 lg:ml-0 ">
        
        <Link to="/mainPage">
          <div className="inline-flex text-stone-400 text-sm font-normal font-QuicksandLight leading-[17.50px] gap-2.5">
            <p className="">Home</p>
            <div className="w-6 h-6  relative leading-[17.50px]">
              <GoChevronRight />
            </div>
          </div>
        </Link>
        <Link to="/explore">
          <div className="inline-flex text-stone-400 text-sm font-normal font-QuicksandLight leading-[17.50px] gap-2.5">
            <p className="">Explore</p>
            <div className="w-6 h-6  relative leading-[17.50px]">
              <GoChevronRight />
            </div>
          </div>
        </Link>
        <Link to="/fullExplore">
          <div className="inline-flex text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px] gap-2.5">
            <p className="">Top Stories</p>
          </div>
        </Link>
      </div>
     
      {/* title page */}
      <div className="h-[45px] justify-start items-center gap-3 flex  mt-[1.75rem] md:mt-6 md:mb-8 lg:mb-12 mb-6 ">
        <h2 className="text-stone-800 text-2xl md:text-3xl lg:text-4xl font-semibold font-Quicksand leading-[45px]  ml-5 md:ml-8 lg:ml-0">
          Top Stories
        </h2>
        <img
          src="assets/images/exploreIcons/Line 2.svg"
          style={{ width: "60px" }}
        />
      </div>
      <div className="lg:inline-flex justify-between md:justify-center md:items-center md:mx-auto md:flex-row ">
        {/* categories box */}
        <div className=" w-80 md:w-[40.125rem] lg:w-[715px] h-10 justify-start items-start gap-2 flex ml-5 md:ml-8 lg:ml-0 overflow-x-scroll md:overflow-x-hidden ">
          {categories.map((item) => {
            return (
              <button
                onClick={() => handleClick(item.id)}
                className={` px-4 py-2 rounded-lg justify-center items-center gap-1 flex ${
                  currentButton === item.id
                    ? "bg-[#4c1595] text-white"
                    : "text-[#4c1595] bg-white"
                } text-base font-bold font-Quicksand leading-normal whitespace-nowrap mx-2 md:mx-0`}
                key={item.id}
              >
                <div>{item.icons}</div>
                <h4>{item.title}</h4>
              </button>
            );
          })}
        </div>
        {/* searchbar */}
        <div className=" w-[18.5rem] md:w-[31.82rem] lg:w-[517px] h-10 px-3 py-2 bg-[#f5f2ff] rounded-[5px] justify-start md:justify-center md:items-center gap-2.5  hover:border-[#4C1595] hover:border-2 md:mx-auto  flex ml-5  lg:ml-0 mt-3 ">
          <div className="w-6 h-6 relative">
            <img src="assets/images/search.png" />
          </div>
          <input
            className="grow shrink basis-0 text-stone-400 bg-[#f5f2ff] text-sm font-normal font-Quicksand leading-[17.50px] focus:outline-none"
            type="text"
            placeholder="enter genre, author, ... "
          />
        </div>
      </div>
      {/* card box */}

      <Slider
        ref={sliderRef}
        {...settings}
       
      >
        {cards.map((item,index) => {
          return <div className="  flex p-3 mt-[50px]" key={index}>{item}</div>;
        })}
      </Slider>
      {/* pagination */}
      <div className="h-10 justify-center items-center flex mx-auto mb-20 gap-1">
        <button
          className=" pr-2.5 py-2.5 rounded-md justify-center items-center gap-1 inline-flex  text-[#08080a] text-sm font-normal font-Quicksand leading-[17.50px] "
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <GoChevronLeft />
          <span>Previous</span>
        </button>
        <div className=" inline-flex justify-start ">
          {pagination
            .slice(currentSlide - 1, currentSlide + 2)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={`w-10 pl-[15.58px] pr-[15.59px] py-2.5  rounded-md  ${
                    currentSlide - 1 === item - 1
                      ? "border-zinc-200 bg-white border"
                      : ""
                  } justify-center items-center inline-flex`}
                >
                  <a
                    href={`#${item}`}
                    onClick={() => sliderRef.current?.slickGoTo(item - 1)}
                    className="text-[#08080a] text-sm font-medium font-Inter leading-tight"
                  >
                    {item}
                  </a>
                </div>
              );
            })}
          {currentSlide >= 1 && (
            <div className="w-10 pl-[15.58px] pr-[15.59px] py-2.5  rounded-md justify-center items-center inline-flex">
              <span className="text-[#08080a] text-sm font-medium  leading-tight">
                ...
              </span>
            </div>
          )}
        </div>
        <button
          className=" pr-2.5 py-2.5 rounded-md justify-center items-center gap-1 inline-flex text-[#08080a] text-sm font-normal font-Quicksand leading-[17.50px] "
          onClick={() => sliderRef.current?.slickNext()}
        >
          <span>Next</span>
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
};
export default FullExplore;
