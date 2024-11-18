import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BannerSlider from "../components/explore/bannerSlider";
import PopularStories from "../components/explore/popularStories";
import PopularWriters from "../components/explore/popularWriters";
import TopStories from "../components/explore/topStories";
const Explore = () => {
    return (_jsxs("div", { className: "lg:w-[1280px] md:w-[768px] w-[360px] justify-center mx-auto  min-w-80 mt-12 md:14 lg:mt-[200px]  ", children: [_jsxs("div", { className: "h-[45px] justify-start items-center gap-3 inline-flex  mb-12", children: [_jsx("h2", { className: "text-stone-800 text-2xl md:text-3xl lg:text-4xl font-semibold font-Quicksand leading-[45px]  ml-[10px] md:ml-8 lg:ml-0", children: "Explorer" }), _jsx("img", { src: "assets/images/exploreIcons/Line 2.svg" })] }), _jsx(BannerSlider, {}), _jsxs("div", { className: "flex flex-col  gap-14", children: [_jsx(TopStories, {}), _jsx(PopularStories, {}), _jsx(PopularWriters, {})] })] }));
};
export default Explore;
