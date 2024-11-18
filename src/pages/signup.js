import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import logo from '../../public/assets/images/logo.png';
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/header";
import FireBaseBox from "../components/firebaseBox";
import TitlePage from "../components/titlePage";
import SplitterComponent from "../components/SplitterComponent";
import useFormValidation from "../hooks/useFormValidation";
import useUserStore from "../stores/userStore";
import ButtonSubTitle from "../components/buttonSubtitle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../axios";
const Signup = () => {
    const { setFormData, setError, setLoading, loading, resetForm } = useUserStore();
    const [isChecked, setIsChecked] = useState(false);
    const { register, handleSubmit, errors } = useFormValidation({
        email: "",
        username: "",
        password: "",
        re_password: "",
    });
    const navigate = useNavigate();
    const data = [
        { type: "username", label: "Full Name", placeholder: "John Doe", key: "username" },
        { type: "email", label: "Email", placeholder: "example@test.com", key: "email" },
        { type: "password", label: "Password", placeholder: "password", key: "password" },
        { type: "re_password", label: "Confirm Password", placeholder: "password", key: "re_password" },
    ];
    const onSubmit = async (formData) => {
        setError("");
        try {
            setLoading(true);
            setFormData(formData);
            const response = await registerUser(formData);
            toast.success("Registration successful");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            resetForm();
            console.log("success", response);
        }
        catch (error) {
            console.error("Error:", error);
            if (error.email) {
                toast.error("User with this email already exists.");
            }
            if (error.username) {
                toast.error("User with this username already exists.");
            }
            if (!error.email && !error.username) {
                toast.error("Request was throttled. Please try again in a few minutes!");
            }
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: "flex h-[802px] w-full sm:h-[1024px] lg:justify-around min-w-[360px] pb-[300px]", children: [_jsx(Link, { to: '/mainPage', className: "justify-center lg:justify-start bg-slate-600 inline-block", children: _jsx("img", { src: logo, alt: "logo", className: "w-[120px] h-9 left-[20px] top-10 absolute justify-center md:justify-start" }) }), _jsx(ToastContainer, {}), _jsx("div", { className: "lg:w-[450px] lg:h-[450px] lg:left-[145px] lg:mt-[260px] lg:mb-[314px] bg-[#d9d9d9] lg:block hidden", id: "hiddenDiv" }), _jsxs("div", { className: "lg:w-1/2 h-screen justify-center lg:left-[736px] md:mx-20", children: [_jsx(Header, { linkAddress: "/login", linkTitle: "login" }), _jsxs("div", { className: "h-[550px] top-[160px] absolute flex-col mx-5 justify-start items-start gap-8 inline-flex mb-105 w-[360px] md:[608px]", children: [_jsx(TitlePage, { titlePage: "Signup" }), _jsxs("div", { className: "h-[460px] flex-col justify-start items-center gap-10 flex grow", children: [_jsx("form", { className: "w-full content-center", onSubmit: handleSubmit(onSubmit), children: _jsxs("div", { className: "w-full", children: [data.map((item, index) => (_jsxs("div", { className: "w-full mb-4", children: [_jsx("label", { className: "text-[#153060] text-sm font-normal font-QuicksandLight leading-[17.50px] h-[18px] rounded-sm flex-col justify-start items-start flex", children: item.label }), _jsx("input", { ...register(item.type), type: item.type === "re_password" ? "password" : item.type, placeholder: item.placeholder, className: `h-[42px] p-3 bg-stone-100 rounded-[5px] border-2 border-stone-300 w-full focus:outline-none hover:border-[#4C1595] ${errors[item.type] ? "border-red-500" : "border-stone-300"}` }), errors[item.type] && (_jsx("p", { className: "text-red-600 -mt-3 mb-3", children: errors[item.type]?.message }))] }, index))), _jsxs("div", { className: "justify-start items-center gap-2 flex mb-10", children: [_jsx("input", { type: "checkbox", className: "w-4 h-4 relative", onClick: () => setIsChecked(!isChecked) }), _jsxs("p", { className: "text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]", children: ["I agree to the ", _jsx(Link, { to: '/terms', className: "text-[#721EE3]", children: "Terms" }), " and ", _jsx(Link, { to: "/privacy", className: "text-[#721EE3]", children: "Privacy Policies" })] })] }), _jsx("button", { disabled: !isChecked || loading, type: "submit", className: "w-full bg-[#4c1595] text-white font-Quicksand leading-normal text-base rounded-md h-10 p-2 mb-4 disabled:bg-[#721ee3]", children: "Create account" }), _jsx(ButtonSubTitle, { buttonSubTitle: "Already have an account?", linkSubTitle: "/login", subTitle: "Login", text: "Create account", type: "button" })] }) }), _jsx(SplitterComponent, { title: "Or Sign up with" }), _jsx(FireBaseBox, {})] })] })] })] }));
};
export default Signup;
