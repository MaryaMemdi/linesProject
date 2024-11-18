import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CustomCheckBox = ({ textBox }) => {
    return (_jsxs("div", { className: "justify-start items-center gap-2 flex", children: [_jsx("input", { type: "checkbox", className: "w-4 h-4 relative" }), _jsx("span", { className: "text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: textBox })] }));
};
export default CustomCheckBox;
