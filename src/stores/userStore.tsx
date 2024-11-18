import {create} from 'zustand';
import { UserStore } from '../types/userStore';


const useUserStore = create<UserStore>((set)=>({
    formData : {username:'',email:'', password:'',re_password:''},
    error:'',
    loading:false,
    setFormData : (userData)=> set((state)=> ({formData:{...state.formData, ...userData}})),
    setError: (error)=> set({error}),
    setLoading: (loading)=>set({loading}),
    resetForm: ()=> set({formData:{username:'',email:'', password:'',re_password:''}, error:'', loading:false})

}));

export default useUserStore;