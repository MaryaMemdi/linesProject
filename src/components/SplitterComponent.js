import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import angle from "../../public/assets/images/Rectangle.png";
const SplitterComponent = ({ title }) => {
    return (_jsxs("div", { className: "h-14 justify-start items-center gap-4 inline-flex w-[320px] sm:w-[608px] md:[608px] ", children: [_jsx("div", { className: "grow shrink basis-0 h-[0.50px] opacity-25 bg-stone-600", children: _jsx("img", { src: angle }) }), _jsx("div", { className: "opacity-50 text-stone-600 text-sm font-normal font-QuicksandLight leading-[17.50px]", children: title }), _jsx("div", { className: "grow shrink basis-0 h-[0.50px] opacity-25 bg-stone-600", children: _jsx("img", { src: angle }) })] }));
};
export default SplitterComponent;
