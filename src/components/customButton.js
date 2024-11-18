import { jsx as _jsx } from "react/jsx-runtime";
const CustomButton = ({ buttonTitle }) => {
    return (_jsx("button", { type: "submit", className: "w-full bg-[#4c1595] text-white font-Quicksand leading-normal text-base rounded-md h-10 p-2 mb-4", children: buttonTitle }));
};
export default CustomButton;
