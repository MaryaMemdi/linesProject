import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GoChevronDown } from "react-icons/go";
import TitleParts from "./titleParts";
import WriterStoryCard from "./writerStoryCard";
const Works = () => {
    //just for make ui
    const data = Array(17).fill(_jsx(WriterStoryCard, {}));
    return (_jsxs("div", { className: "w-[21.25rem] md:w-[44rem] lg:w-[58rem] h-[880px] relative bg-white rounded-xl p-4", children: [_jsxs("div", { className: "w-[205px] h-[58px] flex-col justify-start items-start gap-1 inline-flex", children: [_jsx(TitleParts, { title: "Works" }), _jsx("p", { className: "self-stretch text-stone-500 text-sm font-normal font-Quicksand leading-[17.50px]", children: "17 Published Stories" })] }), _jsx("div", { className: "w-[21.25rem] md:w-[44rem] lg:w-[58rem] h-[41.37rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-y-6 mt-6 lg:gap-x-4 overflow-y-scroll lg:overflow-hidden justify-center", children: data.map((item) => {
                    return _jsx("div", { className: "", children: item });
                }) }), _jsxs("a", { href: "#", className: "w-[618px] h-10 px-4 py-2 rounded-lg border border-stone-400 justify-center items-center gap-1 lg:flex mx-auto mt-8 text-stone-400 text-base font-semibold font-QuicksandLight leading-normal hidden", children: [_jsx("p", { children: "Show more" }), _jsx(GoChevronDown, {})] })] }));
};
export default Works;
