import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
const BannerSlider = ({ slide }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    let slides = [];
    if (slide) {
        slides = [...slide];
    }
    const handleBackClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        console.log(currentIndex);
    };
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        console.log(currentIndex);
    };
    return (_jsxs("div", { className: "w-full h-[356px] flex-col justify-center mx-auto  items-center gap-3 flex  mb-20", children: [_jsxs("div", { className: `h-[332px] w-full bg-[#ede8ff] rounded-xl  md:w-[44rem] lg:w-[80rem] justify-center items-start gap-[252px]  md:gap-[616px] lg:gap-[1190px] inline-flex mx-5 `, style: {
                    background: slides[currentIndex] && slides[currentIndex].image
                        ? `url(${slides[currentIndex].image}) center center/cover no-repeat  `
                        : "bg-[#ede8ff]",
                }, children: [_jsx("button", { className: ` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`, onClick: handleNextClick, children: _jsx("div", { className: "w-8 h-8 justify-center items-center flex text-2xl", children: _jsx(GoChevronLeft, {}) }) }), _jsx("button", { className: ` h-11 p-1.5 my-auto  bg-white  border border-stone-300 justify-start items-center  rounded-full mr-0 text-stone-300 hover:border-[#8E53FF] hover:text-[#8E53FF]`, onClick: handleBackClick, children: _jsx("div", { className: "w-8 h-8 justify-center items-center flex text-2xl ", children: _jsx(GoChevronRight, {}) }) })] }), _jsx("div", { className: " justify-start items-center gap-1 inline-flex", children: slides.map((slide) => {
                    return (_jsx("div", { className: `w-3 h-3 rounded-full  ${slide.id === currentIndex ? "bg-[#8e53ff]" : "bg-stone-200"}` }));
                }) })] }));
};
export default BannerSlider;
