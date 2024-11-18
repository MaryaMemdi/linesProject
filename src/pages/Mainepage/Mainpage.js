import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Textbox1component from "./../../components/Textbox1/Textbox1component";
import BlogCartComponent from "../../components/BlogCartComponent";
import Welcome from "../../components/welcome";
import PopularStories from "../../components/explore/popularStories";
import ExploreLanding from "../../components/exploreLanding";
import Unlock from "../../components/unlock";
function MainPage() {
    return (_jsxs("div", { className: "flex flex-col gap-[95px] justify-center items-center mx-auto w-full ", children: [_jsx(Welcome, {}), _jsx(Textbox1component, {}), _jsx(PopularStories, {}), _jsx(ExploreLanding, {}), _jsx(Unlock, {}), _jsx(BlogCartComponent, {})] }));
}
export default MainPage;
