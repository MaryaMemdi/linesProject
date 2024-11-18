import { validationProps } from "../types/loginFormTypes";
declare const useFormValidation: (fields: {
    [key: string]: any;
}) => {
    register: import("react-hook-form").UseFormRegister<validationProps>;
    handleSubmit: import("react-hook-form").UseFormHandleSubmit<validationProps, undefined>;
    errors: import("react-hook-form").FieldErrors<validationProps>;
};
export default useFormValidation;
