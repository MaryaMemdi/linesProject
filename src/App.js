import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route, Navigate, BrowserRouter, } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgetPassword";
import MainPage from "./pages/Mainepage/Mainpage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WriterProfile from "./pages/writerProfile";
import Reading from "./pages/reading";
import ReadingMode from "./components/reading/readingMode";
import Layout from "./Layout";
import Explore from "./pages/explore";
import FullExplore from "./pages/fullExplore";
import Privacy from "./pages/privacyPolicy";
import Terms from "./pages/terms";
import Home from "./pages/home";
function App() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/mainPage", element: _jsx(Layout, { children: _jsx(MainPage, {}) }) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/forgotPass", element: _jsx(ForgotPassword, {}) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/explore", element: _jsx(Layout, { children: _jsx(Explore, {}) }) }), _jsx(Route, { path: "/fullExplore", element: _jsx(Layout, { children: _jsx(FullExplore, {}) }) }), _jsx(Route, { path: "/writerProfile", element: _jsx(Layout, { children: _jsx(WriterProfile, {}) }) }), _jsx(Route, { path: "/reading", element: _jsx(Layout, { children: _jsx(Reading, {}) }) }), _jsx(Route, { path: "/readingMode", element: _jsx(ReadingMode, {}) }), _jsx(Route, { path: "/privacy", element: _jsx(Layout, { children: _jsx(Privacy, {}) }) }), _jsx(Route, { path: "/terms", element: _jsx(Layout, { children: _jsx(Terms, {}) }) })] }) }));
}
export default App;
