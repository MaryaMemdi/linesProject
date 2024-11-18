import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import CustomButton from "./customButton";
import ButtonSubTitle from "./buttonSubtitle";
import { toast } from "react-toastify";
import { loginUser } from "./../auth/loginUser";
const initialValues = {
    email: "",
    password: "",
};
const formInputs = [
    { name: "email", placeholder: "Example@test.com", label: "Email" },
    { name: "password", placeholder: "°°°°°°°°", label: "Password" },
];
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "فقط حروف انگلیسی و اعداد مجاز است")
        .email("ایمیل نامعتبر است")
        .required("ایمیل الزامی است"),
    password: Yup.string()
        .matches(/^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]+$/, "فقط حروف انگلیسی، اعداد و علائم مجاز است")
        .min(8, "پسورد باید حداقل ۸ کاراکتر باشد")
        .required("رمز عبور الزامی است"),
});
const LoginForm = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [remember, setRemember] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const saveEmail = localStorage.getItem("email");
        const savePassword = localStorage.getItem("password");
        if (saveEmail && savePassword) {
            initialValues.email = saveEmail;
            initialValues.password = savePassword;
            setRemember(true);
        }
    }, []);
    const handleSubmit = async (values) => {
        setLoading(true);
        setError("");
        try {
            if (remember) {
                localStorage.setItem("email", values.email);
                localStorage.setItem("password", values.password);
            }
            else {
                localStorage.removeItem("email");
                localStorage.removeItem("password");
            }
            // اصلاح: ارسال یک شیء به loginUser
            await loginUser({ email: values.email, password: values.password });
            toast.success("ورود موفقیت‌آمیز بود!");
            navigate("/home");
        }
        catch (error) {
            setError(error.message || "ایمیل یا رمز عبور نادرست است");
            toast.error(error.message || "ایمیل یا رمز عبور نادرست است");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsx(Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: handleSubmit, children: ({ errors, touched }) => (_jsxs(Form, { className: "h-[58px] flex-col justify-start items-start mx-5 inline-flex grow w-[320px] sm:w-[608px] md:[608px]", children: [formInputs.map((form) => (_jsxs(Fragment, { children: [_jsx("label", { htmlFor: form.name, className: "text-[#153060] text-sm font-normal font-QuicksandLight leading-[17.50px] h-[18px] rounded-sm flex-col justify-start items-start flex", children: form.label }), _jsx(Field, { name: form.name, type: form.name, placeholder: form.placeholder, className: `h-[42px] p-3 bg-stone-100 rounded-[5px] border-2 border-stone-300 focus:outline-none hover:border-[#4C1595] ${errors[form.name] && touched[form.name]
                                ? "border-[#9747FF]"
                                : ""} justify-start items-center mb-4 inline-flex w-full grow shrink basis-0` }), _jsx(ErrorMessage, { name: form.name, component: "div", className: "text-red-400 font-thin text-sm py-[5px] justify-start items-center gap-1 flex -mt-4" })] }, form.name))), _jsxs("div", { className: "h-6 justify-between items-center inline-flex w-full grow mb-10", children: [_jsxs("div", { className: "justify-start items-center gap-2 flex", children: [_jsx("input", { type: "checkbox", onChange: () => setRemember(!remember), checked: remember, className: "w-4 h-4 relative" }), _jsx("span", { className: "text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: "Remember me" })] }), _jsx(Link, { to: "/forgotPass", className: "text-[#721ee3] text-sm font-semibold font-QuicksandLight leading-[17.50px]", children: "Forgot Password" })] }), _jsx(CustomButton, { buttonTitle: loading ? "loading..." : "Login" }), _jsx(ButtonSubTitle, { buttonSubTitle: "Don\u2019t have an account?", linkSubTitle: "/signup", subTitle: "Signup", text: "Create account", type: "button" }), error && (_jsx("div", { className: "text-red-500 text-sm font-thin", children: error }))] })) }));
};
export default LoginForm;
