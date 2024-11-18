//this component use when on the text box rightClicked

import {
  TbBaselineDensitySmall,
  TbShare,
  TbQuote,
  TbBookmark,
  TbLink,
  TbBrandTelegram,
  TbBrandInstagram,
  TbBrandX,
} from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { useState } from "react";
import { motion } from 'framer-motion';
import { RightClickModalProps } from "../../types/readingPageTypes";


const RightClickModal: React.FC<RightClickModalProps> = ({ setShowLines, highlightText }) => {
  const [showShare, setShowShare] = useState(false);
 
  return (
    <div className="w-56 h-[168px] p-1 bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start flex text-stone-800 text-sm font-semibold font-Quicksand leading-[17.50px]">
      {/* show lines : two button between text */}
      <button
        onClick={() => setShowLines(true)}
        className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg"
      >
        <div className=" flex-col justify-start items-start inline-flex text-stone-400 hover:text-[#4c1595]">
          <TbBaselineDensitySmall />
        </div>
        <p>Show Lines</p>
      </button>
      {/* share */}
      <button
        onClick={() => setShowShare(true)}
        className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg"
      >
        <div className="justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595]">
          <TbShare />
        </div>
        <p>Share</p>
        <div className=" absolute left-20 top-10">

        {showShare && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className=" space-y-2 "
                >
                  <SubDropDown/>
                </motion.div>
              )}
        </div>
      </button>
      {/* highlight text */}
      <button onClick={highlightText} className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg">
        <div  className="justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595]">
          <TbQuote />
        </div>
        <p>Highlight</p>
      </button>
      <button className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex hover:text-lg">
        <div className="justify-start items-center gap-2 flex text-stone-400 hover:text-[#4c1595]">
          <TbBookmark />
        </div>
        <p>Save</p>
      </button>
    </div>
  );
};
export default RightClickModal;

//this component use on the share click
const SubDropDown = () => {
  const subDropDownData = [
    { id: 0, icon: <CiLinkedin />, title: "LinkedIn" },
    { id: 1, icon: <TbBrandX />, title: "X" },
    { id: 2, icon: <TbBrandInstagram />, title: "Instagram" },
    { id: 3, icon: <TbBrandTelegram />, title: "Telegram" },
  ];
  return (
    <div className="w-56 h-[217px] p-1 bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start gap-1 inline-flex">
      <div className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex">
        <div className="justify-start items-center gap-2 flex">
          <TbLink />
        </div>
        <div className="text-stone-800 text-sm font-semibold font-['Quicksand'] leading-[17.50px]">
          Copy Link
        </div>
      </div>
      <div className="w-[222px] h-px bg-zinc-200"></div>
      <div className="self-stretch h-40 flex-col justify-start items-start flex">
        {subDropDownData.map((item) => {
          return (
            <div
              className="self-stretch p-2 rounded-lg justify-start items-center gap-2 inline-flex"
              key={item.id}
            >
              <div className="justify-start items-center gap-2 flex text-stone-400">
                {item.icon}
              </div>
              <div className="text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
