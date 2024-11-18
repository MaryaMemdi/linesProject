import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ChervonLeft from "../../public/assets/images/chevron-left.png";
import { Link } from "react-router-dom";
const Header = ({ linkAddress, linkTitle }) => {
    return (_jsx("div", { className: "w-full  relative ", children: _jsx("div", { className: "h-6 justify-start items-center gap-1 top-32 left-4 absolute", children: _jsxs(Link, { to: linkAddress, className: "text-stone-600 text-sm font-semibold font-QuicksandLight leading-[17.50px] flex", children: [_jsx("img", { className: "w-6 h-6 relativ mr-2", src: ChervonLeft }), _jsxs("span", { className: "whitespace-nowrap", children: ["Back to ", linkTitle] })] }) }) }));
};
export default Header;
