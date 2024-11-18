import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { PiDotsThreeOutlineBold } from "react-icons/pi";
import { TbHeart, TbHeartFilled,TbFlag3,TbShare } from "react-icons/tb";

//this component use for create comment 
const CustomComment = () => {
  //used when the heart icon is clicked
  const [liked, setLiked] = useState(false);
  //use when wants the more text comment read
  const [showMoreClicked, setShowMoreClicked] = useState(false);
  //used when wants a comment report or share
  const [hoverDots, setHoverDots] = useState(false);

  //this data use just for ui 
  const data = {
    id: 0,
    profile: "assets/images/writerProfile/Sakshi.png",
    name: "Sakshi Chawla",
    date: "20 August 2024",
    like: 10,
    comment:
      "This story beautifully captures the essence of human resilience in the face of adversity. The protagonist's journey from despair to hope is both heart-wrenching andinspiring, making it impossible not to root for them every step of the way. The vivid descriptions painted throughout the narrative truly bring the setting to life, immersing the reader in a world filled with both darkness and light. The plot twists kept me on the edge of my seat, constantly guessing what would happen next. The supporting characters were equally well-developed, each adding depth and complexity to the overall story. Overall, this piece is a poignant reminder that even in our darkest moments, there is always a glimmer of hope waiting to be discovered.",
    reply: 2,
  };

  return (
    <div className="h-auto px-3.5 py-4 rounded-xl border border-stone-100 dark:border-stone-800 flex-col justify-start items-start gap-2 flex  ">
      <div className="self-stretch justify-between items-center flex ">
        {/* name data pic */}
        <div className="justify-start items-center gap-4 flex ">
          <div className="w-12 flex-col justify-start items-start gap-[5.49px] inline-flex">
            <img
              className="h-12 relative rounded-[82.29px]"
              src={data.profile}
            />
          </div>
          <div className="flex-col justify-center items-start  flex text-stone-900 dark:text-white text-sm font-semibold font-Quicksand leading-[17.50px] gap-2">
            <p>{data.name}</p>
            <p className="text-stone-400 text-xs font-semibold font-QuicksandLight leading-[15px]">
              {data.date}
            </p>
          </div>
        </div>
        {/* icons box */}
        <div className="justify-start items-center gap-4 flex">
          <div className="justify-start items-center gap-1 flex text-stone-500 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
            <button
              onClick={() => setLiked(!liked)}
              className={`${
                liked ? "text-[#4c1595]" : ""
              } hover:text-[#4c1595]`}
            >
              {liked ? <TbHeartFilled /> : <TbHeart />}
            </button>

            <p>{liked ? data.like + 1 : data.like}</p>

            <button onClick={()=> setHoverDots(true)} className="hover:text-[#4c1595]">
              <PiDotsThreeOutlineBold />
            </button>
            {/* report and share comments  */}
            {hoverDots && (
            <div onMouseLeave={()=> setTimeout(()=>{
              setHoverDots(false)
            },2000)} className="w-56 h-[88px] p-1 nded-lg shadow border border-zinc-200 flex-col justify-start items-start inline-flex absolute right-0 z-30 bg-white dark:bg-stone-800 ">
              <div className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex ">
                <div className="justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595] text-xl hover:text-2xl ">
                  <TbShare/>
                </div>
                <p className="text-stone-800 dark:text-white text-sm font-semibold font-Quicksand leading-[17.50px] ">
                  Share
                </p>
              </div>
              <div className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex">
                <div className="justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595] text-xl hover:text-2xl">
                  <TbFlag3/>
                </div>
                <div className="text-stone-800 dark:text-white text-sm font-semibold font-Quicksand leading-[17.50px]">
                  Report
                </div>
              </div>
            </div>
            
            )}
          </div>
        </div>
      </div>
      {/* text box */}
      <div
        className={`flex-col justify-start items-end gap-2   text-stone-800 dark:text-white text-sm font-semibold font-QuicksandLight leading-[17.50px]    ${
          showMoreClicked
            ? "overflow-visible h-auto"
            : "overflow-hidden text-ellipsis  line-clamp-3"
        } `}
      >
        <p>{data.comment}</p>
      </div>
      {/* show more comment */}
      <button
        onClick={() => setShowMoreClicked(!showMoreClicked)}
        className="flex w-full  items-end justify-end"
      >
        <p className="text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px]">
          {showMoreClicked ? "Show less" : "Read more"}
        </p>
      </button>
      <div className="pt-px justify-start items-center gap-3 inline-flex">
        <div className="justify-center items-center flex">
          <div className="text-[#8e53ff] text-sm font-semibold font-Quicksand leading-[17.50px]">
            Reply
          </div>
        </div>
        <div className="w-[16.55px] h-[0px]  -rotate-90 border border-stone-300"></div>
        <div
          className={` ${
            data.reply ? "block" : "hidden"
          } justify-start items-center gap-2 flex text-center text-stone-400 text-sm font-semibold font-QuicksandLight leading-[17.50px]`}
        >
          <p>{data.reply} replies</p>
          <GoChevronDown />
        </div>
      </div>
    </div>
  );
};

export default CustomComment;
