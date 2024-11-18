
import { CustomCheckBoxProps } from "../types/loginFormTypes";
const CustomCheckBox:React.FC<CustomCheckBoxProps> = ({textBox}) => {
  return (
    <div className="justify-start items-center gap-2 flex">
      <input type="checkbox" className="w-4 h-4 relative" />
      <span className="text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
        {textBox}
      </span>
       
    </div>
  );
};
export default CustomCheckBox;