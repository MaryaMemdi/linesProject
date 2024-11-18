import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CombinedNavbar from "./components/CombinedNavbar";
import Footer from "./components/footer";
const Layout = ({ children }) => {
    return (_jsxs("div", { children: [_jsx(CombinedNavbar, {}), children, _jsx(Footer, {})] }));
};
export default Layout;
