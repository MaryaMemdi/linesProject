import { TbMessageCircle, TbEye, TbStar } from "react-icons/tb";
import { HiHashtag } from "react-icons/hi2";
import { GoChevronRight } from "react-icons/go";

const WriterStoryCard = () => {
  return (
    <div className="w-[298px] h-[319px] relative bg-white rounded-xl border border-stone-100 p-4">
      <div className="w-[140px] h-[140px] left-[79px] top-[16px] absolute bg-gradient-to-b from-black to-black rounded-xl">
        <img src="/assets/images/writerProfile/pic.png" />
      </div>
      <div className="px-1.5 py-1 left-[16px] top-[279px] absolute bg-[#f5f2ff] rounded-lg justify-center items-center gap-1 inline-flex">
        <div className="w-4 h-4 relative text-[#C5B1FF]">
          <HiHashtag />
        </div>
        <label className="text-stone-600 text-xs font-semibold font-QuicksandLight leading-[15px]">
          Thriller
        </label>
      </div>
      <a href="#" className="left-[183px] top-[279px] absolute justify-start items-center gap-1 inline-flex text-stone-400 text-sm font-semibold font-QuicksandLight leading-[19px]">
        <label>Read more</label>

        <GoChevronRight />
      </a>
      <div className="h-[91px] left-[16px] top-[172px] absolute flex-col justify-start items-start gap-1 inline-flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="text-stone-800 text-lg font-semibold font-Quicksand leading-[27px]">
            Story Title
          </div>
          <div className="justify-start items-center gap-1 flex text-stone-400 text-sm font-semibold font-QuicksandLight leading-[15px] ">
            <TbStar />

            <p>4.5/5</p>
          </div>
        </div>
        <div className=" w-[17rem]  text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]  overflow-hidden text-ellipsis  line-clamp-3">
          The aliens kill every human they catch, or in rare cases, put trackers
          on them to discover their hidden villages. When Natalie is caught in
          an ambush, she is unexpectedly they catch, or in rare cases, put{" "}
        </div>
      </div>
      <div className="left-[16px] top-[16px] absolute justify-start items-center gap-1 inline-flex text-stone-400 text-sm font-semibold font-QuicksandLight leading-[17.50px] ">
        <TbMessageCircle />

        <p>567</p>
      </div>
      <div className="left-[240px] top-[16px] absolute justify-start items-center gap-1 inline-flex text-stone-400  font-semibold font-QuicksandLight leading-[15px] text-sm ">
        <TbEye />
        <p>1.7k</p>
      </div>
    </div>
  );
};
export default WriterStoryCard;