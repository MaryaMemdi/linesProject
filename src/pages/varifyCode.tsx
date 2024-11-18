import Header from "../components/header";

import TitlePage from "../components/titlePage";

import CustomButton from "../components/customButton";
import useFormValidation from "../hooks/useFormValidation";
import Logo from "../components/logo";

const VerifyCode = () => {
  const { register, handleSubmit, errors } =
    useFormValidation({ verify: "" });
    const onSubmit = ()=>{
      console.log('submited');
    }
  return (
    <div className="flex h-[802px] w-full sm:h-[1024px] lg:justify-around min-w-[360px] pb-[300px]  ">
      <div className="justify-center lg:justify-start bg-slate-600 inline-block">
        <Logo />
      </div>
      <div
        className="w-[450px] h-[450px] left-[145px]  mt-[260px] mb-[314px] bg-[#d9d9d9] lg:block hidden  "
        id="hiddenDiv"
      ></div>
      <div className="lg:w-1/2 h-screen sm:justify-center lg:left-[736px] sm:mx-20 ">
        <div className="lg:top-[160px] lg:absolute">
          <Header linkAddress="/login" linkTitle="login" />
        </div>

        {/* header above login form */}
        <div className="h-[291px] top-[160px] absolute flex-col mx-5 justify-start items-start  inline-flex  mb-105  w-[360px] sm:w-[608px] md:[608px] lg:top-[312px] ">
          <TitlePage titlePage="Verify code" />
          <div className=" h-[460px] flex-col justify-start items-center  flex grow ">
            <div className="opacity-75 text-stone-700 text-base font-semibold font-QuicksandLight leading-normal mb-8 ">
              An authentication code has been sent to your email.
            </div>

            {/* Input fields for email and password */}

            <form
              className="w-full content-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full">
                <div className="w-full mb-4">
                  <label
                    className="text-[#153060]
                        text-sm
                        font-normal
                        font-QuicksandLight
                        leading-[17.50px]  h-[18px] rounded-sm flex-col justify-start items-start  flex  "
                  >
                    Enter code
                  </label>
                  <input
                    {...register("verify")}
                    type="password"
                    placeholder="......"
                    className={`h-[42px] p-3 bg-stone-100 rounded-[5px]  border-2  border-stone-300 
                   justify-start items-center mb-4   w-full grow shrink basis-0 focus:outline-none hover:border-[#4C1595]  ${
                     errors ? "border-red-500 " : "border-stone-300"
                   }`}
                  />
                  {errors.verify && (
                    <p className="text-red-600 -mt-3 mb-3">
                      {errors.verify.message}
                    </p>
                  )}
                </div>
              </div>
             <p className="font-semibold font-Quicksand ">Dident Resive a code? <a href="#">Resend</a></p>
              <CustomButton buttonTitle="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
