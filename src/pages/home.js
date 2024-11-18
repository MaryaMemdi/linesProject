import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import logo from "../../public/assets/images/logo.png";
const Home = () => {
    const items = [
        { id: 0, title: "signup page", link: "/signup" },
        { id: 1, title: "login page", link: "/login" },
        { id: 2, title: "forget Password", link: "/forgotPass" },
        { id: 3, title: "Reading Page", link: "/reading" },
        { id: 4, title: "Writer Profile", link: "/writerProfile" },
        { id: 5, title: "explore page", link: "/explore" },
        { id: 6, title: "landing Page", link: "/mainPage" },
    ];
    return (_jsxs("div", { className: "flex flex-col lg:p-6 p-4", children: [_jsx(Link, { to: "/mainPage", className: " md:ml-20 mt-6 ml-6", children: _jsx("img", { src: logo, alt: "logo" }) }), _jsxs("div", { className: "mt-10 lg:justify-center flex flex-col mx-auto font-Quicksand gap-3 justify-start", children: [_jsx("h3", { className: "text-2xl md:text-3xl lg:text-5xl flex justify-center mx-auto", children: " Hello and welcome! \uD83C\uDF89" }), _jsxs("div", { className: "md:w-1/2 w-full p-6 justify-center items-start font-semibold font-QuicksandLight flex flex-col mx-auto gap-3 ", children: [_jsx("p", { children: "This site is still under development, and only a portion of its features, implemented by me, is currently displayed. \uD83D\uDEA7\u2728" }), _jsx("p", { children: "We\u2019ve used advanced technologies like React, TypeScript, Tailwind, and Zustand to create this amazing user experience. Our goal is to build a smooth and beautiful user interface that will surprise you even more in the future as we add more features! \uD83D\uDD27\uD83D\uDCBB" }), _jsx("p", { children: "Thank you for visiting us, and we hope you enjoy this initial view. We look forward to your feedback! \uD83C\uDF1F" }), _jsx("h4", { className: "md:text-xl text-lg font-Quicksand ", children: "Stay with us! \uD83D\uDC96" })] }), _jsx("div", { className: "lg:flex gap-3 justify-center mx-auto mt-8 grid  grid-cols-2 md:grid-cols-3  ", children: items.map(item => {
                            return (_jsx(Link, { to: item.link, className: "px-4 py-2 border-2 border-[#4C1595] bg-[#ede8ff] hover:bg-[#4C1595] rounded-3xl text-stone-800 hover:text-stone-400 ", children: item.title }, item.id));
                        }) })] })] }));
};
export default Home;
