import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { GoArrowLeft, GoArrowRight, GoChevronRight } from "react-icons/go";
import SideBar from "../components/reading/sideBar";
import { TbClockPause, TbEyeglass2, TbSunHigh, TbClockPlay, TbBrandDatabricks, } from "react-icons/tb";
import { useEffect, useState } from "react";
import StoryBox from "../components/reading/storyBox";
import ReadingMode from "../components/reading/readingMode";
import Survay from "../components/reading/survay";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Reading = () => {
    const [readingMode, setReadingMode] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    //it use for show sideBar in tablet and mobile
    const [showSideBar, setShowSideBar] = useState(false);
    //this codes use for progressLine
    const [hightDiv, setHightDiv] = useState(0);
    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setHightDiv(Math.floor(scrollPercentage));
    };
    const getWidth = (hightDiv) => {
        if (hightDiv < 10)
            return 'w-0';
        if (hightDiv < 30 && hightDiv >= 10)
            return 'w-1/3';
        if (hightDiv < 50 && hightDiv >= 30)
            return 'w-1/3';
        if (hightDiv >= 50 && hightDiv < 75)
            return 'w-1/2';
        if (hightDiv < 100 && hightDiv >= 75)
            return 'w-ful';
    };
    //it use to show 'startTimer' only once
    const [firstClick, setFirstClick] = useState(false);
    //this variable use for timer
    const [timerSatrt, setTimerStart] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    useEffect(() => {
        let interval;
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
        return () => clearInterval(interval);
    }, [timerSatrt]);
    const toggleTimer = () => {
        setTimerStart(prevState => !prevState);
    };
    //it use for next Chapter button
    const [nextChapterClicked, setNextChapterClicked] = useState(false);
    const handleDarkMode = () => {
        setDarkMode((prevDarkMode) => {
            const newDarkMode = !prevDarkMode;
            document.body.classList.toggle("dark", newDarkMode);
            return newDarkMode;
        });
    };
    return (_jsx(_Fragment, { children: showSideBar ? (_jsx(motion.div, { initial: { opacity: 0, x: 0 }, animate: { opacity: 1, x: 10 }, transition: { type: "spring", damping: 10, stiffness: 100 }, children: _jsx(SideBar, { setShowSideBar: setShowSideBar }) })) : (_jsx("div", { className: `${darkMode ? "dark" : ""} w-[22.5rem] md:w-[48rem] lg:w-[80rem] flex justify-center mx-auto md:px-8 lg:mx-auto lg:px-0 `, children: readingMode ? (_jsx(ReadingMode, { setReadingMode: setReadingMode, handleDarkMode: handleDarkMode })) : (_jsxs("div", { className: `w-full justify-center  mx-5  md:mx-8 `, children: [_jsxs("div", { className: "flex mx-auto  mt-[12.5rem] gap-2.5 leading-[20px] font-semibold font-QuicksandLight", children: [_jsx(Link, { to: '/mainPage', className: "text-stone-400", children: "Home" }), _jsx(GoChevronRight, { className: "text-stone-400 inline-flex leading-[20px] text-2xl" }), _jsx("p", { className: "text-stone-800 dark:text-stone-400 ", children: "Story Title" })] }), _jsxs("div", { className: "flex justify-between ", children: [_jsx("div", { className: "hidden lg:block mr-5", children: _jsx(SideBar, { setShowSideBar: setShowSideBar }) }), _jsxs("div", { className: " h-auto mt-[2.7rem] w-[22.5rem] md:w-full lg:w-[50.8rem]   ", children: [_jsxs("div", { className: "flex justify-between  mb-3  w-[22.5rem] md:w-full lg:w-[50.8rem]  ", children: [_jsxs("div", { className: " h-auto justify-start items-center gap-6 md:inline-flex  ", children: [_jsx("div", { className: "text-stone-800 dark:text-white text-xl md:text-2xl font-semibold font-Quicksand leading-9  whitespace-nowrap", children: "Chapter 1" }), _jsx("div", { className: "w-6 h-0  rotate-90 border border-stone-300 leading-9 hidden md:block " }), _jsx("div", { className: "text-stone-800 dark:text-white  text-xl md:text-2xl font-semibold font-Quicksand leading-9 whitespace-nowrap ", children: "The Beginning" })] }), _jsxs("div", { className: "h-auto justify-center items-center  gap-4 flex my-auto text-2xl dark:text-stone-50  flex-col md:flex-row", children: [_jsxs("div", { className: "gap-4 justify-between inline-flex order-2 md:order-1", children: [_jsx(Link, { to: '/readingMode', className: "hover:text-slate-400  ", onClick: () => setReadingMode(true), children: _jsx(TbEyeglass2, {}) }), _jsx("button", { onClick: handleDarkMode, className: `hover:text-stone-400 ${darkMode ? 'text-stone-400' : 'text-stone-800'} `, children: _jsx(TbSunHigh, {}) })] }), _jsxs("div", { className: "justify-start items-center gap-2.5 flex order-1 md:order-2", children: [_jsx("button", { onClick: toggleTimer, className: "justify-start items-center flex hover:text-stone-400", children: timerSatrt ? _jsx(TbClockPause, { className: `${timerSatrt ? 'text-stone-400' : ''}` }) : _jsx(TbClockPlay, { className: "", onClick: () => setFirstClick(true) }) }), _jsxs("div", { className: "text-stone-800 dark:text-stone-50 text-base font-semibold font-QuicksandLight leading-normal", children: [timerSatrt && firstClick
                                                                        && (_jsxs("h1", { children: [minutes < 10 ? `0${minutes}` : minutes, " : ", seconds < 10 ? `0${seconds}` : seconds] })), !timerSatrt && firstClick && (_jsxs("h1", { children: [minutes < 10 ? `0${minutes}` : minutes, " : ", seconds < 10 ? `0${seconds}` : seconds] })), !firstClick && 'startTimer'] })] })] })] }), _jsx("div", { className: `h-[0px] border-4 border-[#8e53ff] ${getWidth(hightDiv)}` }), _jsxs("div", { onScroll: handleScroll, className: " w-[22.5rem] md:w-[44rem] lg:w-[50.8rem] h-[904px] hover:overflow-y-scroll  overflow-hidden", children: [_jsx(StoryBox, {}), _jsx("div", { className: "w-full justify-end items-end flex px-4", children: _jsx("button", { onClick: () => setShowSideBar(true), className: "w-10 h-10 p-2 lg:hidden bg-[#c5b1ff] rounded-[60px] justify-center items-center inline-flex text-4xl text-[#4C1595] hover:text-[#c5b1ff] hover:bg-[#4C1595]", children: _jsx(TbBrandDatabricks, {}) }) }), _jsx(Survay, {})] }), _jsxs("div", { className: "md:flex-row justify-between mx-auto  flex w-full flex-col mt-12 mb-20 gap-3", children: [_jsxs("button", { onClick: () => setNextChapterClicked(true), className: "w-80 md:w-[15rem]  h-10 px-4 py-2 bg-[#4c1595] rounded-lg justify-center items-center gap-2 flex mx-auto order-2 ", children: [_jsx("a", { href: "#", className: "text-[#f9f9f9] text-base font-semibold font-QuicksandLight leading-normal", children: "Next Chapter" }), _jsx("div", { className: "w-6 h-6 relative text-[#A985FF] text-2xl", children: _jsx(GoArrowRight, {}) })] }), _jsxs("button", { className: `w-80 md:w-[15rem] h-10 px-4 py-2 border border-[#4c1595] rounded-lg justify-center items-center gap-2 flex mx-auto  order-1 ${nextChapterClicked ? "flex" : "hidden"} `, children: [_jsx(GoArrowLeft, {}), _jsx("a", { href: "#", className: " text-base font-semibold font-QuicksandLight leading-normal", children: "Prevous Chapter" })] })] })] })] })] })) })) }));
};
export default Reading;
