import { useState } from "react";
import cover from "/assets/images/reading/coverStory.png";
import { GoChevronLeft, GoClock } from "react-icons/go";
import { TbMessages, TbEye, TbStar, TbLock, TbLockOpen } from "react-icons/tb";
import { GoCheck } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import { HiOutlineArrowUp } from "react-icons/hi2";
import CustomComment from "./customComment";
import { SideBarProps } from "../../types/readingPageTypes";


//it is left sidebar
const SideBar: React.FC<SideBarProps> = ({ setShowSideBar }) => {
  // this data and function use for tab sectin
  const tabs = [
    { id: 0, title: "Info" },
    { id: 1, title: "Chapters" },
    { id: 2, title: "Comments" },
  ];
  const [clickTab, setClickTab] = useState(0);
  const handleClickTabs = (id: number) => {
    setClickTab(id);
  };
  const renderTabs = () => {
    switch (clickTab) {
      case 0:
        return <InfoTab />;
      case 1:
        return <ChapterTab />;
      case 2:
        return <CommentsTab />;

      default:
        return <InfoTab />;
    }
  };

  return (
    <div className="w-[22.5rem] h-[40rem] md:w-[25.625rem] md:h-[58.75rem] relative bg-white dark:bg-stone-900 rounded-xl mt-[2.7rem] overflow-hidden hover:overflow-y-scroll ">
      <button
        onClick={() => setShowSideBar(false)}
        className="h-6 justify-start items-center gap-1 inline-flex lg:hidden text-stone-600 text-sm font-semibold font-QuicksandLight leading-[17.50px] mb-6"
      >
        <GoChevronLeft />
        <p>Back to story</p>
      </button>
      {/* tabs reading */}
      <div className="lg:w-[378px] p-1 left-[16px] lg:top-[16px] top-[30px] absolute bg-stone-100 dark:bg-stone-700 rounded-md justify-center items-center gap-6 inline-flex  ">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => handleClickTabs(tab.id)}
              className={`px-3 py-1.5  rounded justify-center items-center flex text-center text-sm font-semibold font-Quicksand leading-[17.50px] ${
                clickTab === tab.id
                  ? "bg-white dark:bg-stone-600 text-stone-800 dark:text-white shadow"
                  : "text-stone-400 dark:text-stone-500"
              }`}
            >
              <p>{tab.title}</p>
            </button>
          );
        })}
      </div>

      {renderTabs()}
    </div>
  );
};
export default SideBar;

//this component use when click on Info tab
const InfoTab = () => {
  //these data use for text box
  const informationBox = [
    { id: 0, title: "Writer", info: "Matt Caulfield" },
    { id: 1, title: "Chapter", info: 10 },
    { id: 2, title: "Paragraph", info: 1780 },
    { id: 3, title: "Words", info: 1780 },
    { id: 4, title: "TotalTime", info: "17h" },
  ];

  //   this data use for view box
  const viewBox = [
    { id: 0, icon: <TbStar />, number: "4.5/5" },
    { id: 1, icon: <TbEye />, number: 1700 },
    { id: 2, icon: <TbMessages />, number: 567 },
  ];
  const numberFormat = (num: number): string => {
    if (num < 1000000 && num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    }
    return num.toString();
  };
  return (
    <>
      <img
        className="w-[140px] h-[140px] left-[16px] top-[78px] absolute rounded-lg"
        src={cover}
      />
      {/* text box */}
      <div className=" w-[10.44rem] h-[10.5rem] left-[16px] top-[242px] absolute flex-col justify-center items-center gap-3 inline-flex ">
        {informationBox.map((item) => {
          return (
            <div
              className="w-full justify-between items-center inline-flex"
              key={item.id}
            >
              <div className="text-stone-800 dark:text-white text-base font-semibold font-Quicksand leading-normal">
                {item.title}
              </div>
              <div className="text-stone-800 dark:text-white text-sm font-semibold font-QuicksandLight leading-normal">
                {item.info}
              </div>
            </div>
          );
        })}
      </div>
      {/* title box */}
      <div className="left-[172px] top-[80px] absolute flex-col justify-start items-start gap-2 inline-flex ">
        <div className="justify-start items-center gap-1 inline-flex ">
          <div className="justify-start items-center gap-[14.22px] flex text-stone-400 dark:text-stone-600">
            <GoClock />
          </div>
          <p className="text-stone-600 text-base font-semibold font-QuicksandLight leading-normal">
            30min
          </p>
        </div>
        <div className="self-stretch h-[72px] flex-col justify-center items-start flex">
          <h4 className="text-stone-800 dark:text-white text-2xl font-semibold font-Quicksand leading-9">
            Chapter 1
          </h4>
          <h4 className="text-stone-800 dark:text-white text-2xl font-semibold font-Quicksand leading-9">
            The Beginning
          </h4>
        </div>
        {/* view box */}
        <div className="justify-start items-center gap-6 inline-flex">
          {viewBox.map((item) => {
            return (
              <div
                className="justify-start items-center gap-1 flex"
                key={item.id}
              >
                <div className="justify-start items-center gap-2 flex text-stone-400 dark:text-stone-600">
                  {item.icon}
                </div>
                <div className="text-stone-800 dark:text-white text-sm font-semibold font-QuicksandLight leading-[17.50px]">
                  {typeof item.number === "number"
                    ? numberFormat(item.number)
                    : item.number}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

//this component use when click on Chapter tab
const ChapterTab = () => {
  const chapterList = [
    { id: 0, title: "Beginng of Winter", isLocked: false, isClicked: false },
    {
      id: 1,
      title: "Beginng of Winter and Living in the world of",
      isLocked: true,
    },
    { id: 2, title: "Beginng of Winter", isLocked: true, isClicked: false },
    { id: 3, title: "Beginng of Winter", isLocked: false, isClicked: false },
    { id: 4, title: "Beginng of Winter", isLocked: false, isClicked: false },
    { id: 5, title: "Beginng of Winter", isLocked: true, isClicked: false },
    { id: 6, title: "Beginng of Winter", isLocked: true, isClicked: false },
    { id: 7, title: "Beginng of Winter", isLocked: true, isClicked: false },
    { id: 8, title: "Beginng of Winter", isLocked: true, isClicked: false },
  ];
  const [chapter, setChapter] = useState([...chapterList])
  const handleClick = (id:number)=>{
    setChapter(prevChapter=> prevChapter.map(chapter => chapter.id === id ? {...chapter, isClicked: !chapter.isClicked}: chapter))
  }
  return (
    <div className="w-[378px] h-[342px] flex-col justify-center items-center gap-3 flex mt-[5rem]   rounded-sm text-stone-800 mx-auto dark:text-white  ">
      {chapter.map((chapter) => {
        return (
          <>
            <div
              onClick={() =>handleClick(chapter.id)}
              className="self-stretch pl-8 pr-2 py-1.5  text-stone-800 dark:text-white rounded-md justify-between items-center flex  text-sm font-semibold font-QuicksandLight leading-[17.50px]  dark:hover:bg-stone-700 hover:bg-stone-200 "
            >
              <div
                className={`${
                   chapter.isClicked  ? "flex" : "hidden"
                } flex  relative -ml-5 mr-2`}
              >
                <GoCheck />
              </div>

              <div className="grow shrink basis-0 h-[18px] justify-between items-center gap-4 inline-flex ">
                <div className="grow shrink basis-0 h-[18px] justify-start items-center gap-4 flex">
                  <p>Chapter {chapter.id + 1}</p>
                  <div className="w-4 h-[0px]  -rotate-90 border border-stone-400"></div>
                  <p>Beginning of Winter</p>
                </div>
                <div className="justify-start items-center gap-2 flex text-base text-[#A985FF]">
                  {chapter.isLocked ? <TbLock /> : <TbLockOpen />}
                  <div
                    className={`text-sm font-semibold text-stone-800 dark:text-white font-QuicksandLight leading-[17.50px] ${
                      chapter.id === 0 ? "hidden" : ""
                    }`}
                  >
                    $5
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

//this component use when click on comments tab
const CommentsTab = () => {
  const [sendComment, setSendComment] = useState(false);
  return (
    <div className=" mt-8 p-4 pt-10 ">
      {/* input box */}
      <div onClick={()=>setSendComment(true)} className="w-full h-[119px] p-3 mt-6   rounded-[5px] border-2 border-stone-300  justify-start items-start gap-2.5 inline-flex mb-6">
        {sendComment ?<input className="w-full h-[100px] text-2xl outline-none bg-white dark:bg-stone-800 dark:text-white" type="text" />: (
          <p className="grow shrink basis-0 text-[#828282] text-sm font-semibold font-QuicksandLight leading-[17.50px]">
           Write your opinion
        </p>
        ) }
        
        
        <button
          onClick={() => setSendComment(true)}
          className="w-8 h-8 p-1 bg-[#ede8ff] text-[#4C1595] rounded-lg justify-center items-center flex hover:text-xl text-2xl "
        >
          <HiOutlineArrowUp />
        </button>
       
      </div>
      <div className="h-[17px] justify-center items-center inline-flex mb-2">
        <p className="text-stone-500 text-sm font-bold font-QuicksandLight leading-[17.50px]">
          View 256 comments
        </p>
      </div>
      <div className=" mb-4 ">
        <CustomComment />
        {/* reply card */}
        <div className="h-48 px-3.5 py-4  rounded-xl border border-stone-100  dark:border-stone-800 flex-col justify-start items-start gap-2 flex mt-4 ml-4 self-stretch">
          <div className="self-stretch justify-between items-center flex ">
            {/* name data pic */}
            <div className="justify-start items-center gap-4 flex ">
              <div className="w-12 flex-col justify-start items-start gap-[5.49px] inline-flex">
                <img
                  className="h-12 relative rounded-[82.29px]"
                  src="assets/images/exploreIcons/profile pic.png"
                />
              </div>
              <div className="flex-col justify-center items-start  flex text-stone-900 dark:text-white text-sm font-semibold font-Quicksand leading-[17.50px] gap-2">
                <div className="inline-flex gap-2">
                  <p>Matt Caulfield</p>
                  <div className="h-[22px] px-2 py-0.5 bg-[#ede8ff] rounded-[36px] shadow justify-center items-center gap-0.5 inline-flex">
                    <p className="text-[#4c1595] text-xs font-normal font-Quicksand leading-[15px]">
                      Writer
                    </p>
                  </div>
                </div>
                <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
                  20 August 2024
                </p>
              </div>
            </div>
            {/* icons box */}
            <div className="justify-start items-center gap-4 flex">
              <div className="justify-start items-center gap-1 flex text-stone-500 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
                <FiHeart />

                <p>0</p>

                <PiDotsThreeOutlineBold />
              </div>
            </div>
          </div>
          {/* text box */}
          <div className=" h-[77px]  flex-col justify-start items-end gap-2   text-stone-800 dark:text-white text-sm font-semibold font-QuicksandLight leading-[17.50px]  overflow-hidden text-ellipsis  line-clamp-3">
            <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
              @Sakshi Chawla
            </p>
            <p>
              What a gripping tale! The way the author built up the tension
              throughout the story kept me on the edge of my seat. The
              unexpected plot twist towards the end left me speechless and
              pondering over the characters' motives long after I finished
              reading.
            </p>
          </div>
          <div className="flex w-full  items-end justify-end">
            <p className="text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px]">
              Read more
            </p>
          </div>
          <div className="pt-px justify-start items-center gap-3 inline-flex">
            <div className="justify-center items-center flex">
              <div className="text-[#8e53ff] text-sm font-semibold font-Quicksand leading-[17.50px]">
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reply2 */}
      <div className="h-[13.2rem] px-3.5 py-4  rounded-xl border border-stone-100 dark:border-stone-800 flex-col justify-start items-start gap-2 flex ml-4 ">
        <div className="self-stretch justify-between items-center flex ">
          {/* name data pic */}
          <div className="justify-start items-center gap-4 flex ">
            <div className="w-12 flex-col justify-start items-start gap-[5.49px] inline-flex">
              <img
                className="h-12 relative rounded-[82.29px]"
                src="assets/images/writerProfile/frank.png"
              />
            </div>
            <div className="flex-col justify-center items-start  flex text-stone-900 dark:text-white text-sm font-semibold font-Quicksand leading-[17.50px] gap-2">
              <p>Frank Pinti</p>
              <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
                20 August 2024
              </p>
            </div>
          </div>
          {/* icons box */}
          <div className="justify-start items-center gap-4 flex">
            <div className="justify-start items-center gap-1 flex text-stone-500 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
              <FiHeart />

              <p>0</p>

              <PiDotsThreeOutlineBold />
            </div>
          </div>
        </div>
        {/* text box */}
        <div className=" h-auto  flex-col justify-start items-end gap-2   text-stone-800 dark:text-white text-sm font-semibold font-QuicksandLight leading-[17.50px]  overflow-hidden text-ellipsis  line-clamp-4">
          <p className="self-stretch text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
            @Sakshi Chawla
          </p>
          <p>
            I was completely drawn into the world created by this story. The
            vivid descriptions painted such a clear picture in my mind that I
            felt like I was right there alongside the protagonist, experiencing
            every emotion and challenge they faced. The themes of resilience and
            hope resonated with me deeply, making this narrative truly
            unforgettable.
          </p>
        </div>
        <div className="flex w-full  items-end justify-end">
          <p className="text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px]">
            Read more
          </p>
        </div>
        <div className="pt-px justify-start items-center gap-3 inline-flex">
          <div className="justify-center items-center flex">
            <div className="text-[#8e53ff] text-sm font-semibold font-Quicksand leading-[17.50px]">
              Reply
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
