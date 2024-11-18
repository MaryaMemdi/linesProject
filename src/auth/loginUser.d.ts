interface LoginData {
    email: string;
    password: string;
}
export declare const loginUser: (loginData: LoginData) => Promise<any>;
export {};
