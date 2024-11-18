import TitleParts from "./titleParts";
import readingMedal from "/assets/images/writerProfile/medal 3.png";
import followerMedal from "../../../public/assets/images/writerProfile/FollowersMedal.png";

const Achievement = () => {
  const achivementData = [
    { id: 0, number: 1 },
    { id: 1, number: 2 },
    { id: 2, number: 3 },
    { id: 3, number: 4 },
    { id: 4, number: 5 },
  ];
  

  return (
    <div className="w-[21.25rem] md:w-[44rem] lg:w-[58rem] md:h-[880px] relative bg-white rounded-xl p-4">
      {/* title */}
      <div className="gap-3">
        <TitleParts title="Achievement" />
        <div className=" text-stone-800 text-base font-semibold font-QuicksandLight leading-normal">
          <p>
            Celebrate your milestones on  
            <span className="text-stone-800 text-base font-semibold font-Quicksand leading-normal">
             Lines
            </span>
            ! This section showcases the badges, awards, and accomplishments
            you've earned throughout your journey. From publishing your first
            story to reaching follower milestones or being recognized for
            top-rated content, each achievement reflects your growth as a writer
            or reader within our vibrant community. Keep writing, exploring, and
            earning new accolades!
          </p>
        </div>
      </div>
      {/* reading */}
      <div className=" mt-14">
        <TitleParts title="Readings" />
        <div className="gap-8 mt-6">
          <div className="w-full h-[206px] flex-col justify-start items-start gap-6 inline-flex ">
            <div className="self-stretch justify-start items-center gap-8 inline-flex overflow-x-scroll md:overflow-x-hidden">
              {achivementData.map((item, index) => {
                return (
                  <div
                    className="w-[107px] flex-col justify-start items-center gap-3 inline-flex "
                    key={item.id}
                  >
                    <div className="self-stretch justify-start items-center gap-px inline-flex">
                      <div className="w-[107px] h-[107px] relative">
                        <img
                          className="w-[107px] h-[105px] left-0 top-[1px] absolute"
                          src={readingMedal}
                        />
                        <div className={`w-[107px] h-[107px] left-0 top-0 absolute bg-black/50 rounded-full ${index? '':'hidden'}`}></div>
                      </div>
                    </div>
                    <div
                      className={`${
                        index  ? "text-stone-400" : "text-stone-800"
                      } text-lg font-semibold font-['Quicksand'] leading-[27px]`}
                    >
                      {item.number}K Reads
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* followers */}
      <div className=" mt-10">
        <TitleParts title="Followers" />
        <div className="gap-8 mt-6">
          <div className="w-full h-[206px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch justify-start items-center gap-8 inline-flex overflow-x-scroll md:overflow-x-hidden">
              {achivementData.map((item, index) => {
                return (
                  <div
                    className="w-[107px] flex-col justify-start items-center gap-3 inline-flex "
                    key={item.id}
                  >
                    <div className="self-stretch justify-start items-center gap-px inline-flex">
                      <div className="w-[107px] h-[107px] relative">
                        <img
                          className="w-[107px] h-[105px] left-0 top-[1px] absolute"
                          src={followerMedal}
                        />
                        <div className={`w-[107px] h-[107px] left-0 top-0 absolute bg-black/50 rounded-full ${index? '':'hidden'}`}></div>
                      </div>
                    </div>
                    <div
                      className={`${
                        index  ? "text-stone-400" : "text-stone-800"
                      } text-lg font-semibold font-['Quicksand'] leading-[27px] whitespace-nowrap`}
                    >
                      {item.number}K Followers
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
