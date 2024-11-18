export interface UserData{
    username:string;
    email:string;
    password:string;
    re_password:string;
}

export interface UserStore{
    formData: UserData;
    error:Error | string;
    loading:boolean;
    setFormData: (userData:UserData)=>void;
    setLoading: (loading:boolean)=>void;
    setError: (error:string)=> void;
    resetForm:()=>void;
    
}