import Header from "../components/header";

import FireBaseBox from "../components/firebaseBox";

import TitlePage from "../components/titlePage";
import SplitterComponent from "../components/SplitterComponent";
import ForgetPasswordForm from "../components/passwordForm";
import { Link } from "react-router-dom";
import logo from '../../public/assets/images/logo.png';

const ForgotPassword = () => {
  return (
    <div className="flex h-[802px] w-full sm:h-[1024px] lg:justify-around min-w-[360px] pb-[300px] ">
      <Link to='/' className="justify-center lg:justify-start bg-slate-600 inline-block">
        <img
          src={logo}
          alt="logo"
          className="w-[120px] h-9 left-[20px] top-10 absolute justify-center md:justify-start"
        />
      </Link>
      <div
        className="w-[450px] h-[450px] left-[145px]  mt-[260px] mb-[314px] bg-[#d9d9d9] lg:block hidden  "
        id="hiddenDiv"
      ></div>
      <div className="lg:w-1/2 h-screen sm:justify-center lg:left-[736px] sm:mx-20 ">
        <div className="lg:top-[130px] lg:absolute">
          <Header linkAddress="/login" linkTitle="login" />
        </div>

        {/* header above login form */}
        <div className="h-[550px] top-[160px] lg:top-[300px] absolute flex-col mx-5 justify-start items-start  lg:h-[450px] lg:w-[450px]  inline-flex  mb-105  w-[360px] sm:w-[608px] md:[608px] ">
          <TitlePage titlePage="Forget Password" />
          <div className=" h-[460px] flex-col justify-start items-center gap-10 flex grow ">
            <div className="opacity-75 text-stone-700 text-base font-normal font-InterSemiBold leading-normal ">
              Don’t worry, happens to all of us. Enter your email below to
              recover your password
            </div>

            {/* Input fields for email */}

            <ForgetPasswordForm />
            <SplitterComponent title="Or login with" />
            {/* Driver with andere option */}
            <FireBaseBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
