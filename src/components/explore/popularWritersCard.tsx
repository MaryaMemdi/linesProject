import profilePic from "/assets/images/exploreIcons/profile pic.png";
import plus from "/assets/images/exploreIcons/plus.svg";
import { GoChevronLeft } from "react-icons/go";
import {
  PopularWritersCardProps,
  CardInformation,
} from "../../types/explorePageTypes";

//this component use for making card for popularweriters part
const PopularWritersCard: React.FC<PopularWritersCardProps> = ({
  userName,
  email,
  worksNumber,
  readingNumber,
  followersNumber,
}) => {
  //this data is static just for make ui
  const cardInformation: CardInformation[] = [
    { id: 0, title: "Works", number: worksNumber },
    { id: 1, title: "Reading", number: readingNumber },
    { id: 2, title: "Followers", number: followersNumber },
  ];

  //this function use for changing format tausend and hundert number to K and M ex. 1000 to 1K
  const numberFormat = (num: number): string => {
    if (num < 1000000 && num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    }
    return num.toString();
  };
  return (
    <div className="w-[296px] h-[254px] relative bg-white rounded-xl shadow">
      {/* information box */}
      <div className=" flex-col  gap-6 flex  absolute right-8 mt-4 ">
        {cardInformation.map((card) => {
          return (
            <div
              className="flex-col justify-start items-center gap-1 flex "
              key={card.id}
            >
              <div className="text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]">
                {card.title}
              </div>
              <div className="text-center text-stone-800 text-sm font-normal font-Quicksand leading-[17.50px]">
                {numberFormat(card.number)}
              </div>
            </div>
          );
        })}
      </div>

      {/* more information */}
      <div className="items-center flex justify-end absolute right-2 bottom-4 ">
        <a
          href="#"
          className="text-[#c5b1ff] text-sm font-semibold font-Quicksand  inline-flex leading-[18px]"
        >
          See More
          <div className="w-6 h-6   rotate-180 leading-[17.5px]  text-2xl">
            <GoChevronLeft />
          </div>
        </a>
      </div>
      {/* profile and name */}
      <div className="left-[16px] top-[16px] absolute flex-col justify-start items-center  inline-flex">
        <img
          className="w-[120px] h-[120px] relative rounded-[200px] mb-2"
          src={profilePic}
        />
        <div className="h-12 flex-col justify-start items-center flex">
          <h4 className="self-stretch text-stone-800 text-xl font-semibold font-Quicksand leading-[30px]">
            {userName}
          </h4>
          <p className="text-stone-800 text-sm font-normal font-Quicksand leading-[17.50px]">
            {email}
          </p>
        </div>
      </div>
      <button className="w-[137px] px-4 py-1.5 left-[16px] top-[202px] absolute bg-[#4c1595] rounded-lg justify-center items-center gap-2 inline-flex ">
        <div className="w-6 h-6 relative">
          <img src={plus} />
        </div>
        <p className="text-[#f9f9f9] text-base font-semibold font-Quicksand leading-normal">
          Follow
        </p>
      </button>
    </div>
  );
};

export default PopularWritersCard;