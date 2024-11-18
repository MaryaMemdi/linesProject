import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { TbThumbUp, TbThumbUpFilled } from "react-icons/tb";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { HiOutlineArrowUp } from "react-icons/hi2";
//this component is used for textPolling
const Survay = () => {
    const [liked, setLiked] = useState(false);
    const stepperRef = useRef(null);
    const handleLikeClick = () => {
        setLiked(true);
        setTimeout(() => {
            stepperRef.current?.nextCallback();
        }, 1000);
    };
    const [sendComment, setSendComment] = useState(false);
    return (_jsx("div", { className: "w-[21.5rem] md:w-[43rem] lg:w-[48rem] p-4 h-[186px] flex flex-col justify-center items-center mx-auto border border-[#ddd4ff] rounded-xl dark:text-white  ", children: _jsxs(Stepper, { ref: stepperRef, unstyled: false, children: [_jsx(StepperPanel, { children: _jsxs("div", { className: "w-[21.5rem] md:w-[43rem] lg:w-[48rem] justify-center flex-col m-auto flex items-center p-stepper-number-hidden   ", children: [_jsx("h3", { className: "text-stone-800 text-xl font-semibold font-Quicksandleading-[30px] dark:text-white", children: "Did you like it?" }), _jsxs("div", { className: "h-6  items-center gap-6 inline-flex text-stone-800 text-base font-semibold font-QuicksandLight leading-normal dark:text-white", children: [_jsx("p", { className: "text-stone-800 dark:text-white  text-base font-semibold font-QuicksandLight leading-normal", children: "give it a like" }), _jsx("div", { onClick: handleLikeClick, className: `h-6 justify-center items-center flex text-xl  hover:text-[#4c1595] ${liked && "text-[#4c1595]"}`, children: liked ? _jsx(TbThumbUpFilled, {}) : _jsx(TbThumbUp, {}) })] })] }) }), _jsx(StepperPanel, { header: "", children: _jsxs("div", { className: "w-[22.5rem] md:w-[43rem] lg:w-[48rem]  py-4 px-6", children: [_jsxs("div", { className: "flex-col justify-start items-center gap-1 flex mb-4", children: [_jsx("h5", { className: "text-stone-800 text-xl font-semibold font-Quicksand leading-[30px] dark:text-white", children: "Thank you!" }), _jsx("div", { className: "justify-start items-center gap-6 inline-flex", children: _jsx("div", { className: "text-stone-800 dark:text-white text-base font-semibold font-QuicksandLight leading-normal", children: "Do you have any suggestion? write it!" }) })] }), _jsxs("div", { onClick: () => setSendComment(true), className: " h-20 p-3  rounded-[5px] border border-stone-300 justify-start items-start gap-2.5 inline-flex mx-auto w-full mb-4 ", children: [sendComment ? _jsx("input", { className: "w-full h-[50px] text-2xl outline-none bg-white dark:bg-stone-800 dark:text-white", type: "text" }) : (_jsx("p", { className: "grow shrink basis-0 text-[#828282] text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: "Write your opinion" })), _jsx("button", { className: "w-8 h-8 p-1 bg-[#ede8ff] rounded-lg justify-center items-center flex", onClick: () => stepperRef.current?.nextCallback(), children: _jsx(HiOutlineArrowUp, { className: "text-[#4c1595]" }) })] })] }) }), _jsx(StepperPanel, { header: " ", children: _jsxs("div", { className: "justify-center flex-col m-auto flex items-center ", children: [_jsx("h3", { className: "text-stone-800 text-xl font-semibold font-Quicksandleading-[30px] dark:text-white", children: "Thank you for your feedback!" }), _jsx("div", { className: "h-6  items-center gap-6 inline-flex text-stone-800 text-base font-semibold font-QuicksandLight leading-normal", children: _jsx("p", { className: "text-stone-800 dark:text-white text-base font-semibold font-QuicksandLight leading-normal", children: "enjoy your reading! :" }) })] }) })] }) }));
};
export default Survay;
