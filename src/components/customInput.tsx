// import { ErrorMessage } from "formik";
import { CustomInputProps } from "../types/loginFormTypes";
const CustomInput: React.FC<CustomInputProps> = ({
  name,
  placeholder,
  label,
  type,
  
}) => {
  return (
    <div className="w-full ">
      <label
        htmlFor={name}
        className="text-[#153060]
                        text-sm
                        font-normal
                        font-QuicksandLight
                        leading-[17.50px]  h-[18px] rounded-sm flex-col justify-start items-start  flex  "
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`h-[42px] p-3 bg-stone-100 rounded-[5px]  border-2  border-stone-300 focus:outline-none hover:border-[#4C1595]
                   justify-start items-center mb-4  inline-flex w-full grow shrink basis-0`}
      />
      
    </div>
  );
};

export default CustomInput;
