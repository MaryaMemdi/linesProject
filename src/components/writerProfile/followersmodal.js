import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PiPlusBold } from "react-icons/pi";
import pic1 from "../../../public/assets/images/writerProfile/pic1.png";
import pic2 from "../../../public/assets/images/writerProfile/pic2.png";
import pic3 from "../../../public/assets/images/writerProfile/Sakshi.png";
const FollowersModal = ({ setShowFollowers }) => {
    const followers = [
        { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
        { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
        { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: true },
        { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
        { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
        { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
        { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
        { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
        { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
    ];
    return (_jsxs("div", { className: "w-80 md:w-[28.125rem] h-[30.38rem] lg:w-[34.5rem] lg:h-[486px] relative bg-white rounded-xl mx-auto justify-center  ", children: [_jsx("button", { className: "h-6 flex justify-end pr-4 items-center mt-4  w-full", onClick: () => setShowFollowers(false), children: _jsx("img", { src: "/assets/images/x.png" }) }), _jsx("div", { className: " text-[#4c1595] text-2xl font-semibold font-Quicksand flex leading-9 whitespace-nowrap justify-center mx-auto mb-4 ", children: "1,787 Followers" }), _jsx("div", { className: "w-full lg:w-[520px] h-[394px] m-2  flex-col justify-start items-start gap-2 inline-flex overflow-y-scroll", children: _jsx("div", { className: "w-full h-[378px] flex-col justify-start items-end gap-4 flex grow", children: followers.map((follower) => {
                        return (_jsxs("div", { className: "self-stretch justify-between items-center inline-flex", children: [_jsxs("div", { className: "justify-start items-start gap-2 flex", children: [_jsx("img", { className: "w-12 h-12 relative rounded-[123.43px]", src: follower.img }), _jsxs("div", { className: "flex-col justify-start items-start inline-flex", children: [_jsxs("div", { className: "justify-start items-center gap-1 inline-flex", children: [_jsx("div", { className: "text-stone-800 text-base font-normal font-['Quicksand'] leading-normal whitespace-nowrap", children: follower.name }), _jsx("div", { className: ` ${follower.writer ? "block" : "hidden"} w-1 h-1 bg-stone-200 rounded-full` }), _jsx("div", { className: `${follower.writer ? "block" : "hidden"} text-stone-400 text-xs font-normal font-['Quicksand'] leading-[15px] `, children: "writer" })] }), _jsx("div", { className: "self-stretch text-stone-400 text-xs font-normal font-['Quicksand'] leading-[15px]", children: follower.email })] })] }), _jsxs("div", { className: "px-4 py-1.5 rounded-lg border border-[#4c1595] justify-center items-center gap-1 flex text-[#4c1595] text-base font-semibold font-['Quicksand'] leading-normal", children: [_jsx(PiPlusBold, {}), _jsx("p", { children: "Follow" })] })] }));
                    }) }) })] }));
};
export default FollowersModal;
