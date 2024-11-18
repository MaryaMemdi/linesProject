import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CustomInput = ({ name, placeholder, label, type, }) => {
    return (_jsxs("div", { className: "w-full ", children: [_jsx("label", { htmlFor: name, className: "text-[#153060]\n                        text-sm\n                        font-normal\n                        font-QuicksandLight\n                        leading-[17.50px]  h-[18px] rounded-sm flex-col justify-start items-start  flex  ", children: label }), _jsx("input", { name: name, type: type, placeholder: placeholder, className: `h-[42px] p-3 bg-stone-100 rounded-[5px]  border-2  border-stone-300 focus:outline-none hover:border-[#4C1595]
                   justify-start items-center mb-4  inline-flex w-full grow shrink basis-0` })] }));
};
export default CustomInput;
