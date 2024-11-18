import { CardProps } from "../types/homePageTypes";
import { TbBook, TbBooks, TbBoom, TbWritingSign } from "react-icons/tb";

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="h-[180px] w-80 relative rounded-xl items-center justify-center flex flex-col mx-auto">
      <div className="w-16 h-16   bg-[#ede8ff] rounded-lg justify-center items-center mx-auto flex mb-8 ">
        <div className="w-9 h-9 relative text-3xl  flex justify-center m-auto items-center text-[#4C1595]  ">
          {icon}
        </div>
      </div>
      <h3 className="w-80 md:w-[360px]  text-center text-stone-800 text-xl md:text-2xl font-semibold font-Quicksand leading-9 mb-4">
        {title}
      </h3>
      <p className=" w-full md:w-[360px]  text-center text-stone-800 text-sm md:text-base font-normal font-Quicksand leading-normal">
        {description}
      </p>
    </div>
  );
};
const ExploreLanding = () => {
  // card data
  const cards = [
    {
      title: "Interactive Storytelling",
      description:
        "Engage with stories in a new way, where readers can explore different narrative paths and choose their preferred outcomes.",
      icon: <TbBooks />,
    },
    {
      title: "Writer’s Hub",
      description:
        "A dedicated space for writers to craft their stories, experiment with endings, and receive feedback from the community.",
      icon: <TbWritingSign/>,
    },
    {
      title: "Multiple Endings",
      description:
        "Read and write stories with various endings, allowing for unique and personalized experiences every time.",
      icon: <TbBoom/>,
    },
    {
      title: "Seamless Reading Experience",
      description:
        "A user-friendly interface designed for uninterrupted and immersive reading, whether you’re on your phone, tablet, or computer.",
      icon: <TbBook/>,
    },
  ];
  return (
    <div className=" w-80 h-1398 gap-8 md:w-[704px] md:h[1080px]  lg:w-[1280px] lg:h-[706px] flex-col justify-center items-center md:gap-10 lg:gap-[41px] flex  mx-auto ">
      <div className="h-[198px] w-[320px] md:w-[772px] md:h-[152px] flex-col justify-start lg:justify-center items-center gap-4 inline-flex">
        <div className="h-[22px] px-2 py-0.5 bg-[#ede8ff] rounded-[36px] shadow justify-center items-center gap-0.5 inline-flex">
          <div className="text-[#4c1595] text-xs font-semibold font-Quicksand leading-[15px]">
            FEATURES
          </div>
        </div>
        {/* title page */}
        <h3 className="self-stretch text-center text-stone-800 text-2xl md:text-3xl font-bold font-Quicksand leading-[37.50px] h-[72px] w-full">
          Explore Endless Story Possibilities
        </h3>
        <p className="text-center text-stone-800 text-base md:text-xl font-normal font-Quicksand leading-[30px]  h-[72px] w-full">
          With Lines, readers can explore multiple endings, and writers can
          craft diverse narratives—all in one creative space.
        </p>
      </div>
      <div className="self-stretch justify-start items-start gap-[55px] flex mx-4 flex-col lg:flex-row">
        {/* First pair of cards */}
        <div className="flex flex-col gap-14  md:flex-row lg:flex-col">
          <Card {...cards[0]} />
          <Card {...cards[1]} />
        </div>

        {/* div image */}
        <div
          className="w-80 h-80
        md:w-[350px] md:h-[400px] lg:w-[450px] lg:h-[513px] bg-[#ede8ff] rounded-xl flex-col mx-auto justify-center md:mt-10 lg:mt-0"
        />

        {/* Second pair of cards */}
        <div className="flex flex-col gap-14 md:flex-row lg:flex-col ">
          <Card {...cards[2]} />
          <Card {...cards[3]} />
        </div>
      </div>
    </div>
  );
};

export default ExploreLanding;
