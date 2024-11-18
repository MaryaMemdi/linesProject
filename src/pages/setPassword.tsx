import TitlePage from "../components/titlePage";

import CustomButton from "../components/customButton";
import useFormValidation from "../hooks/useFormValidation";

const SetPassword = () => {
  const { register, handleSubmit, errors } =
    useFormValidation({
      password: "",
      confirmPassword: "",
    });
  const data = [
    {
      type: "password",
      label: "Create Password",
      placeholder: ".........",
    },
    {
      type: "confirmPassword",
      label: "Re-enter Password",
      placeholder: "........",
    },
    
  ];
  const onSubmit = ()=>{
    console.log('submited');
  }
  return (
    <div className="flex h-[802px] w-full sm:h-[1024px] lg:justify-around min-w-[360px] pb-[300px]  ">
      <div className="justify-center lg:justify-start bg-slate-600 inline-block">
        <img
          src="../../public/assets/images/logo.png"
          alt="logo"
          className="w-[120px] h-9 left-[20px] top-10 absolute justify-center md:justify-start"
        />
      </div>
      <div
        className="w-[450px] h-[450px] left-[145px]  mt-[260px] mb-[314px] bg-[#d9d9d9] lg:block hidden  "
        id="hiddenDiv"
      ></div>
      <div className="lg:w-1/2 h-screen sm:justify-center lg:left-[736px] sm:mx-20 ">
        {/* header above login form */}
        <div className="h-[291px] top-40 lg:top-[260px] absolute flex-col mx-5 justify-start items-start  inline-flex  mb-105  w-[360px] sm:w-[608px] md:[608px] ">
          <TitlePage titlePage="Set a password" />
          <div className=" h-[460px] flex-col justify-start items-center  flex grow ">
            <div className="opacity-75 text-stone-700 text-base font-semibold font-QuicksandLight leading-normal mb-8 ">
              Your previous password has been reseted. Please set a new password
              for your account.
            </div>

            {/* Input fields for email and password */}
            <form
              className="w-full content-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full">
                {data.map((item, index) => {
                  return (
                    <div className="w-full mb-4" key={index}>
                      <label
                        className="text-[#153060]
                    text-sm
                    font-normal
                    font-QuicksandLight
                    leading-[17.50px]  h-[18px] rounded-sm flex-col justify-start items-start  flex  "
                      >
                        {item.label}
                      </label>
                      <input
                        {...register(item.type)}
                        type={
                          item.type === "confirmPassword"
                            ? "password"
                            : item.type
                        }
                        placeholder={item.placeholder}
                        className={`h-[42px] p-3 bg-stone-100 rounded-[5px]  border-2  border-stone-300 
                   justify-start items-center mb-4   w-full grow shrink basis-0 focus:outline-none hover:border-[#4C1595] ${
                     errors && errors[item.type]
                       ? "border-red-500 "
                       : "border-stone-300"
                   }`}
                      />
                      {errors && errors[item.type] && (
                        <p className="text-red-600 -mt-3 mb-3">
                          {errors[item.type]?.message}
                        </p>
                      )}
                    </div>
                  );
                })}

                <CustomButton buttonTitle="Set password" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
