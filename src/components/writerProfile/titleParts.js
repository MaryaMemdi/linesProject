import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import line from '/assets/images/exploreIcons/Line 2.svg';
const TitleParts = ({ title }) => {
    return (_jsx("div", { className: "self-stretch justify-start items-center gap-3 inline-flex", children: _jsxs("div", { className: "text-stone-800 text-2xl font-semibold font-['Quicksand'] leading-9 inline-flex gap-3 whitespace-nowrap", children: [_jsx("h3", { children: title }), _jsx("img", { src: line, className: "w-[3.75rem]" })] }) }));
};
export default TitleParts;
