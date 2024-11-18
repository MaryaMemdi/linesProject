import { GoChevronRight } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import About from "../components/writerProfile/about";
import TitleParts from "../components/writerProfile/titleParts";
import Works from "../components/writerProfile/works";
import {
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandX,
  TbBrandGmail,
} from "react-icons/tb";
import Readings from "../components/writerProfile/readings";
import Comments from "../components/writerProfile/comments";
import Achievement from "../components/writerProfile/Achievement";
import { Link } from "react-router-dom";
import FollowersModal from "../components/writerProfile/followersmodal";

const WriterProfile = () => {
  const [activeTab, setAktiveTab] = useState(0);
  const [clicked, setClicked] = useState(false);
  const[showToolip,setShowTollip] = useState<Number | boolean>(false);
 
  
  const renderTabs = () => {
    switch (activeTab) {
      case 0:
        return <About />;

      case 1:
        return <Works />;

      case 2:
        return <Readings />;

      case 3:
        return <Comments />;
      case 4:
        return <Achievement />;

      default:
        return <About />;
    }
  };
  // use for showing flower box
  const [showFollowers, setShowFollowers] = useState(false);
  //use when click on follow button
  const [clickedFollow, setClickedFollow] = useState(false);
  const cardInformation = [
    { id: 0, title: "Readings", number: 10 },
    { id: 1, title: "Following", number: 124 },
    { id: 2, title: "Followers", number: 1787 },
  ];
  const numberFormat = (num: number): string => {
    if (num < 1000000 && num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    }
    return num.toString();
  };
  //   data for icons part in contact info
  const icons = [
    { id: 3, src: <TbBrandX /> },
    { id: 2, src: <TbBrandInstagram /> },
    { id: 1, src: <TbBrandTelegram /> },
    { id: 4, src: <TbBrandGmail /> },
  ];

  //   data for tabs box
  const tabs = [
    { id: 0, title: "About", link: "/about" },
    { id: 1, title: "Works", link: "/works" },
    { id: 2, title: "Readings", link: "/Readings" },
    { id: 3, title: "Comments", link: "/comments" },
    { id: 4, title: "Achievement", link: "/achievement" },
  ];
  return (
    <div className="min-w-80 w-[22.5rem] md:w-[48rem] lg:w-[90rem] mx-auto ">
      {/* header */}
      {showFollowers && (
        <div className="flex justify-center mx-auto">
          <div className="absolute z-50 top-[350px]  mx-auto justify-center items-center ">
            <FollowersModal setShowFollowers={setShowFollowers} />
          </div>
        </div>
      )}
      <div className="min-w-80 w-[22.5rem] md:w-[48rem] lg:w-[90rem] h-[11.25rem] md:h-[16.25rem] lg:h-[23.88rem] md:pl-20 lg:pr-[1180px] md:pr-[616px]  lg:pt-[92px] bg-[#a985ff] justify-center items-center inline-flex flex-col grow-0 ">
        {/*breadcrumb  */}
        <div className="lg:flex absolute  top-[10.6rem] hidden gap-2.5 leading-[20px] font-QuicksandLight">
          <Link to="/" className="text-stone-300">
            Home
          </Link>
          <GoChevronRight className="text-stone-300 inline-flex leading-[20px] text-2xl" />
          <Link to="/writerProfile" className="text-white ">
            Writer Profile
          </Link>
        </div>
        {/* image */}
        <div className="w-[7.5rem] h-[7.5rem] lg:w-[11.25rem] lg:h-[11.25rem]   rounded-full border-4 border-[#f9f9f9] flex  justify-center mx-auto mt-[150px] md:mx-0 md:ml-0 md:mt-60   gap-0 ">
          <img
            src="assets/images/exploreIcons/profile pic.png"
            className="lg:w-[11.25rem] lg:h-[11.25rem] "
          />
        </div>
      </div>

      <div className="flex justify-between w-full flex-col lg:flex-row -mt-10">
        <div className=" w-full lg:w-1/4 md:flex-row lg:flex-col flex-col  mx-auto flex ">
          {/* name and email */}
          <div className="w-[135px] h-[52px] flex-col justify-start mt-10 items-center gap-1 inline-flex whitespace-nowrap lg:ml-[6.4rem] md:ml-10 mx-auto md:mx-0  ">
            <h4 className="self-stretch text-stone-800 text-xl font-semibold font-Quicksand leading-[30px] ">
              Matt Caulfield
            </h4>
            <p className="text-stone-800 text-sm font-bold font-QuicksandLight leading-[17.50px]">
              @Matt__Caulfield
            </p>
          </div>
          {/* info box */}
          <div className="h-24 w-[15.87rem] flex-col justify-center items-center gap-4 lg:flex lg:mt-8 lg:ml-20 md:ml-[5.6rem] mt-6  inline-flex mx-auto md:mt-0  ">
            <div className="justify-start items-center gap-8 inline-flex ">
              {cardInformation.map((card) => {
                return (
                  <div
                  onMouseEnter={()=>{if (card.title === "Followers"){setShowTollip(2)} else if(card.title === "Following"){setShowTollip(1)}else{setShowTollip(false)}}} 
                  onMouseLeave={()=>setShowTollip(false)}
                    onClick={() => {
                       (card.title === "Followers" && 
                        setShowFollowers(true));
                      
                    }}
                    className="flex-col justify-start items-center gap-1 flex "
                    key={card.id}
                  >
                    <div className={` h-8 px-[10px] py-[7px] bg-white rounded-md shadow border border-zinc-200 flex-col  inline-flexself-stretch  justify-start items-start flex ${showToolip === card.id ? 'block':'hidden'}  `}>
                      <p className="text-[#08080a] text-sm font-normal font-Quicksand leading-[17.50px] whitespace-nowrap">
                      {card.number} {card.title}
                      </p>
                    </div>
                    <button className="text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]">
                      {card.title}
                    </button>
                    <div className="text-center text-stone-800 text-sm font-normal font-Quicksand leading-[17.50px]">
                      {numberFormat(card.number)}
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => setClickedFollow(true)}
              className={`grow self-stretch px-4 py-2 bg-[#4c1595] rounded-lg justify-center items-center gap-2 inline-flex text-[#f9f9f9] text-base font-semibold font-QuicksandLight leading-normal hover:bg-[#721EE3] hover:text-lg ${
                clickedFollow ? "bg-[#721EE3]" : "bg-[#4c1595]"
              }`}
            >
              <FiPlus
                className={`text-xl ${clickedFollow ? "hidden" : "block"}`}
              />
              <p>Follow</p>
            </button>
          </div>
          {/* contact box */}
          <div className="h-[5.75rem] w-[13.375rem] flex-col justify-start items-start gap-4 lg:inline-flex mt-[3.5rem] ml-20 hidden ">
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
        </div>

        {/* tabs box */}

        <div className="lg:w-full lg:ml-[4.2rem] lg:flex-col flex-row mt-8 md:mt-14 lg:mt-6  md:overflow-hidden  md:mx-8 ">
          <div className=" w-full lg:w-[60rem] h-[38px] justify-start items-center lg:gap-8 lg:flex  lg:mr-20   overflow-x-scroll md:overflow-hidden ">
            <div
              className=" p-1 bg-zinc-100 rounded-md justify-center items-center inline-flex 
              "
            >
              {tabs.map((tab) => {
                return (
                  <button
                    onClick={() => {
                      setClicked(!clicked);
                      setAktiveTab(tab.id);
                    }}
                    className={`px-3 py-1.5 $ rounded ${
                      activeTab === tab.id ? "bg-white font-bold shadow" : ""
                    } justify-center items-center flex text-center text-[#08080a] text-sm font-semibold font-QuicksandLight leading-[17.50px]"`}
                    key={tab.id}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
            <div className="grow shrink basis-0 h-[0px] border border-stone-200  flex  "></div>
          </div>
          {/* box to render tags inclouds */}
          <div
            className="mt-6 mb-28 bg-white rounded-md lg:w-[60rem] w-[21.25rem] md:w-[44rem] mx-auto md:mx-0 "
            id="components"
          >
            {renderTabs()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WriterProfile;
