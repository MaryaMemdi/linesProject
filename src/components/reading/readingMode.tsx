import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import {
  TbLetterCase,
  TbPaint,
  TbPlus,
  TbMinus,
  TbAlignCenter,
  TbAlignRight,
  TbAlignLeft,
} from "react-icons/tb";
import { ReadingModeProps } from "../../types/readingPageTypes";
import { Link } from "react-router-dom";


const ReadingMode: React.FC<ReadingModeProps> = ({
 
}) => {
  //it use to show subFrame for text style
  const [showModal, setShowModal] = useState(false);
  const[darkMode,setDarkMode] = useState(false)
  //this code use for styling the text
  const [textSize, setTextSize] = useState<number>(16);
  const [lineSpacing, setLineSpacing] = useState<number>(16);
  const [textAlignment, setTextAlignment] = useState("text-left");
  const handleIncreasesize = (prevSize: number) => {
    return Math.min(prevSize + 2, 32);
  };
  const handleDecreasesize = (prevSize: number) => {
    return Math.max(prevSize - 2, 12);
  };
  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      document.body.classList.toggle("dark", newDarkMode);
      return newDarkMode;
    });
  };
  return (
    <div className={`w-[360px] md:w-[768px] lg:w-[1440px] h-auto  justify-center  flex flex-col m-auto ${
      darkMode ? "dark" : ""
    }`}>
      {/* Modal part */}
      <div className="inline-flex mt-[4rem] ">
        <div className="py-6  px-4 h-[170px]  rounded-lg border border-stone-600 flex-col justify-start items-center gap-6 mx-2.5  inline-flex dark:text-white  text-2xl  ">
          <Link to='/reading'
            
            className="h-6  justify-start items-center inline-flex"
          >
            <RxCross2 />
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className="h-6  justify-start items-center inline-flex"
          >
            <TbLetterCase />
          </button>
          <button
            className="h-6  justify-start items-center inline-flex"
            onClick={ handleDarkMode}
          >
            <TbPaint />
          </button>
        </div>
        {/* subFrame for handle text style */}
        <div
          onMouseLeave={() => setShowModal(false)}
          className={`w-[315px] h-[172px] p-4  rounded-lg border bg-white dark:bg-stone-800 border-stone-600  justify-center flex flex-col items-center gap-4 left-[20px] lg:left-[315px] top-[160px] absolute z-30 dark:text-white ${
            showModal ? "block" : "hidden"
          } `}
        >
          <div className="flex justify-between  w-full ">
            <p>Text size</p>
            <div className="inline-flex font-QuicksandLight text-base leading-[18px] gap-3 my-auto">
              <button onClick={() => setTextSize(handleDecreasesize(textSize))}>
                <TbMinus />
              </button>

              <p>{textSize}px</p>
              <button onClick={() => setTextSize(handleIncreasesize(textSize))}>
                <TbPlus />
              </button>
            </div>
          </div>
          <div className="flex justify-between  w-full">
            <p>Line Spacing</p>
            <div className="inline-flex font-QuicksandLight text-base leading-[18px] gap-3 my-auto">
              <button
                onClick={() => setLineSpacing(handleDecreasesize(lineSpacing))}
              >
                <TbMinus />
              </button>
              <p>{lineSpacing}px</p>
              <button
                onClick={() => setLineSpacing(handleIncreasesize(lineSpacing))}
              >
                <TbPlus />
              </button>
            </div>
          </div>
          <div className="flex justify-between  w-full">
            <p>Text alignment</p>
            <div className="inline-flex font-QuicksandLight text-xl leading-[18px] gap-3 my-auto">
              <TbAlignLeft onClick={() => setTextAlignment("text-left")} />
              <TbAlignCenter onClick={() => setTextAlignment("text-center")} />
              <TbAlignRight onClick={() => setTextAlignment("text-right")} />
            </div>
          </div>
        </div>
        {/* story title */}
        <div className="flex-col p-3">
          <div className="=flex flex-col justify-center items-start gap-4 h-auto text-slate-800 dark:text-stone-50 text-2xl font-semibold font-Quicksand leading-9  whitespace-nowrap">
            <h3>Chapter 1</h3>
            <h3>The Beginning</h3>
          </div>

          {/* text box */}
          <div
            className={`w-full  flex-col  items-start gap-6 inline-flex self-stretch  dark:text-stone-50 text-[${textSize}px] font-semibold font-QuicksandLight leading-[${lineSpacing}px] ${textAlignment}`}
          >
            <div className="w-[216px] h-[0px] border-4 border-[#8e53ff] justify-end"></div>
            <p>
              I push through the terrain as fast as my paws will carry me.
              Leaves and bushes shake as I whiz past their stationary form.
              Critters cower in fear as I run faster, moving like a ddsd
            </p>
            <p>
              I push through the terrain as fast as my paws will carry me.
              Leaves and bushes shake as I whiz past their stationary form.
              Critters cower in fear as I run faster, moving like a{" "}
            </p>
            <p>
              Stooping low, I trailed a crimson red fingertip across the smooth
              contours of his chiseled jaw. His chestnut hair hung over his
              still damp forehead. Only moments before, perspiration had beaded
              profusely on his skin as he clutched the cherry oak tabletop.
              Right before his fingers clawed wildly at his throat in an attempt
              to allow airflow into his burning lungs.
            </p>
            <p>
              With a thud, Noah had hit the gleaming wood, white foam trickling
              from his blue lips. I exhaled again at the mess he had left me to
              clean up. Red wine slowly seeped across the freshly polished
              floor; shards of glass sprinkled throughout.
            </p>
            <p>
              With a thud, Noah had hit the gleaming wood, white foam trickling
              from his blue lips. I exhaled again at the mess he had left me to
              clean up. Red wine slowly seeped across the freshly polished
              floor; shards of glass sprinkled throughout.
            </p>
            <p>
              I push through the terrain as fast as my paws will carry me.
              Leaves and bushes shake as I whiz past their stationary form.
              Critters cower in fear as I run faster, moving like a ddsd
            </p>
            <p>
              Stooping low, I trailed a crimson red fingertip across the smooth
              contours of his chiseled jaw. His chestnut hair hung over his
              still damp forehead. Only moments before, perspiration had beaded
              profusely on his skin as he clutched the cherry oak tabletop.
              Right before his fingers clawed wildly at his throat in an attempt
              to allow airflow into his burning lungs.
            </p>
            <p>
              With a thud, Noah had hit the gleaming wood, white foam trickling
              from his blue lips. I exhaled again at the mess he had left me to
              clean up. Red wine slowly seeped across the freshly polished
              floor; shards of glass sprinkled throughout.
            </p>
            <p>
              I push through the terrain as fast as my paws will carry me.
              Leaves and bushes shake as I whiz past their stationary form.
              Critters cower in fear as I run faster, moving like a ddsd
            </p>
            <p>
              With a thud, Noah had hit the gleaming wood, white foam trickling
              from his blue lips. I exhaled again at the mess he had left me to
              clean up. Red wine slowly seeped across the freshly polished
              floor; shards of glass sprinkled throughout.
            </p>
            <p>
              I push through the terrain as fast as my paws will carry me.
              Leaves and bushes shake as I whiz past their stationary form.
              Critters cower in fear as I run faster, moving like a ddsd
            </p>
            <p>
              Stooping low, I trailed a crimson red fingertip across the smooth
              contours of his chiseled jaw. His chestnut hair hung over his
              still damp forehead. Only moments before, perspiration had beaded
              profusely on his skin as he clutched the cherry oak tabletop.
              Right before his fingers clawed wildly at his throat in an attempt
              to allow airflow into his burning lungs.
            </p>
            <p>
              With a thud, Noah had hit the gleaming wood, white foam trickling
              from his blue lips. I exhaled again at the mess he had left me to
              clean up. Red wine slowly seeped across the freshly polished
              floor; shards of glass sprinkled throughout.
            </p>
            <p>
              I push through the terrain as fast as my paws will carry me.
              Leaves and bushes shake as I whiz past their stationary form.
              Critters cower in fear as I run faster, moving like a ddsd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReadingMode;
