import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import pic from "../../../public/assets/images/writerProfile/Sakshi.png";
import pic1 from "../../../public/assets/images/writerProfile/pic1.png";
import pic2 from "../../../public/assets/images/writerProfile/pic2.png";
import RightClickModal from "./rightClickModal";
import { RxCross2 } from "react-icons/rx";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { TbEye, TbMessageCircle, TbStar, TbPencilPlus } from "react-icons/tb";
//this component use for show text part of reding page
const StoryBox = () => {
    const [showLines, setShowLines] = useState(false);
    const [showLinesModal, setShowLinesModal] = useState(false);
    const [pencilClicked, setPencilClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState(null);
    //it use for show rightClick Items
    const handleContextMenu = (event) => {
        event.preventDefault();
        setIsVisible(true);
        setPosition({ top: event.clientY, left: event.clientX });
        console.log(position?.top);
    };
    const closeContextMenu = () => {
        setTimeout(() => {
            setIsVisible(false);
        }, 2000);
    };
    //this codes use for highlight text
    const textRef = useRef(null);
    const highlightText = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0)
            return;
        const range = selection.getRangeAt(0);
        const span = document.createElement('span');
        span.style.backgroundColor = '#ede8ff';
        range.surroundContents(span);
        selection.removeAllRanges();
    };
    return (_jsxs("div", { className: "w-[22.5rem] md:w-[48rem] lg:w-[80rem]", children: [isVisible && position && (_jsx("div", { className: ` justify-center  absolute `, style: { top: `${position?.top}px`, left: `${position.left}px`
                }, onMouseLeave: closeContextMenu, children: _jsx(RightClickModal, { setShowLines: setShowLines, highlightText: highlightText }) })), showLinesModal && _jsx(LinesModal, { setShowLinesModal: setShowLinesModal }), _jsxs("div", { onContextMenu: handleContextMenu, ref: textRef, className: "h-auto w-[22.5rem] md:w-full lg:w-[50.8rem]  flex-col justify-center items-center gap-6 inline-flex  self-stretch text-stone-800 text-base font-semibold font-QuicksandLight leading-normal  dark:text-white mb-6 ", children: [_jsx("p", { children: "I push through the terrain as fast as my paws will carry me. Leaves and bushes shake as I whiz past their stationary form. Critters cower in fear as I run faster, moving like a ddsd" }), _jsx("p", { children: "I push through the terrain as fast as my paws will carry me. Leaves and bushes shake as I whiz past their stationary form. Critters cower in fear as I run faster, moving like a" }), _jsx("p", { children: "Stooping low, I trailed a crimson red fingertip across the smooth contours of his chiseled jaw. His chestnut hair hung over his still damp forehead. Only moments before, perspiration had beaded profusely on his skin as he clutched the cherry oak tabletop. Right before his fingers clawed wildly at his throat in an attempt to allow airflow into his burning lungs." }), _jsx("p", { children: "With a thud, Noah had hit the gleaming wood, white foam trickling from his blue lips. I exhaled again at the mess he had left me to clean up. Red wine slowly seeped across the freshly polished floor; shards of glass sprinkled throughout. With a thud, Noah had hit the gleaming wood, white foam trickling from his blue lips. I exhaled again at the mess he had left me to clean up. Red wine slowly seeped across the freshly polished floor; shards of glass sprinkled throughout." }), _jsxs("button", { onClick: () => setShowLinesModal(true), className: `w-[220px] h-10 px-4 py-2 bg-[#4c1595] rounded-lg justify-center items-center gap-2 inline-flex ${showLines ? "block" : "hidden"}`, children: [_jsx("div", { className: "text-[#f9f9f9] text-base font-semibold font-QuicksandLight leading-normal", children: "Lines" }), _jsxs("div", { className: "justify-start items-center flex", children: [_jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-[#4c1595]", src: pic }), _jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-[#4c1595] -mx-4", src: pic1 }), _jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-[#4c1595]", src: pic2 })] })] }), _jsx("p", { children: "With a thud, Noah had hit the gleaming wood, white foam trickling from his blue lips. I exhaled again at the mess he had left me to clean up. Red wine slowly seeped across the freshly polished floor; shards of glass sprinkled throughout." }), _jsx("p", { children: "I push through the terrain as fast as my paws will carry me. Leaves and bushes shake as I whiz past their stationary form. Critters cower in fear as I run faster, moving like a ddsd" }), _jsx("p", { children: "Stooping low, I trailed a crimson red fingertip across the smooth contours of his chiseled jaw. His chestnut hair hung over his still damp forehead. Only moments before, perspiration had beaded profusely on his skin as he clutched the cherry oak tabletop. Right before his fingers clawed wildly at his throat in an attempt to allow airflow into his burning lungs." }), _jsx("p", { children: "With a thud, Noah had hit the gleaming wood, white foam trickling from his blue lips. I exhaled again at the mess he had left me to clean up. Red wine slowly seeped across the freshly polished floor; shards of glass sprinkled throughout." }), _jsx("p", { children: "I push through the terrain as fast as my paws will carry me. Leaves and bushes shake as I whiz past their stationary form. Critters cower in fear as I run faster, moving like a ddsd" }), _jsx("p", { children: "With a thud, Noah had hit the gleaming wood, white foam trickling from his blue lips. I exhaled again at the mess he had left me to clean up. Red wine slowly seeped across the freshly polished floor; shards of glass sprinkled throughout." }), _jsx("p", { children: "I push through the terrain as fast as my paws will carry me. Leaves and bushes shake as I whiz past their stationary form. Critters cower in fear as I run faster, moving like a ddsd" }), _jsx("p", { children: "Stooping low, I trailed a crimson red fingertip across the smooth contours of his chiseled jaw. His chestnut hair hung over his still damp forehead. Only moments before, perspiration had beaded profusely on his skin as he clutched the cherry oak tabletop. Right before his fingers clawed wildly at his throat in an attempt to allow airflow into his burning lungs." }), _jsx("p", { children: "With a thud, Noah had hit the gleaming wood, white foam trickling from his blue lips. I exhaled again at the mess he had left me to clean up. Red wine slowly seeped across the freshly polished floor; shards of glass sprinkled throughout." }), _jsxs("button", { onClick: () => setPencilClicked(true), className: `w-[220px] h-10 px-4 py-2 bg-[#4c1595] rounded-lg justify-center items-center gap-2 inline-flex hover:bg-[#9747FF] ${showLines ? "block" : "hidden"} `, children: [_jsxs("div", { className: "text-[#f9f9f9] text-xl font-semibold font-QuicksandLight leading-[20px] inline-flex gap-4", children: [_jsx(TbPencilPlus, { className: "text-2xl" }), "Lines"] }), _jsxs("div", { className: `${pencilClicked ? "hidden" : "flex"} justify-start items-center flex `, children: [_jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-[#4c1595]", src: pic }), _jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-[#4c1595] -mx-4", src: pic1 }), _jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-[#4c1595]", src: pic2 })] })] }), _jsx("p", { children: "I push through the terrain as fast as my paws will carry me. Leaves and bushes shake as I whiz past their stationary form. Critters cower in fear as I run faster, moving like a ddsd" })] })] }));
};
export default StoryBox;
const LinesModal = ({ setShowLinesModal }) => {
    const linesTitels = [
        { id: 0, title: "Alex went to point A instead of B?", isClicked: false },
        { id: 1, title: "Alex went to point B first?", isClicked: false },
        { id: 2, title: "Alex went to point A first?", isClicked: false },
    ];
    const [openItems, setOpenItems] = useState([...linesTitels]);
    const handleSubMenuOpen = (id) => {
        setOpenItems((prevItems) => prevItems.map((item) => item.id === id ? { ...item, isClicked: !item.isClicked } : item));
    };
    return (_jsx("div", { className: " bg-opacity-70 inset-0 justify-center m-auto placeholder: bg-slate-700 fixed items-center flex ", children: _jsxs("div", { className: "w-[17rem]  lg:w-[39rem] h-auto  bg-white rounded-xl p-4 z-30", children: [_jsxs("div", { className: "h-16 w-full flex-col justify-start items-start gap-1 inline-flex mb-6 z-50", children: [_jsx("button", { onClick: () => setShowLinesModal(false), className: "h-6 w-full  justify-end items-end inline-flex ", children: _jsx(RxCross2, {}) }), _jsx("p", { className: "self-stretch text-stone-800 text-2xl font-semibold font-Quicksand leading-9", children: "Do you want to read a different story?" }), _jsx("p", { className: "self-stretch text-stone-800 text-base font-normal font-Quicksand leading-normal", children: "Choose one of below choices and enjoy your reading!" })] }), _jsx("div", { className: " flex-col w-full self-stretch justify-start items-start gap-2 inline-flex mt-10 lg:mt-6  overflow-hidden overflow-y-scroll mb-4", children: _jsx("div", { className: "self-stretch h-[195px] flex-col justify-start items-start gap-[21px] flex", children: _jsxs("div", { className: "self-stretch h-[127px] flex-col justify-start items-start gap-3 flex", children: [_jsx("p", { className: "text-stone-800 text-lg font-semibold font-Quicksand leading-[27px]", children: "What if ..." }), _jsx("div", { className: "self-stretch h-[88px] flex-col justify-start items-start gap-2 flex", children: openItems.map((item) => {
                                        return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "self-stretch justify-between items-center inline-flex ", children: [_jsx("p", { className: " text-stone-800 text-sm font-normal font-Quicksand leading-[17.50px] ", children: item.title }), _jsx("div", { className: "justify-start items-center gap-4 flex ", children: _jsxs("div", { className: "justify-start items-center gap-4 flex", children: [_jsxs("div", { className: "justify-start items-center lg:flex  hidden  ", children: [_jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-white", src: pic }), _jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-white -mx-4", src: pic1 }), _jsx("img", { className: "w-6 h-6 relative rounded-[61.71px] border border-white", src: pic2 })] }), _jsx("button", { onClick: () => handleSubMenuOpen(item.id), className: `w-6 h-6   `, children: item.isClicked ? (_jsx(GoChevronUp, {})) : (_jsx(GoChevronDown, {})) })] }) })] }, item.id), item.isClicked && _jsx(SubMenuLinesModal, {})] }));
                                    }) })] }) }) }), _jsx("div", { className: "w-full  justify-end items-end flex ", children: _jsx("div", { className: "px-4 py-1.5  rounded-lg border border-[#4c1595] justify-center items-center gap-1 inline-flex", children: _jsx("button", { className: "text-[#4c1595] text-base font-semibold font-Quicksand leading-normal", children: "Craft your world (10 Rp)" }) }) })] }) }));
};
const SubMenuLinesModal = () => {
    const submenuData = [
        {
            id: 0,
            image: pic,
            name: "Jain Mans",
            star: "4.5/5",
            watch: "1.7k",
            comments: "567",
        },
        {
            id: 1,
            image: pic1,
            name: "Jain Mans",
            star: "4.5/5",
            watch: "1.7k",
            comments: "567",
        },
        {
            id: 2,
            image: pic2,
            name: "Jain Mans",
            star: "4.5/5",
            watch: "1.7k",
            comments: "567",
        },
    ];
    return (_jsx("div", { className: "", children: submenuData.map((item) => {
            return (_jsxs("div", { className: "w-full  lg:inline-flex justify-between lg:gap-4 p-1 gap-2  ", children: [_jsxs("div", { className: "inline-flex lg:gap-4 gap-2 text-sm font-Quicksand font-normal", children: [_jsx("img", { src: item.image, className: "w-6" }), _jsx("p", { className: "whitespace-nowrap", children: item.name }), _jsxs("div", { className: "justify-start items-center  gap-2 lg:gap-6 inline-flex", children: [_jsxs("div", { className: "justify-start items-center gap-1 flex", children: [_jsx("div", { className: "justify-start items-center gap-2 flex text-stone-400 dark:text-stone-600", children: _jsx(TbStar, {}) }), _jsx("div", { className: "text-stone-600 dark:text-white text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: item.star })] }), _jsxs("div", { className: "justify-start items-center gap-1 flex", children: [_jsx("div", { className: "justify-start items-center gap-2 flex text-stone-400 dark:text-stone-600", children: _jsx(TbEye, {}) }), _jsx("div", { className: "text-stone-600 dark:text-white text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: item.watch })] }), _jsxs("div", { className: "justify-start items-center gap-1 flex", children: [_jsx("div", { className: "justify-start items-center gap-2 flex text-stone-400 dark:text-stone-600", children: _jsx(TbMessageCircle, {}) }), _jsx("div", { className: "text-stone-600 dark:text-white text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: item.comments })] })] })] }, item.id), _jsx("button", { className: "bg-[#4c1595] text-white rounded-lg px-2 hover:bg-[#721ee3] w-full lg:w-[7rem]", children: "Open portal" })] }));
        }) }));
};
