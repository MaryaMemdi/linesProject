import ChervonLeft from "../../public/assets/images/chevron-left.png";
import { Link } from "react-router-dom";
import { HeaderProps } from "../types/loginFormTypes";

const Header: React.FC<HeaderProps> = ({ linkAddress, linkTitle }) => {
  return (
    <div className="w-full  relative ">
      <div className="h-6 justify-start items-center gap-1 top-32 left-4 absolute">
        <Link
          to={linkAddress}
          className="text-stone-600 text-sm font-semibold font-QuicksandLight leading-[17.50px] flex"
        >
          <img className="w-6 h-6 relativ mr-2" src={ChervonLeft} />
          <span className="whitespace-nowrap">Back to {linkTitle}</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
