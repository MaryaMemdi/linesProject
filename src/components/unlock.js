import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Unlock = () => {
    const cards = [
        {
            title: "Find Stories That Speak to You",
            subTitle: "Browse through a wide range of genres and themes to discover stories that resonate with your interests and emotions.",
        },
        {
            title: "Become Part of a Vibrant Community",
            subTitle: "Connect with fellow writers and readers, and build meaningful relationships within our supportive community.",
        },
        {
            title: " Share Your Stories and Get Noticed",
            subTitle: "Publish your stories and gain recognition from our growing audience, engage in discussions to improve your writing skills.",
        },
    ];
    return (_jsxs("div", { className: "w-80 md:w-[704px] md:h-[566px] lg:w-full h-[562px] lg:h-[613px] flex-col  flex mx-auto items-center", children: [_jsxs("div", { className: "h-[152px] flex-col justify-start items-center gap-4 flex mb-[99px] md:w-[704px] md:h-[182px]", children: [_jsx("div", { className: "h-[22px] px-2 py-0.5 bg-[#ede8ff] rounded-[36px] shadow justify-center items-center gap-0.5 inline-flex", children: _jsx("div", { className: "text-[#4c1595] text-xs font-semibold font-Quicksand leading-[15px]", children: "More Features" }) }), _jsx("h2", { className: "self-stretch text-center text-stone-800 text-2xl md:text-3xl font-bold font-Quicksand leading-[37.50px]", children: "Unlock Your Imagination with Our Stories" }), _jsx("p", { className: "self-stretch text-center text-stone-800 text-base md:text-xl font-normal font-Quicksand leading-[30px] grow ", children: "At \"lines\", we believe in the power of storytelling. Find captivating stories written by talented authors and unleash your creativity by sharing your own." })] }), _jsx("div", { className: "h-[400px]", children: _jsx("div", { className: "w-80 md:w-[704px] h-[450px] lg:w-[1220px]  self-stretch justify-around items-center gap-4 md:gap-6 inline-flex overflow-x-scroll lg:overflow-hidden  mt-0", children: cards.map((card) => {
                        return (_jsxs("div", { className: "w-[320px] h-[241px] md:w-[336px] md:h-[285px] px-6 pb-8 rounded-xl border border-[#ddd4ff] flex-col justify-start items-center  inline-flex ", children: [_jsx("div", { className: "w-[180px] h-[180px] relative bg-[#ede8ff] rounded-xl -mt-[67px] mb-[1px] md:mb-[6px] " }), _jsx("h3", { className: "w-[288px] h-[60px] md:w-[304px] md:h-[72px] text-center text-stone-800 text-xl md:text-2xl font-semibold font-Quicksand leading-9 ", children: card.title }), _jsx("p", { className: "w-[288px] h-[54px] md:w-[304px] md:h-[96px] text-center text-stone-800 text-sm md:text-base font-normal font-Quicksand leading-[17.50px]", children: card.subTitle })] }));
                    }) }) })] }));
};
export default Unlock;
