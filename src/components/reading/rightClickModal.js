import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//this component use when on the text box rightClicked
import { TbBaselineDensitySmall, TbShare, TbQuote, TbBookmark, TbLink, TbBrandTelegram, TbBrandInstagram, TbBrandX, } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";
import { motion } from 'framer-motion';
const RightClickModal = ({ setShowLines, highlightText }) => {
    const [showShare, setShowShare] = useState(false);
    return (_jsxs("div", { className: "w-56 h-[168px] p-1 bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start flex text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]", children: [_jsxs("button", { onClick: () => setShowLines(true), className: "self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg", children: [_jsx("div", { className: " flex-col justify-start items-start inline-flex text-stone-400 hover:text-[#4c1595]", children: _jsx(TbBaselineDensitySmall, {}) }), _jsx("p", { children: "Show Lines" })] }), _jsxs("button", { onClick: () => setShowShare(true), className: "self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg", children: [_jsx("div", { className: "justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595]", children: _jsx(TbShare, {}) }), _jsx("p", { children: "Share" }), _jsx("div", { className: " absolute left-20 top-10", children: showShare && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, className: " space-y-2 ", children: _jsx(SubDropDown, {}) })) })] }), _jsxs("button", { onClick: highlightText, className: "self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg", children: [_jsx("div", { className: "justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595]", children: _jsx(TbQuote, {}) }), _jsx("p", { children: "Highlight" })] }), _jsxs("button", { className: "self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg", children: [_jsx("div", { className: "justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595]", children: _jsx(TbBookmark, {}) }), _jsx("p", { children: "Save" })] })] }));
};
export default RightClickModal;
//this component use on the share click
const SubDropDown = () => {
    const subDropDownData = [
        { id: 0, icon: _jsx(CiLinkedin, {}), title: "LinkedIn" },
        { id: 1, icon: _jsx(TbBrandX, {}), title: "X" },
        { id: 2, icon: _jsx(TbBrandInstagram, {}), title: "Instagram" },
        { id: 3, icon: _jsx(TbBrandTelegram, {}), title: "Telegram" },
    ];
    return (_jsxs("div", { className: "w-56 h-[217px] p-1 bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start gap-1 inline-flex", children: [_jsxs("div", { className: "self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex", children: [_jsx("div", { className: "justify-start items-center gap-2 flex", children: _jsx(TbLink, {}) }), _jsx("div", { className: "text-stone-800 text-sm font-semibold font-['Quicksand'] leading-[17.50px]", children: "Copy Link" })] }), _jsx("div", { className: "w-[222px] h-px bg-zinc-200" }), _jsx("div", { className: "self-stretch h-40 flex-col justify-start items-start flex", children: subDropDownData.map((item) => {
                    return (_jsxs("div", { className: "self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex", children: [_jsx("div", { className: "justify-start items-center gap-2 flex text-stone-400", children: item.icon }), _jsx("div", { className: "text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: item.title })] }, item.id));
                }) })] }));
};
