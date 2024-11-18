interface FormData {
    username: string;
    email: string;
    password: string;
    re_password: string;
}
export declare const registerUser: (formData: FormData) => Promise<any>;
export {};
