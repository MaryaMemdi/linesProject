import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// تابع برای تولید اسکیمای سفارشی اعتبارسنجی
const customValidationSchema = (fields) => {
    const schemaFields = {};
    Object.keys(fields).forEach((field) => {
        switch (field) {
            case "email":
                schemaFields[field] = Yup.string()
                    .email("Invalid email format")
                    .required("Email is required")
                    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Only English letters and numbers are allowed");
                break;
            case "password":
                schemaFields[field] = Yup.string()
                    .required("Password is required")
                    .matches(/^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]+$/, "Only English letters, numbers, and symbols are allowed")
                    .min(8, "Password must be at least 8 characters long");
                break;
            case "username":
                schemaFields[field] = Yup.string()
                    .required("Username is required")
                    .matches(/^[a-zA-Z]+$/, "Only English letters are allowed");
                break;
            case "verify":
                schemaFields[field] = Yup.string()
                    .required("Verification code is required")
                    .matches(/^[0-9]+$/, "Only English numbers are allowed");
                break;
            case "re_password":
                schemaFields[field] = Yup.string()
                    .required("Password confirmation is required")
                    .matches(/^[a-zA-Z0-9!@#$%^&*()_+={}\[\]:;"'<>,.?~`-]+$/, "Only English letters, numbers, and symbols are allowed")
                    .min(8, "Password must be at least 8 characters long")
                    .oneOf([Yup.ref("password")], "Passwords must match");
                break;
            default:
                schemaFields[field] = Yup.string().required(`${field} is required.`);
                break;
        }
    });
    return Yup.object().shape(schemaFields);
};
const useFormValidation = (fields) => {
    const validationSchema = customValidationSchema(fields);
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validationSchema) });
    return { register, handleSubmit, errors };
};
export default useFormValidation;
