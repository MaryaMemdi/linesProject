import { FC } from "react";
import { ButtonSubTitleProps } from "../types/loginFormTypes";
import { Link } from "react-router-dom";

const ButtonSubTitle: FC<ButtonSubTitleProps> = ({
  buttonSubTitle,
  linkSubTitle,
  subTitle,
  className = "", 
  // type = "button", 
  disabled = false,
  isLoading = false
}) => {
  return (
    <div className={`text-center justify-center content-center flex mx-auto ${className}`}>
      <span className="text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]">
        {buttonSubTitle}
      </span>
      <Link
        to={linkSubTitle}
        className="text-[#721ee3] text-sm font-semibold font-Quicksand leading-[17.50px]"
      >
        {subTitle}
      </Link>
   
      {isLoading ? (
        <button className="btn" disabled={disabled}>
          در حال بارگذاری...
        </button>
      ) : (
        <button  className="btn" disabled={disabled}>
          
        </button>
      )}
    </div>
  );
};

export default ButtonSubTitle;
