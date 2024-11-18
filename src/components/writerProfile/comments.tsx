import { FiHeart } from "react-icons/fi";
import TitleParts from "./titleParts";
import { HiOutlineArrowUp } from "react-icons/hi";
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import { GoChevronDown } from "react-icons/go";

const Comments = () => {
  return (
    <div className="w-full h-[880px] relative bg-white rounded-xl p-4 flex flex-col ">
      {/* title */}

      <TitleParts title="Comments" />
      {/* input box */}
      <div className="w-full h-[119px] p-3 mt-6  bg-white rounded-[5px] border-2 border-stone-300 justify-start items-start gap-2.5 inline-flex">
        <p className="grow shrink basis-0 text-[#828282] text-sm font-semibold font-QuicksandLight leading-[17.50px]">
          Write your opinion
        </p>
        <button className="w-8 h-8 p-1 bg-[#ede8ff] text-[#4C1595] rounded-lg justify-center items-center flex">
          <HiOutlineArrowUp />
        </button>
      </div>
      {/* comments box */}
      <div className="h-[40rem]  mt-10 gap-10  overflow-hidden">
        <div className="h-48 px-3.5 py-4 bg-white rounded-xl border border-stone-100 flex-col justify-start items-start gap-2 flex  ">
          <div className="self-stretch justify-between items-center flex ">
            {/* name data pic */}
            <div className="justify-start items-center gap-4 flex ">
              <div className="w-12 flex-col justify-start items-start gap-[5.49px] inline-flex">
                <img
                  className="h-12 relative rounded-[82.29px]"
                  src="assets/images/writerProfile/Sakshi.png"
                />
              </div>
              <div className="flex-col justify-center items-start  flex text-stone-900 text-sm font-semibold font-Quicksand leading-[17.50px] gap-2">
                <p>Sakshi Chawla</p>
                <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
                  20 August 2024
                </p>
              </div>
            </div>
            {/* icons box */}
            <div className="justify-start items-center gap-4 flex">
              <div className="justify-start items-center gap-1 flex text-stone-500 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
                <FiHeart />

                <p>10</p>

                <PiDotsThreeOutlineBold />
              </div>
            </div>
          </div>
          {/* text box */}
          <div className=" h-[77px]  flex-col justify-start items-end gap-2   text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]  overflow-hidden text-ellipsis  line-clamp-3">
            <p>
              This story beautifully captures the essence of human resilience in
              the face of adversity. The protagonist's journey from despair to
              hope is both heart-wrenching and inspiring, making it impossible
              not to root for them every step of the way. The vivid descriptions
              painted throughout the narrative truly bring the setting to life,
              immersing the reader in a world filled with both darkness and
              light. The plot twists kept me on the edge of my seat, constantly
              guessing what would happen next. The supporting characters were
              equally well-developed, each adding depth and complexity to the
              overall story. Overall, this piece is a poignant reminder that
              even in our darkest moments, there is always a glimmer of hope
              waiting to be discovered.
            </p>
          </div>
          <div className="flex w-full  items-end justify-end">
            <p className="text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px]">
              Read more
            </p>
          </div>
          <div className="pt-px justify-start items-center gap-3 inline-flex">
            <div className="justify-center items-center flex">
              <div className="text-[#8e53ff] text-sm font-semibold font-Quicksand leading-[17.50px]">
                Reply
              </div>
            </div>
            <div className="w-[16.55px] h-[0px]  -rotate-90 border border-stone-300"></div>
            <div className="justify-start items-center gap-2 flex text-center text-stone-400 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
              <p>2 replies</p>
              <GoChevronDown />
            </div>
          </div>
        </div>
        {/* reply card */}
        <div className="h-48 px-3.5 py-4 bg-white rounded-xl border border-stone-100 flex-col justify-start items-start gap-2 flex mt-4 ml-12 self-stretch">
          <div className="self-stretch justify-between items-center flex ">
            {/* name data pic */}
            <div className="justify-start items-center gap-4 flex ">
              <div className="w-12 flex-col justify-start items-start gap-[5.49px] inline-flex">
                <img
                  className="h-12 relative rounded-[82.29px]"
                  src="assets/images/exploreIcons/profile pic.png"
                />
              </div>
              <div className="flex-col justify-center items-start  flex text-stone-900 text-sm font-semibold font-Quicksand leading-[17.50px] gap-2">
                <div className="inline-flex gap-2">
                  <p>Matt Caulfield</p>
                  <div className="h-[22px] px-2 py-0.5 bg-[#ede8ff] rounded-[36px] shadow justify-center items-center gap-0.5 inline-flex">
                    <p className="text-[#4c1595] text-xs font-normal font-Quicksand leading-[15px]">
                      Writer
                    </p>
                  </div>
                </div>
                <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
                  20 August 2024
                </p>
              </div>
            </div>
            {/* icons box */}
            <div className="justify-start items-center gap-4 flex">
              <div className="justify-start items-center gap-1 flex text-stone-500 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
                <FiHeart />

                <p>0</p>

                <PiDotsThreeOutlineBold />
              </div>
            </div>
          </div>
          {/* text box */}
          <div className=" h-[77px]  flex-col justify-start items-end gap-2   text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]  overflow-hidden text-ellipsis  line-clamp-3">
            <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
              @Sakshi Chawla
            </p>
            <p>
              What a gripping tale! The way the author built up the tension
              throughout the story kept me on the edge of my seat. The
              unexpected plot twist towards the end left me speechless and
              pondering over the characters' motives long after I finished
              reading.
            </p>
          </div>
          <div className="flex w-full  items-end justify-end">
            <p className="text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px]">
              Read more
            </p>
          </div>
          <div className="pt-px justify-start items-center gap-3 inline-flex">
            <div className="justify-center items-center flex">
              <div className="text-[#8e53ff] text-sm font-semibold font-Quicksand leading-[17.50px]">
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reply2 */}
        <div className="h-[13.2rem] px-3.5 py-4 bg-white rounded-xl border border-stone-100 flex-col justify-start items-start gap-2 flex  ">
          <div className="self-stretch justify-between items-center flex ">
            {/* name data pic */}
            <div className="justify-start items-center gap-4 flex ">
              <div className="w-12 flex-col justify-start items-start gap-[5.49px] inline-flex">
                <img
                  className="h-12 relative rounded-[82.29px]"
                  src="assets/images/writerProfile/frank.png"
                />
              </div>
              <div className="flex-col justify-center items-start  flex text-stone-900 text-sm font-semibold font-Quicksand leading-[17.50px] gap-2">
                <p>Frank Pinti</p>
                <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
                  20 August 2024
                </p>
              </div>
            </div>
            {/* icons box */}
            <div className="justify-start items-center gap-4 flex">
              <div className="justify-start items-center gap-1 flex text-stone-500 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
                <FiHeart />

                <p>0</p>

                <PiDotsThreeOutlineBold />
              </div>
            </div>
          </div>
          {/* text box */}
          <div className=" h-auto  flex-col justify-start items-end gap-2   text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]  overflow-hidden text-ellipsis  line-clamp-4">
          <p className="self-stretch text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
              @Sakshi Chawla
            </p>
            <p>
            I was completely drawn into the world created by this story. The vivid descriptions painted such a clear picture in my mind that I felt like I was right there alongside the protagonist, experiencing every emotion and challenge they faced. The themes of resilience and hope resonated with me deeply, making this narrative truly unforgettable.
            </p>
          </div>
          <div className="flex w-full  items-end justify-end">
            <p className="text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px]">
              Read more
            </p>
          </div>
          <div className="pt-px justify-start items-center gap-3 inline-flex">
            <div className="justify-center items-center flex">
              <div className="text-[#8e53ff] text-sm font-semibold font-Quicksand leading-[17.50px]">
                Reply
              </div>
            </div>
            
          </div>
        </div>
      
    </div>
  );
};
export default Comments;
