import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useState } from "react";
// this is a custom drop down menu
// items list component
const DropdownItem = ({ title, link, subMenu, icon, }) => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const handleIconClick = () => {
        setShowSubMenu(!showSubMenu);
    };
    return (_jsxs("div", { className: `flex flex-col ${showSubMenu ? "mb-4" : ""}`, children: [_jsxs("div", { className: " justify-start items-center inline-flex relative", children: [link ? _jsx(Link, { to: link, className: "text-stone-800 text-base font-semibold font-QuicksandLight leading-normal flex", children: title }) : _jsx("p", { className: "text-stone-800 text-base font-semibold font-QuicksandLight leading-normal flex", children: title }), subMenu && (_jsx("div", { className: "w-[18px] h-[18px] relative origin-top-left ", children: _jsx("img", { src: icon, onClick: handleIconClick }) }))] }), showSubMenu && subMenu && (_jsx("ul", { className: "bg-none ", children: subMenu.map((item) => (_jsxs("li", { className: "flex flex-col p-3 gap-1 m-4 hover:bg-stone-200 rounded-md", children: [_jsx("div", { className: "self-stretch h-[18px] flex-col justify-start items-start flex", children: _jsx(Link, { to: item.link, className: "self-stretch text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: item.title }) }), _jsx("div", { className: "self-stretch h-9 flex-col justify-start items-start flex", children: _jsx("div", { className: "self-stretch text-stone-800 text-sm font-normal font-QuicksandLight leading-[17.50px]", children: item.subTitle }) })] }, item.title))) }))] }));
};
// inputs of item list menu
const Dropdown = ({ inputs }) => {
    const items = [...inputs];
    return (_jsx("div", { className: "flex flex-col justify-center items-start gap-4 ", children: items.map((item) => (_jsx(DropdownItem, { ...item }))) }));
};
export default Dropdown;
