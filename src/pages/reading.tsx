
import { GoArrowLeft, GoArrowRight, GoChevronRight } from "react-icons/go";
import SideBar from "../components/reading/sideBar";
import {
  TbClockPause,
  TbEyeglass2,
  TbSunHigh,
  TbClockPlay,
  TbBrandDatabricks,
} from "react-icons/tb";
import { useEffect, useState } from "react";
import StoryBox from "../components/reading/storyBox";
import ReadingMode from "../components/reading/readingMode";
import Survay from "../components/reading/survay";

import { motion} from "framer-motion";
import { Link } from "react-router-dom";


const Reading = () => {
  const [readingMode, setReadingMode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  //it use for show sideBar in tablet and mobile
  const [showSideBar, setShowSideBar] = useState(false);

  //this codes use for progressLine
  const [hightDiv, setHightDiv] = useState(0);
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setHightDiv(Math.floor(scrollPercentage));
    
   
  };
  const getWidth = (hightDiv:number)=>{
    if(hightDiv <10) return 'w-0';
    if(hightDiv <30 && hightDiv >=10) return 'w-1/3';
    if(hightDiv <50 && hightDiv >= 30) return 'w-1/3';
    if(hightDiv >= 50 && hightDiv <75 ) return 'w-1/2';
    if(hightDiv <100 && hightDiv>=75) return 'w-ful';   
  }


  //it use to show 'startTimer' only once
  const [firstClick, setFirstClick] = useState(false)

  //this variable use for timer
  const [timerSatrt, setTimerStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerSatrt) {
      interval = setInterval(() => {
        setSeconds((preveSecond) => {
          if (preveSecond === 60) {
            setMinutes((preveMinute) => preveMinute + 1);
            return 0;
          }
          return preveSecond + 1;
        });
      }, 1000);
    }
    return ()=> clearInterval(interval);
  },[timerSatrt]);

  const toggleTimer = ()=>{
    setTimerStart(prevState => !prevState)
  }
  
  //it use for next Chapter button
  const [nextChapterClicked, setNextChapterClicked] = useState(false);
  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      document.body.classList.toggle("dark", newDarkMode);
      return newDarkMode;
    });
  };
  
  return (
    <>
      {showSideBar ? (
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 10 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
        >
          <SideBar setShowSideBar={setShowSideBar} />
        </motion.div>
      ) : (
        <div
          className={`${
            darkMode ? "dark" : ""
          } w-[22.5rem] md:w-[48rem] lg:w-[80rem] flex justify-center mx-auto md:px-8 lg:mx-auto lg:px-0 `}
        >
          {readingMode ? (
            <ReadingMode
              setReadingMode={setReadingMode}
              handleDarkMode={handleDarkMode}
            />
          ) : (
            <div
              className={`w-full justify-center  mx-5  md:mx-8 `}
            >
              {/*breadcrumb  */}
              <div className="flex mx-auto  mt-[12.5rem] gap-2.5 leading-[20px] font-semibold font-QuicksandLight">
                <Link to='/mainPage' className="text-stone-400">Home</Link>
                <GoChevronRight className="text-stone-400 inline-flex leading-[20px] text-2xl" />
                <p className="text-stone-800 dark:text-stone-400 ">Story Title</p>
              </div>
              <div className="flex justify-between ">
                <div className="hidden lg:block mr-5">
                  <SideBar setShowSideBar={setShowSideBar} />
                </div>
                <div className=" h-auto mt-[2.7rem] w-[22.5rem] md:w-full lg:w-[50.8rem]   ">
                  <div className="flex justify-between  mb-3  w-[22.5rem] md:w-full lg:w-[50.8rem]  ">
                    {/* title box */}

                    <div className=" h-auto justify-start items-center gap-6 md:inline-flex  ">
                      <div className="text-stone-800 dark:text-white text-xl md:text-2xl font-semibold font-Quicksand leading-9  whitespace-nowrap">
                        Chapter 1
                      </div>
                      <div className="w-6 h-0  rotate-90 border border-stone-300 leading-9 hidden md:block "></div>
                      <div className="text-stone-800 dark:text-white  text-xl md:text-2xl font-semibold font-Quicksand leading-9 whitespace-nowrap ">
                        The Beginning
                      </div>
                    </div>
                    {/* tools box */}
                    <div className="h-auto justify-center items-center  gap-4 flex my-auto text-2xl dark:text-stone-50  flex-col md:flex-row">
                      <div className="gap-4 justify-between inline-flex order-2 md:order-1">
                        <Link to='/readingMode'
                          className="hover:text-slate-400  "
                          onClick={() => setReadingMode(true)}
                        >
                          <TbEyeglass2 />
                        </Link>
                        <button
                          onClick={handleDarkMode}
                          className={`hover:text-stone-400 ${darkMode? 'text-stone-400': 'text-stone-800'} `}
                        >
                          <TbSunHigh />
                        </button>
                      </div>
                      <div className="justify-start items-center gap-2.5 flex order-1 md:order-2">
                        <button
                          onClick={toggleTimer}
                          className="justify-start items-center flex hover:text-stone-400"
                        >
                          {timerSatrt ? <TbClockPause className={`${timerSatrt ? 'text-stone-400':''}`} /> : <TbClockPlay className="" onClick={()=>setFirstClick(true)} />}
                        </button>
                        <div className="text-stone-800 dark:text-stone-50 text-base font-semibold font-QuicksandLight leading-normal">
                          {timerSatrt && firstClick 
                            && (<h1>
                              {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                            </h1>)}
                            {!timerSatrt && firstClick && (<h1>
                              {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                            </h1>)} 
                            {!firstClick  && 'startTimer'}  
                                
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* progressBar */}
                  <div className={`h-[0px] border-4 border-[#8e53ff] ${getWidth(hightDiv)}` }></div>
                
                  <div  onScroll={handleScroll } className=" w-[22.5rem] md:w-[44rem] lg:w-[50.8rem] h-[904px] hover:overflow-y-scroll  overflow-hidden">
                    <StoryBox />
                    <div className="w-full justify-end items-end flex px-4">
                      <button
                        onClick={() => setShowSideBar(true)}
                        className="w-10 h-10 p-2 lg:hidden bg-[#c5b1ff] rounded-[60px] justify-center items-center inline-flex text-4xl text-[#4C1595] hover:text-[#c5b1ff] hover:bg-[#4C1595]"
                      >
                        <TbBrandDatabricks />
                      </button>
                    </div>
                    <Survay />
                  </div>
                  <div className="md:flex-row justify-between mx-auto  flex w-full flex-col mt-12 mb-20 gap-3">
                    <button
                      onClick={() => setNextChapterClicked(true)}
                      className="w-80 md:w-[15rem]  h-10 px-4 py-2 bg-[#4c1595] rounded-lg justify-center items-center gap-2 flex mx-auto order-2 "
                    >
                      <a
                        href="#"
                        className="text-[#f9f9f9] text-base font-semibold font-QuicksandLight leading-normal"
                      >
                        Next Chapter
                      </a>
                      <div className="w-6 h-6 relative text-[#A985FF] text-2xl">
                        <GoArrowRight />
                      </div>
                    </button>
                    <button
                      className={`w-80 md:w-[15rem] h-10 px-4 py-2 border border-[#4c1595] rounded-lg justify-center items-center gap-2 flex mx-auto  order-1 ${
                        nextChapterClicked ? "flex" : "hidden"
                      } `}
                    >
                      <GoArrowLeft />
                      <a
                        href="#"
                        className=" text-base font-semibold font-QuicksandLight leading-normal"
                      >
                        Prevous Chapter
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Reading;
