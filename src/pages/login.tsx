import LoginForm from "../components/loginForm";
import Header from "../components/header";
import FireBaseBox from "../components/firebaseBox";
import TitlePage from "../components/titlePage";
import SplitterComponent from "../components/SplitterComponent";
import { Link } from "react-router-dom";
import logo from '../../public/assets/images/logo.png';
const Login = () => {
  return (
    <div className="flex h-[802px] w-full md:h-[1024px] mt-6 lg:justify-around min-w-[320px] pb-[300px]">
      <Link to='/mainPage' className="justify-center lg:justify-start bg-slate-600 inline-block">
        <img
          src={logo}
          alt="logo"
          className="w-[120px] h-9 left-[20px] top-10 absolute justify-center md:justify-start"
        />
      </Link>
      <div
        className="w-[450px] h-[450px] left-[145px] mt-[260px] mb-[314px] bg-[#d9d9d9] lg:block hidden"
        id="hiddenDiv"
      ></div>
      <div className="lg:w-1/2 h-screen justify-center lg:left-[736px] md:mx-20">
        <Header linkAddress="/signup" linkTitle="signup" />

        <div className="h-[550px] top-[160px] absolute flex-col mx-5 justify-start items-start gap-8 inline-flex mb-105 w-[360px] sm:w-[608px] md:[608px] mt-3">
          <TitlePage titlePage="Login" />
          <div className="h-[460px] flex-col justify-start items-center gap-10 flex grow">
            <LoginForm />
            <SplitterComponent title="Or login with" />
            <FireBaseBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
