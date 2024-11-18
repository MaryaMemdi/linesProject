import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useFormValidation from "../hooks/useFormValidation";
import CustomButton from "./customButton";
// this a custom hook for input validation
const ForgetPasswordForm = () => {
    const { register, handleSubmit, errors } = useFormValidation({ email: "" });
    const onSubmit = () => {
        console.log('submited');
    };
    return (_jsxs("form", { className: "w-full content-center", onSubmit: handleSubmit(onSubmit), children: [_jsx("div", { className: "w-full", children: _jsxs("div", { className: "w-full mb-4", children: [_jsx("label", { className: "text-[#153060]\n                        text-sm\n                        font-normal\n                        font-QuicksandLight\n                        leading-[17.50px]  h-[18px] rounded-sm flex-col justify-start items-start  flex  ", children: "Email" }), _jsx("input", { ...register("email"), type: "email", placeholder: "example@test.com", className: `h-[42px] p-3 bg-stone-100 rounded-[5px]  border-2  border-stone-300 
                   justify-start items-center mb-4   w-full grow shrink basis-0 focus:outline-none hover:border-[#4C1595]  ${errors ? "border-red-500 " : "border-stone-300"}` }), errors.email && (_jsx("p", { className: "text-red-600 -mt-3 mb-3", children: errors.email.message }))] }) }), _jsx(CustomButton, { buttonTitle: "Submit" })] }));
};
export default ForgetPasswordForm;
