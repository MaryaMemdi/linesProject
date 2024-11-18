import { Link } from "react-router-dom";
// this is first component in home page
const Welcome = () => {
  return (
    <div className=" flex w-80 h-auto  flex-col justify-center items-center mx-auto ">
      <div className="flex flex-col lg:flex-row">
        <div className="w-80 h-80 md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#ede8ff] rounded-xl mt-12 order-1 mb-8 lg:mt-[237px] lg:mr-20  flex relative lg:ml-[910px] mx-auto"></div>
        <div className="w-full  lg:ml-20 lg:w-[618px] md:w-[704px] md:h-64 flex-col justify-start items-start gap-8   lg:absolute lg:top-[315px] order-2  mx-auto">
          <div className="self-stretch h-[184px] flex-col justify-start items-start gap-2 flex">
            <p className="self-stretch text-stone-800 text-xl font-bold font-QuicksandLight leading-[30px]">
              Welcome to Lines
            </p>
            <h2 className="text-[#4c1595] text-4xl font-normal  font-Quicksand  leading-[48px] w-full">
              Read of Parallel Universes
            </h2>
            <p className="w-80 h-[150px] md:w-[543px] md:h-[90px] text-stone-800 text-xl font-bold font-QuicksandLight leading-[30px]">
              Every story spanning parallel worlds opens a gateway to endless
              possibilities, transforming narratives into a web of diverging
              paths and what ifs.
            </p>
          </div>
          <div className="px-12 py-2 bg-[#4c1595] rounded-lg justify-center items-center  lg:inline-flex mt-36 md:mt-8 w-[12.25rem] h-10 whitespace-nowrap">
            <Link
              to="/explore"
              className="text-white text-base font-semibold font-Quicksand leading-normal"
            >
              Explore Lines
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
