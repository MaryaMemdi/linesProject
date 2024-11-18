import { ButtonProps } from "../types/loginFormTypes";

const CustomButton: React.FC<ButtonProps> = ({ buttonTitle }) => {
  return (
    <button
      type="submit"
      className="w-full bg-[#4c1595] text-white font-Quicksand leading-normal text-base rounded-md h-10 p-2 mb-4"
    >
      {buttonTitle}
    </button>
  );
};

export default CustomButton;
