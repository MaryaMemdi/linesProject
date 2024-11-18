import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const ButtonSubTitle = ({ buttonSubTitle, linkSubTitle, subTitle, className = "", 
// type = "button", 
disabled = false, isLoading = false }) => {
    return (_jsxs("div", { className: `text-center justify-center content-center flex mx-auto ${className}`, children: [_jsx("span", { className: "text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]", children: buttonSubTitle }), _jsx(Link, { to: linkSubTitle, className: "text-[#721ee3] text-sm font-semibold font-Quicksand leading-[17.50px]", children: subTitle }), isLoading ? (_jsx("button", { className: "btn", disabled: disabled, children: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0627\u0631\u06AF\u0630\u0627\u0631\u06CC..." })) : (_jsx("button", { className: "btn", disabled: disabled }))] }));
};
export default ButtonSubTitle;
