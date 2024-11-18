import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import profilePic from "/assets/images/exploreIcons/profile pic.png";
import plus from "/assets/images/exploreIcons/plus.svg";
import { GoChevronLeft } from "react-icons/go";
//this component use for making card for popularweriters part
const PopularWritersCard = ({ userName, email, worksNumber, readingNumber, followersNumber, }) => {
    //this data is static just for make ui
    const cardInformation = [
        { id: 0, title: "Works", number: worksNumber },
        { id: 1, title: "Reading", number: readingNumber },
        { id: 2, title: "Followers", number: followersNumber },
    ];
    //this function use for changing format tausend and hundert number to K and M ex. 1000 to 1K
    const numberFormat = (num) => {
        if (num < 1000000 && num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        else if (num >= 1000000) {
            return (num / 1000000).toFixed(2) + "M";
        }
        return num.toString();
    };
    return (_jsxs("div", { className: "w-[296px] h-[254px] relative bg-white rounded-xl shadow", children: [_jsx("div", { className: " flex-col  gap-6 flex  absolute right-8 mt-4 ", children: cardInformation.map((card) => {
                    return (_jsxs("div", { className: "flex-col justify-start items-center gap-1 flex ", children: [_jsx("div", { className: "text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]", children: card.title }), _jsx("div", { className: "text-center text-stone-800 text-sm font-normal font-Quicksand leading-[17.50px]", children: numberFormat(card.number) })] }, card.id));
                }) }), _jsx("div", { className: "items-center flex justify-end absolute right-2 bottom-4 ", children: _jsxs("a", { href: "#", className: "text-[#c5b1ff] text-sm font-semibold font-Quicksand  inline-flex leading-[18px]", children: ["See More", _jsx("div", { className: "w-6 h-6   rotate-180 leading-[17.5px]  text-2xl", children: _jsx(GoChevronLeft, {}) })] }) }), _jsxs("div", { className: "left-[16px] top-[16px] absolute flex-col justify-start items-center  inline-flex", children: [_jsx("img", { className: "w-[120px] h-[120px] relative rounded-[200px] mb-2", src: profilePic }), _jsxs("div", { className: "h-12 flex-col justify-start items-center flex", children: [_jsx("h4", { className: "self-stretch text-stone-800 text-xl font-semibold font-Quicksand leading-[30px]", children: userName }), _jsx("p", { className: "text-stone-800 text-sm font-normal font-Quicksand leading-[17.50px]", children: email })] })] }), _jsxs("button", { className: "w-[137px] px-4 py-1.5 left-[16px] top-[202px] absolute bg-[#4c1595] rounded-lg justify-center items-center gap-2 inline-flex ", children: [_jsx("div", { className: "w-6 h-6 relative", children: _jsx("img", { src: plus }) }), _jsx("p", { className: "text-[#f9f9f9] text-base font-semibold font-Quicksand leading-normal", children: "Follow" })] })] }));
};
export default PopularWritersCard;
