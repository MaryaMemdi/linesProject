import { PiPlusBold } from "react-icons/pi";
import pic1 from "../../../public/assets/images/writerProfile/pic1.png";
import pic2 from "../../../public/assets/images/writerProfile/pic2.png";
import pic3 from "../../../public/assets/images/writerProfile/Sakshi.png";
import React from "react";
import { FollowersModalProps } from "../../types/writerProfileTypes";
const FollowersModal:React.FC<FollowersModalProps> = ({setShowFollowers}) => {
  const followers = [
    { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
    { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
    { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: true },
    { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
    { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
    { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
    { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic1, writer: true },
    { name: "Imogen Alice", email: "@Imogen742", img: pic2, writer: false },
    { name: "Imogen Alice", email: "@Imogen742", img: pic3, writer: false },
  ];
 
  return (
    <div className="w-80 md:w-[28.125rem] h-[30.38rem] lg:w-[34.5rem] lg:h-[486px] relative bg-white rounded-xl mx-auto justify-center  ">
      
        <button
          className="h-6 flex justify-end pr-4 items-center mt-4  w-full"
          onClick={() => setShowFollowers(false)}
        >
          <img src="/assets/images/x.png" />
        </button>
        <div className=" text-[#4c1595] text-2xl font-semibold font-Quicksand flex leading-9 whitespace-nowrap justify-center mx-auto mb-4 ">
          1,787 Followers
        </div>
     
      <div className="w-full lg:w-[520px] h-[394px] m-2  flex-col justify-start items-start gap-2 inline-flex overflow-y-scroll">
        <div className="w-full h-[378px] flex-col justify-start items-end gap-4 flex grow">
          {followers.map((follower) => {
            return (
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="justify-start items-start gap-2 flex">
                  <img
                    className="w-12 h-12 relative rounded-[123.43px]"
                    src={follower.img}
                  />
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="justify-start items-center gap-1 inline-flex">
                      <div className="text-stone-800 text-base font-normal font-['Quicksand'] leading-normal whitespace-nowrap">
                        {follower.name}
                      </div>
                      <div
                        className={` ${
                          follower.writer ? "block" : "hidden"
                        } w-1 h-1 bg-stone-200 rounded-full`}
                      ></div>
                      <div
                        className={`${
                          follower.writer ? "block" : "hidden"
                        } text-stone-400 text-xs font-normal font-['Quicksand'] leading-[15px] `}
                      >
                        writer
                      </div>
                    </div>
                    <div className="self-stretch text-stone-400 text-xs font-normal font-['Quicksand'] leading-[15px]">
                      {follower.email}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-1.5 rounded-lg border border-[#4c1595] justify-center items-center gap-1 flex text-[#4c1595] text-base font-semibold font-['Quicksand'] leading-normal">
                  <PiPlusBold />
                  <p>Follow</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FollowersModal;
