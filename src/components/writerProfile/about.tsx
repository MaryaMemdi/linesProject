import TitleParts from "./titleParts";
import { TbBrandTelegram,TbBrandInstagram,TbBrandX,TbBrandGmail  } from "react-icons/tb";
import Slider from "react-slick";
import { useRef } from "react";
import StoryCard from "../explore/storyCard";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const About = () => {
  const exampleArray = new Array(8).fill(<StoryCard />);
  const sliderRef = useRef<Slider>(null);
  const icons = [
    { id: 3, src:<TbBrandX/> },
    { id: 2, src:<TbBrandInstagram/>},
    { id: 1, src: <TbBrandTelegram/>},
    { id: 4, src:<TbBrandGmail/> },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="lg:w-[60rem] w-[21.25rem] md:w-[44rem] px-4 pt-4 lg:pb-[200px] bg-white rounded-xl flex-col justify-start items-start lg:gap-11 md:gap-10 lg:inline-flex flex h-auto gap-8">
      <div className="self-stretch  flex-col justify-start items-start gap-4 lg:inline-flex flex">
        <TitleParts title="About" />
        <div className="self-stretch lg:h-32 flex-col justify-start items-start gap-2 flex  text-stone-800 md:text-base font-semibold font-QuicksandLight leading-normal text-sm">
          <p>
            Matt Caulfield is a passionate storyteller with a love for fantasy
            and science fiction. With a background in literature and creative
            writing, Emily enjoys crafting intricate worlds and characters that
            captivate and inspire. When she 's not writing, you can find her
            exploring nature, reading epic novels, or daydreaming about her next
            big story.
          </p>
          <p>
            Matt enjoys crafting intricate worlds and characters that captivate
            and inspire. When she's not writing, you can find her exploring
            nature, reading epic novels, or daydreaming about her next big
            story.
          </p>
        </div>
      </div>
      {/* contact info */}
      <div className=" w-full flex-col justify-start items-start gap-4   inline-flex  lg:hidden">
        <TitleParts title="Contact Info" />
        <div className="justify-start items-center gap-4 inline-flex">
          {icons.map((icon) => {
            return (
              <div
              className="h-10 p-2 rounded-[50px] border border-stone-200 hover:border-[#4c1595] justify-start items-center flex hover:text-[#4c1595]"
              key={icon.id}
            >
              <button className="w-6 h-6 relative  text-2xl m-auto justify-center items-center">
                {icon.src}
              </button>
            </div>
            );
          })}
        </div>
      </div>
      {/* slider */}
      <div className="self-stretch h-[440px] flex-col justify-start items-center gap-8  ">
        <div className="self-stretch justify-between items-end inline-flex w-full">
          <TitleParts title="Suggestions" />
          <div className=" flex gap-2 w-24 h-11  justify-between ">
            {/* chercon left */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className={`h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 hover:border-[#4c1595] hover:text-[#4c1595] text-3xl text-stone-400`}
            >
              
              <GoChevronLeft/>
            </button>
            {/* chervon right */}
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className={` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 hover:border-[#4c1595] hover:text-[#4c1595] text-3xl text-stone-400`}
            >
              <GoChevronRight/>
            </button>
          </div>
        </div>
        <div className="w-full">
          <Slider
            {...settings}
            ref={sliderRef}
            className="flex  justify-center  items-center "
          >
            {exampleArray.map((item) => {
              return (
                <div className={`h-[396px]  pt-11 px-3 flex  `}>{item}</div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default About;
