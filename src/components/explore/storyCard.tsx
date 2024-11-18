import cardImage from "../../../public/assets/images/exploreIcons/pic.png";
import { TbEye, TbStar, TbBookmark,TbFlame,TbInfoCircle} from "react-icons/tb";
import { GoChevronRight } from "react-icons/go";
const StoryCard = () => {
  return (
    <div className="bg-[#F5F2FF] p-5 rounded-lg">
      <div className="flex justify-center">
        <img
          src={cardImage}
          alt=""
          className="w-[16rem] h-[13rem] flex-shrink-0 rounded-[0.75rem] -mt-[3.25rem]"
        />
      </div>
      <div className="flex items-center mt-[1.2rem] justify-center">
        <div className="inline-flex items-center gap-1  w-[3.5rem] h-[1.125rem]">
          <TbStar className="text-yellow-400"/>
          <p className="inline-flex items-center gap-1 text-stone-800 text-sm font-bold font-QuicksandLight  leading-[17.50px]">
            4.5/5
          </p>
        </div>
        {/* bookmark icon */}
        <div className="inline-flex items-center ml-[11rem] text-stone-400 hover:text-[#4c1595] text-xl">
          <TbBookmark/>
        </div>
      </div>
      <p className="text-stone-800 font-Quicksand text-[1.25rem] font-semibold leading-custom mt-[0.6875rem] ml-[1.25rem] flex mb-[0.1875rem] gap-1">
        Story Title
        <span>
          <TbInfoCircle className="text-[#4c1595] opacity-55"/>
        </span>
      </p>
      <p className="text-[#292524] font-QuicksandLight text-sm font-bold leading-[1.09375rem] mb-[0.1875rem] ml-[1.25rem]">
        Author Name
      </p>
      <div className="flex items-center leading-[17.5px]  ">
        <div className="inline-flex  gap-1 text-stone-400  ">
          <TbEye/>
          <p className=" font-QuicksandLight font-bold text-stone-800 mr-4">
            1,257
          </p>
        </div>
        <div className=" flex gap-1">
          <TbFlame className="text-stone-400"/>
          <p className="text-stone-800 text-sm font-bold font-QuicksandLight  leading-[17.50px]">
            876
          </p>
        </div>
        {/* ReadMore */}
        <a href="#" className="flex items-center  ml-[3.36rem] mr-5">
          <p className="text-[#57534E] font-QuicksandLight text-xs font-semibold leading-[15px]  whitespace-nowrap ">
            Read More
          </p>
          <GoChevronRight className="text-stone-400 text-xl"/>
        </a>
      </div>
    </div>
  );
};
export default StoryCard;
