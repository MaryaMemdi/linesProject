import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage, Form } from 'formik';
// import * as Yup from "yup";
// import { Formik, Field, ErrorMessage, Form } from "formik";
import { Link } from "react-router-dom";
const valid = Yup.object().shape({
    Name: Yup.string()
        .min(3, "حداقل سه کارکتر وارد کنید")
        .max(10, "کارکتر بیش از حد مجاز است")
        .required("پر کردن این فیلد الزامی است"),
    Email: Yup.string()
        .email("ایمیل معتبر نیست")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "فقط حروف انگلیسی و اعداد مجاز است")
        .required("پر کردن این فیلد الزامی است"),
    Password: Yup.string()
        .min(3, "حداقل سه کارکتر وارد کنید")
        .max(20, "کارکتر بیش از حد مجاز است")
        .required("پر کردن این فیلد الزامی است")
        .matches(/^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]+$/, "فقط حروف انگلیسی، اعداد و علائم مجاز است"),
    confirm_Password: Yup.string()
        .oneOf([Yup.ref("Password"), undefined], "رمز عبور مطابقت ندارد")
        .required("تأیید رمز عبور الزامی است"),
    terms: Yup.boolean().oneOf([true], "برای ارسال فرم باید قوانین را بخوانید و قبول کنید."),
});
function SignUp() {
    return (_jsxs(_Fragment, { children: [_jsx(Link, { to: "/login", className: "pt-3 text-sm pl-20 pb-6 text_dark", children: "< back to login" }), _jsx("h2", { className: "text-3xl pl-20 text-[#0f7ab9] pb-6", children: "signup" }), _jsx(Formik, { initialValues: {
                    Name: '',
                    Email: '',
                    Password: '',
                    confirm_Password: '',
                    terms: false,
                }, validationSchema: valid, onSubmit: (values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(values);
                    console.log("فرم با موفقیت ارسال شد!");
                    alert("ok");
                    setSubmitting(false);
                }, children: ({ isSubmitting }) => (_jsxs(Form, { className: 'md:flex md:flex-col md:justify-center md:items-center', children: [_jsxs("div", { className: "pl-20 mb_16 md:w-full md:h-auto", children: [_jsx("label", { htmlFor: "Name", className: 'text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]', children: "FullName" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "text", id: "Name", name: "Name", className: "border  w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "Name", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20 mb_16 md:w-full md:h-auto", children: [_jsx("label", { htmlFor: "Email", className: 'text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]', children: "Email" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "email", id: "Email", name: "Email", className: "border  w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "Email", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20 mb_16 md:w-full md:h-auto", children: [_jsx("label", { htmlFor: "Password", className: 'text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]', children: "Password" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "password", id: "Password", name: "Password", className: "border  w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "Password", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20 mb_16 md:w-full md:h-auto", children: [_jsx("label", { htmlFor: "confirm_Password", className: 'text-[#153060] font-quicksand text-[14px] font-normal leading-[1.25]', children: "Confirm Password" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "password", id: "confirm_Password", name: "confirm_Password", className: "border  w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "confirm_Password", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20 mb_16 md:w-full md:h-auto", children: [_jsx(Field, { type: "checkbox", id: "terms", name: "terms", className: "mr-2" }), _jsx("label", { htmlFor: "terms", className: "text-stone-800 font-quicksand text-[14px] font-semibold leading-[1.25]", children: "I agree to all the Terms and Privacy Policies" }), _jsx(ErrorMessage, { name: "terms", component: "div", className: "text-red-500" })] }), _jsx("div", { className: "pl-20 mb_16 md:w-full md:h-auto", children: _jsx("button", { type: "submit", className: "w-3/4 bg-blue-500 mt-5 text-white py-2 mb-3", disabled: isSubmitting, children: isSubmitting ? "در حال ارسال..." : "create account" }) })] })) }), _jsx("h1", { className: "p-3 text-3xl font-bold", children: "Lines" }), _jsx(Link, { to: "/login", className: "pt-3 text-sm pl-20 pb-6 text-blue-500", children: "< back to login" }), _jsx("h2", { className: "text-3xl pl-20 text-blue-500 pb-6", children: "signup" }), _jsx(Formik, { initialValues: {
                    Name: "",
                    Email: "",
                    Password: "",
                    confirm_Password: "",
                    terms: false,
                }, validationSchema: valid, onSubmit: (values, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log(values);
                    console.log("فرم با موفقیت ارسال شد!");
                    alert("ok");
                    setSubmitting(false);
                }, children: ({ isSubmitting }) => (_jsxs(Form, { children: [_jsxs("div", { className: "pl-20", children: [_jsx("label", { htmlFor: "Name", children: "FullName" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "text", id: "Name", name: "Name", className: " border-2 w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "Name", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20", children: [_jsx("label", { htmlFor: "Email", children: "Email" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "email", id: "Email", name: "Email", className: " border-2 w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "Email", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20", children: [_jsx("label", { htmlFor: "Password", children: "Password" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "password", id: "Password", name: "Password", className: " border-2 w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "Password", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20", children: [_jsx("label", { htmlFor: "confirm_Password", children: "Confirm Password" }), _jsxs("div", { className: "flex", children: [_jsx(Field, { type: "password", id: "confirm_Password", name: "confirm_Password", className: " border-2 w-3/4 h-8 bg-gray-200" }), _jsx(ErrorMessage, { name: "confirm_Password", component: "div", className: "ml-3 text-red-500" })] })] }), _jsxs("div", { className: "pl-20", children: [_jsx(Field, { type: "checkbox", id: "terms", name: "terms", className: "mr-2" }), _jsx("label", { htmlFor: "terms", children: "\u062A\u0645\u0627\u0645\u06CC \u0642\u0648\u0627\u0646\u06CC\u0646 \u0631\u0627 \u062E\u0648\u0627\u0646\u062F\u0647 \u0648 \u0642\u0628\u0648\u0644 \u06A9\u0631\u062F\u0647\u200C\u0627\u0645" }), _jsx(ErrorMessage, { name: "terms", component: "div", className: "text-red-500" })] }), _jsx("div", { className: "pl-20", children: _jsx("button", { type: "submit", className: "w-3/4 bg-blue-500 mt-5 text-white py-2 mb-3", disabled: isSubmitting, children: isSubmitting ? "در حال ارسال..." : "create account" }) })] })) })] }));
}
export default SignUp;
