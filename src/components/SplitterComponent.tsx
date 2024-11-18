import angle from "../../public/assets/images/Rectangle.png";
import { SplitterComponentProps } from "../types/loginFormTypes";
const SplitterComponent: React.FC<SplitterComponentProps> = ({ title }) => {
  return (
    <div className="h-14 justify-start items-center gap-4 inline-flex w-[320px] sm:w-[608px] md:[608px] ">
      <div className="grow shrink basis-0 h-[0.50px] opacity-25 bg-stone-600">
        <img src={angle} />
      </div>
      <div className="opacity-50 text-stone-600 text-sm font-normal font-QuicksandLight leading-[17.50px]">
        {title}
      </div>
      <div className="grow shrink basis-0 h-[0.50px] opacity-25 bg-stone-600">
        <img src={angle} />
      </div>
    </div>
  );
};

export default SplitterComponent;
