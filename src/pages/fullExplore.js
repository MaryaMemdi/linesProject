import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
        { id: 1, title: "Neuest", icons: _jsx(TbBolt, {}) },
        { id: 2, title: "Most Read", icons: _jsx(TbEye, {}) },
        { id: 3, title: "Hottest", icons: _jsx(TbFlame, {}) },
        { id: 4, title: "Highest Quality", icons: _jsx(TbAward, {}) },
    ];
    // example arraye to make ui
    const cards = Array(80).fill(_jsx(StoryCard, {}));
    const [currentSlide, setCurrentSlide] = useState(1);
    const [clicked, setClicked] = useState(false);
    const [currentButton, setCurrentButton] = useState(1);
    const handleClick = (id) => {
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
        afterChange: (current) => setCurrentSlide(current + 1),
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
    const sliderRef = useRef(null);
    return (_jsxs("div", { className: "lg:w-[1280px] md:w-[768px] w-[360px] justify-center mx-auto lg:pt-8  min-w-80 lg:mt-10", children: [_jsxs("div", { className: " w-[15.875rem] gap-[10px] h-6 mt-12 md:mt-14 ml-5 md:ml-8 lg:ml-0 ", children: [_jsx(Link, { to: "/mainPage", children: _jsxs("div", { className: "inline-flex text-stone-400 text-sm font-normal font-QuicksandLight leading-[17.50px] gap-2.5", children: [_jsx("p", { className: "", children: "Home" }), _jsx("div", { className: "w-6 h-6  relative leading-[17.50px]", children: _jsx(GoChevronRight, {}) })] }) }), _jsx(Link, { to: "/explore", children: _jsxs("div", { className: "inline-flex text-stone-400 text-sm font-normal font-QuicksandLight leading-[17.50px] gap-2.5", children: [_jsx("p", { className: "", children: "Explore" }), _jsx("div", { className: "w-6 h-6  relative leading-[17.50px]", children: _jsx(GoChevronRight, {}) })] }) }), _jsx(Link, { to: "/fullExplore", children: _jsx("div", { className: "inline-flex text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px] gap-2.5", children: _jsx("p", { className: "", children: "Top Stories" }) }) })] }), _jsxs("div", { className: "h-[45px] justify-start items-center gap-3 flex  mt-[1.75rem] md:mt-6 md:mb-8 lg:mb-12 mb-6 ", children: [_jsx("h2", { className: "text-stone-800 text-2xl md:text-3xl lg:text-4xl font-semibold font-Quicksand leading-[45px]  ml-5 md:ml-8 lg:ml-0", children: "Top Stories" }), _jsx("img", { src: "assets/images/exploreIcons/Line 2.svg", style: { width: "60px" } })] }), _jsxs("div", { className: "lg:inline-flex justify-between md:justify-center md:items-center md:mx-auto md:flex-row ", children: [_jsx("div", { className: " w-80 md:w-[40.125rem] lg:w-[715px] h-10 justify-start items-start gap-2 flex ml-5 md:ml-8 lg:ml-0 overflow-x-scroll md:overflow-x-hidden ", children: categories.map((item) => {
                            return (_jsxs("button", { onClick: () => handleClick(item.id), className: ` px-4 py-2 rounded-lg justify-center items-center gap-1 flex ${currentButton === item.id
                                    ? "bg-[#4c1595] text-white"
                                    : "text-[#4c1595] bg-white"} text-base font-bold font-Quicksand leading-normal whitespace-nowrap mx-2 md:mx-0`, children: [_jsx("div", { children: item.icons }), _jsx("h4", { children: item.title })] }, item.id));
                        }) }), _jsxs("div", { className: " w-[18.5rem] md:w-[31.82rem] lg:w-[517px] h-10 px-3 py-2 bg-[#f5f2ff] rounded-[5px] justify-start md:justify-center md:items-center gap-2.5  hover:border-[#4C1595] hover:border-2 md:mx-auto  flex ml-5  lg:ml-0 mt-3 ", children: [_jsx("div", { className: "w-6 h-6 relative", children: _jsx("img", { src: "assets/images/search.png" }) }), _jsx("input", { className: "grow shrink basis-0 text-stone-400 bg-[#f5f2ff] text-sm font-normal font-Quicksand leading-[17.50px] focus:outline-none", type: "text", placeholder: "enter genre, author, ... " })] })] }), _jsx(Slider, { ref: sliderRef, ...settings, children: cards.map((item, index) => {
                    return _jsx("div", { className: "  flex p-3 mt-[50px]", children: item }, index);
                }) }), _jsxs("div", { className: "h-10 justify-center items-center flex mx-auto mb-20 gap-1", children: [_jsxs("button", { className: " pr-2.5 py-2.5 rounded-md justify-center items-center gap-1 inline-flex  text-[#08080a] text-sm font-normal font-Quicksand leading-[17.50px] ", onClick: () => sliderRef.current?.slickPrev(), children: [_jsx(GoChevronLeft, {}), _jsx("span", { children: "Previous" })] }), _jsxs("div", { className: " inline-flex justify-start ", children: [pagination
                                .slice(currentSlide - 1, currentSlide + 2)
                                .map((item, index) => {
                                return (_jsx("div", { className: `w-10 pl-[15.58px] pr-[15.59px] py-2.5  rounded-md  ${currentSlide - 1 === item - 1
                                        ? "border-zinc-200 bg-white border"
                                        : ""} justify-center items-center inline-flex`, children: _jsx("a", { href: `#${item}`, onClick: () => sliderRef.current?.slickGoTo(item - 1), className: "text-[#08080a] text-sm font-medium font-Inter leading-tight", children: item }) }, index));
                            }), currentSlide >= 1 && (_jsx("div", { className: "w-10 pl-[15.58px] pr-[15.59px] py-2.5  rounded-md justify-center items-center inline-flex", children: _jsx("span", { className: "text-[#08080a] text-sm font-medium  leading-tight", children: "..." }) }))] }), _jsxs("button", { className: " pr-2.5 py-2.5 rounded-md justify-center items-center gap-1 inline-flex text-[#08080a] text-sm font-normal font-Quicksand leading-[17.50px] ", onClick: () => sliderRef.current?.slickNext(), children: [_jsx("span", { children: "Next" }), _jsx(GoChevronRight, {})] })] })] }));
};
export default FullExplore;
