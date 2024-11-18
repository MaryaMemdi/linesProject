import { useRef, useState } from "react";
import { TbThumbUp, TbThumbUpFilled } from "react-icons/tb";
import { Stepper, StepperRefAttributes } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { HiOutlineArrowUp } from "react-icons/hi2";

//this component is used for textPolling

const Survay = () => {
  const [liked, setLiked] = useState(false);
  const stepperRef = useRef<StepperRefAttributes>(null);
  const handleLikeClick = ()=>{
    setLiked(true);
    setTimeout(() => {
        stepperRef.current?.nextCallback()
        
    }, 1000); 
  }
  const [sendComment, setSendComment] = useState(false);
  return (
    <div className="w-[21.5rem] md:w-[43rem] lg:w-[48rem] p-4 h-[186px] flex flex-col justify-center items-center mx-auto border border-[#ddd4ff] rounded-xl dark:text-white  ">
      <Stepper ref={stepperRef}    unstyled={false} >
        <StepperPanel >
          <div className="w-[21.5rem] md:w-[43rem] lg:w-[48rem] justify-center flex-col m-auto flex items-center p-stepper-number-hidden   ">
            <h3 className="text-stone-800 text-xl font-semibold font-Quicksandleading-[30px] dark:text-white">
              Did you like it?
            </h3>
            <div className="h-6  items-center gap-6 inline-flex text-stone-800 text-base font-semibold font-QuicksandLight leading-normal dark:text-white">
              <p className="text-stone-800 dark:text-white  text-base font-semibold font-QuicksandLight leading-normal">
                give it a like
              </p>
              <div
                onClick={handleLikeClick}
                className={`h-6 justify-center items-center flex text-xl  hover:text-[#4c1595] ${
                  liked && "text-[#4c1595]"
                }`}
              >
                {liked ? <TbThumbUpFilled /> : <TbThumbUp />}
              </div>
            </div>
          </div>
        </StepperPanel>
        <StepperPanel header="" >
          <div className="w-[22.5rem] md:w-[43rem] lg:w-[48rem]  py-4 px-6">
            <div className="flex-col justify-start items-center gap-1 flex mb-4">
              <h5 className="text-stone-800 text-xl font-semibold font-Quicksand leading-[30px] dark:text-white">
                Thank you!
              </h5>
              <div className="justify-start items-center gap-6 inline-flex">
                <div className="text-stone-800 dark:text-white text-base font-semibold font-QuicksandLight leading-normal">
                  Do you have any suggestion? write it!
                </div>
              </div>
            </div>
            <div onClick={()=>setSendComment(true)} className=" h-20 p-3  rounded-[5px] border border-stone-300 justify-start items-start gap-2.5 inline-flex mx-auto w-full mb-4 ">
            {sendComment ?<input className="w-full h-[50px] text-2xl outline-none bg-white dark:bg-stone-800 dark:text-white" type="text" />: (
          <p className="grow shrink basis-0 text-[#828282] text-sm font-semibold font-QuicksandLight leading-[17.50px]">
           Write your opinion
        </p>
        ) }
              <button className="w-8 h-8 p-1 bg-[#ede8ff] rounded-lg justify-center items-center flex"
              onClick={()=>stepperRef.current?.nextCallback()}>
                <HiOutlineArrowUp  className="text-[#4c1595]"/>
              </button>
            </div>
          </div>
        </StepperPanel>
        <StepperPanel header=" ">
          <div className="justify-center flex-col m-auto flex items-center ">
            <h3 className="text-stone-800 text-xl font-semibold font-Quicksandleading-[30px] dark:text-white">
            Thank you for your feedback!
            </h3>
            <div className="h-6  items-center gap-6 inline-flex text-stone-800 text-base font-semibold font-QuicksandLight leading-normal">
              <p className="text-stone-800 dark:text-white text-base font-semibold font-QuicksandLight leading-normal">
              enjoy your reading! :
              </p>
              
            </div>
          </div>
        </StepperPanel>
      </Stepper>
    </div>
  );
};
export default Survay;


