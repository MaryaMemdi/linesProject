import BannerSlider from "../components/explore/bannerSlider";

import PopularStories from "../components/explore/popularStories";
import PopularWriters from "../components/explore/popularWriters";
import TopStories from "../components/explore/topStories";



const Explore = () => {
  
  return (
    <div className="lg:w-[1280px] md:w-[768px] w-[360px] justify-center mx-auto  min-w-80 mt-12 md:14 lg:mt-[200px]  ">
      <div className="h-[45px] justify-start items-center gap-3 inline-flex  mb-12">
        <h2 className="text-stone-800 text-2xl md:text-3xl lg:text-4xl font-semibold font-Quicksand leading-[45px]  ml-[10px] md:ml-8 lg:ml-0">
          Explorer
        </h2>
        <img src="assets/images/exploreIcons/Line 2.svg" />
      </div>
      {/* banner */}
      <BannerSlider />
      {/* top Stories section */}
      <div className="flex flex-col  gap-14">
        <TopStories />
        {/* popular stories section */}
        <PopularStories />
      {/* popular writers section */}
      <PopularWriters/>
      </div>
    </div>
  );
};
export default Explore;
