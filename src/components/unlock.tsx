const Unlock = () => {
  const cards = [
    {
      title: "Find Stories That Speak to You",
      subTitle:
        "Browse through a wide range of genres and themes to discover stories that resonate with your interests and emotions.",
    },
    {
      title: "Become Part of a Vibrant Community",
      subTitle:
        "Connect with fellow writers and readers, and build meaningful relationships within our supportive community.",
    },
    {
      title: " Share Your Stories and Get Noticed",
      subTitle:
        "Publish your stories and gain recognition from our growing audience, engage in discussions to improve your writing skills.",
    },
  ];
  return (
    <div className="w-80 md:w-[704px] md:h-[566px] lg:w-full h-[562px] lg:h-[613px] flex-col  flex mx-auto items-center">
      {/* text part */}
      <div className="h-[152px] flex-col justify-start items-center gap-4 flex mb-[99px] md:w-[704px] md:h-[182px]">
        {/* more featurs */}
        <div className="h-[22px] px-2 py-0.5 bg-[#ede8ff] rounded-[36px] shadow justify-center items-center gap-0.5 inline-flex">
          <div className="text-[#4c1595] text-xs font-semibold font-Quicksand leading-[15px]">
            More Features
          </div>
        </div>
        <h2 className="self-stretch text-center text-stone-800 text-2xl md:text-3xl font-bold font-Quicksand leading-[37.50px]">
          Unlock Your Imagination with Our Stories
        </h2>
        <p className="self-stretch text-center text-stone-800 text-base md:text-xl font-normal font-Quicksand leading-[30px] grow ">
          At "lines", we believe in the power of storytelling. Find captivating
          stories written by talented authors and unleash your creativity by
          sharing your own.
        </p>
      </div>
      {/* card part */}
      <div className="h-[400px]">
        <div className="w-80 md:w-[704px] h-[450px] lg:w-[1220px]  self-stretch justify-around items-center gap-4 md:gap-6 inline-flex overflow-x-scroll lg:overflow-hidden  mt-0">
          {cards.map((card) => {
            return (
              <div className="w-[320px] h-[241px] md:w-[336px] md:h-[285px] px-6 pb-8 rounded-xl border border-[#ddd4ff] flex-col justify-start items-center  inline-flex ">
                <div className="w-[180px] h-[180px] relative bg-[#ede8ff] rounded-xl -mt-[67px] mb-[1px] md:mb-[6px] "></div>
                <h3 className="w-[288px] h-[60px] md:w-[304px] md:h-[72px] text-center text-stone-800 text-xl md:text-2xl font-semibold font-Quicksand leading-9 ">
                  {card.title}
                </h3>
                <p className="w-[288px] h-[54px] md:w-[304px] md:h-[96px] text-center text-stone-800 text-sm md:text-base font-normal font-Quicksand leading-[17.50px]">
                  {card.subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Unlock;
