import { TbWritingSign } from "react-icons/tb";
import { IoBookOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { useState } from "react";

const QuestionModal = () => {
  const [clicked, setClicked] = useState(false);
  const selectBox = () => {
    setClicked(true);
  };
  return (
    <div className="w-full h-screen  bg-black/50 justify-center items-center flex  ">
      <div className="w-[880px] h-[645px]  bg-white rounded-3xl flex-col  items-center flex  ">
        <button className="w-full text-stone-300 items-end justify-end text-4xl flex   mt-8 mr-8">
          <RxCrossCircled />
        </button>
        <div className="flex-col justify-start items-center gap-8 inline-flex  mt-[3.5rem]">
          <div className="self-stretch text-center text-stone-800 text-3xl font-semibold font-Quicksand leading-[37.50px]">
            Are you a writer or just a reader?
          </div>
          <div className="self-stretch justify-start items-center gap-12 inline-flex">
            {/* writer */}
            <div
              onClick={() => selectBox()}
              className="w-[280px] p-6 bg-[#f5f2ff]  rounded-xl flex-col justify-start items-center gap-8 inline-flex hover:border-[#4C1595] hover:border-4"
            >
              <div className="w-[200px] h-[200px] bg-[#ddd4ff] rounded-lg flex-col justify-center items-center flex text-[180px] text-[#4C1595] ">
                <TbWritingSign />
              </div>
              <div className="self-stretch text-center text-stone-800 text-2xl font-semibold font-Quicksand leading-9">
                Writer
              </div>
            </div>
            {/* reader */}
            <div
              onClick={() => selectBox()}
              className="w-[280px] p-6 bg-[#f5f2ff] rounded-xl flex-col justify-start items-center gap-8 inline-flex hover:border-[#4C1595] hover:border-4"
            >
              <div className="w-[200px] h-[200px] bg-[#ddd4ff] rounded-lg flex-col justify-center items-center flex text-[#4C1595] text-[180px]">
                <IoBookOutline />
              </div>
              <div className="self-stretch text-center text-stone-800 text-2xl font-semibold font-Quicksand leading-9">
                Reader
              </div>
            </div>
          </div>
          {clicked ? (<div className="h-10 px-12 py-2 bg-[#4c1595] rounded-lg justify-center items-center gap-2 inline-flex">
            <div className="text-white text-base font-semibold font-QuicksandLight leading-normal">
              Let’s go
            </div>
            <div className=" text-xl text-[#A985FF]"><HiOutlineArrowSmallRight /></div>
          </div>) : (<div className="px-12 py-2 rounded-lg border border-[#4c1595] justify-center items-center gap-1 inline-flex">
            <div className="text-[#4c1595] text-base font-semibold font-Quicksand leading-normal">
              Skip for now
            </div>
            <HiOutlineArrowSmallRight />
          </div>)}
          
          
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
