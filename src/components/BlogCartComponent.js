import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import line from "../../public/assets/images/exploreIcons/Line 2.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BlogCartComponent = () => {
    const sliderRef = useRef(null);
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
                    slidesToShow: 1.7,
                    slidesToScroll: 1.3,
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
    const BlogCard = () => {
        return (_jsxs("div", { className: "h-[34.375rem] w-80 md:w-[25rem] flex-col justify-start items-start gap-4 md:gap-6 px-3 ", children: [_jsx("div", { className: " h-[11.25rem]  md:h-[18.75rem] bg-[#ede8ff] rounded-xl" }), _jsxs("div", { className: "h-[12.5rem] md:h-[13.7rem] flex-col justify-start items-start gap-4 md:gap-6 flex w-full", children: [_jsxs("div", { className: " h-[171px] flex-col justify-start items-start gap-4 flex w-full", children: [_jsxs("div", { className: " justify-between items-center inline-flex  w-full", children: [_jsxs("div", { className: "justify-between items-center gap-2 inline-flex text-stone-500 text-xs md:text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: [_jsx("p", { children: "Category" }), _jsx("p", { className: "text-stone-800 text-lg font-normal font-Quicksand leading-[17.5px]", children: "\u2022" }), _jsx("p", { className: "text-stone-800 text-xs md:text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: "5 min read" })] }), _jsx("p", { className: "text-stone-500 text-xs md:text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: "2024 Apr 4" })] }), _jsxs("div", { className: "self-stretch h-32 flex-col justify-start items-start gap-2 flex", children: [_jsx("h4", { className: "self-stretch text-stone-800 text-xl md:text-2xl font-bold font-Quicksand leading-9", children: "The Art of Crafting Multiple Endings" }), _jsx("p", { className: "self-stretch h-12 text-stone-800 text:sm md:text-base font-semibold font-QuicksandLight leading-normal text-ellipsis  line-clamp-2", children: "Discover how different endings can transform a story, offering readers new perspectives and deeper engagement." })] })] }), _jsxs("div", { className: "justify-start items-center gap-1 inline-flex text-[#a985ff] text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: [_jsx(Link, { to: "/login", children: "Back to login" }), _jsx(GoChevronRight, {})] })] })] }));
    };
    const blogCardArray = new Array(3).fill(_jsx(BlogCard, {}));
    return (_jsxs("div", { className: "  w-80 md:w-[44rem] lg:w-[80rem] h-auto  mx-auto mb-14 flex-col ", children: [_jsx("div", { className: "flex  justify-between items-start gap-4 md:mb-[5rem] lg:w-full lg:mb-8 ", children: _jsxs("div", { className: "flex flex-col  gap-4  w-full mx-auto justify-center ", children: [_jsxs("div", { className: "flex gap-3 ", children: [_jsx("h3", { className: "text-stone-800 text-2xl md:text-3xl font-Quicksand font-semibold leading-[37.5px]", children: "Blog" }), _jsx("img", { src: line, alt: "", className: "w-[120px]" })] }), _jsxs("div", { className: "items-center gap-1 flex   justify-between", children: [_jsxs("a", { className: "text-stone-600 text-sm font-semibold font-Quicksad leading-[17.5px] gap-1 flex", href: "#", children: [_jsx("span", { children: "See More" }), _jsx(GoChevronRight, {})] }), _jsxs("div", { className: " flex gap-2 w-24 h-11 justify-between", children: [_jsx("button", { onClick: () => sliderRef.current?.slickPrev(), className: ` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`, children: _jsx("div", { className: "w-8 h-8 justify-center items-center flex text-2xl ", children: _jsx(GoChevronLeft, {}) }) }), _jsx("button", { onClick: () => sliderRef.current?.slickNext(), className: ` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`, children: _jsx("div", { className: "w-8 h-8 justify-center items-center flex text-2xl ", children: _jsx(GoChevronRight, {}) }) })] })] })] }) }), _jsx("div", { className: " flex", children: _jsx(Slider, { ...settings, ref: sliderRef, className: " w-full justify-between items-center  flex gap-10 mx-auto", children: blogCardArray.map((item) => {
                        return _jsx("div", { children: item });
                    }) }) })] }));
};
export default BlogCartComponent;
