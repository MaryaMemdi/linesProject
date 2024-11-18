import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    const exampleArray = new Array(8).fill(_jsx(StoryCard, {}));
    const sliderRef = useRef(null);
    const [subTitle, setSubTitle] = useState("");
    useEffect(() => {
        const updateSubTitle = () => {
            if (window.innerWidth <= 1024) {
                setSubTitle("See More");
            }
            else {
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
    return (_jsxs("div", { className: "  w-80 md:w-[44rem] lg:w-[80rem] h-[28.5rem]  mx-auto mb-[3.5rem]", children: [_jsx("div", { className: "flex  justify-between items-start gap-4 md:mb-[5rem] lg:w-full lg:mb-8", children: _jsxs("div", { className: "flex flex-col  gap-4  w-full mx-auto justify-center", children: [_jsxs("div", { className: "flex gap-3 ", children: [_jsx("h3", { className: "text-stone-800 text-2xl md:text-3xl font-Quicksand font-semibold leading-[37.5px]", children: "Popular Stories" }), _jsx("img", { src: line, alt: "", className: "w-[120px]" })] }), _jsxs("div", { className: "items-center gap-1 flex   justify-between", children: [_jsxs("a", { className: "text-stone-600 text-sm font-semibold font-Quicksand leading-[20px] inline-flex", href: "#", children: [subTitle, _jsx("img", { src: Chervon, alt: "", className: "w-6 h-6 flex rotate-180 " })] }), _jsxs("div", { className: " flex gap-2 w-24 h-11 justify-between", children: [_jsx("button", { onClick: () => sliderRef.current?.slickPrev(), className: ` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`, children: _jsx("div", { className: "w-8 h-8 justify-center items-center flex text-2xl ", children: _jsx(GoChevronLeft, {}) }) }), _jsx("button", { onClick: () => sliderRef.current?.slickNext(), className: ` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`, children: _jsx("div", { className: "w-8 h-8 justify-center items-center flex text-2xl ", children: _jsx(GoChevronRight, {}) }) })] })] })] }) }), _jsx(Slider, { ...settings, ref: sliderRef, className: "flex  justify-center mx-auto items-center gap-8 ", children: exampleArray.map((item) => {
                    return (_jsx("div", { className: `h-[396px]  pt-11  px-3   flex  `, children: item }));
                }) })] }));
};
export default PopularStories;
