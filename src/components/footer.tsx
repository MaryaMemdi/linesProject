import { Link } from "react-router-dom";
import { TbBrandTelegram,TbBrandInstagram,TbBrandX  } from "react-icons/tb";

const quickLinksItems = [
  { id: 1, title: "Explore" },
  { id: 2, title: "Genres" },
  { id: 3, title: "Authors" },
  { id: 4, title: "Contact us" },
];
const siteMapItems = [
  { id: 1, title: "Signup" },
  { id: 2, title: "Login" },
  { id: 3, title: "About us" },
  { id: 4, title: "Help Center" },
];
const icons = [
  { id: 1, src: <TbBrandTelegram/>},
  { id: 2, src:<TbBrandInstagram/>},
  { id: 3, src:<TbBrandX/> },
];
const Footer = () => {
  return (
    <div className="min-w-80 w-[360px] h[571px] md:w-[768px] md:h-[348px] lg:w-[1280px] lg:h-[385px] flex-col justify-center flex mx-auto ">
      <div className="h-[453px] lg:h-[293px] relative bg-[#ede8ff] rounded-xl w-full flex-row dark:bg-stone-900 dark:text-white">
        <div className="w-[330px] h-[148px] md:w-[348px] gap-4 lg:w-[537px] lg:h-[150px] justify-start items-start lg:gap-6 flex-row lg:ml-10 mx-5 ">
          <img
            src="assets/images/logo.png"
            alt="logo"
            className="w-[120px] h-9   top-6 lg:top-10 absolute justify-center md:justify-start mb-6"
          />
          <p className=" text-stone-800 text-base lg:text-xl font-semibold font-QuicksandLight leading-[30px] lg:mt-[92px] mt-[76px] dark:text-white">
            Every story spanning parallel worlds opens a gateway to endless
            possibilities, transforming narratives into a web of diverging paths
            and what ifs.
          </p>

          {/* QuickLinks part */}
          <div className="h-[169px] left-5 top-[270px] lg:left-[999px] md:left-[496px] md:top-[32px] absolute flex-col justify-start items-start gap-3 inline-flex w-[110px]  dark:text-white">
            <h3 className="text-stone-800 w-full inline-flex text-lg font-semibold font-Quicksand leading-[27px] dark:text-white">
              Quick Links
            </h3>
            <div className="h-[130px] flex-col justify-start items-start gap-1.5 flex dark:text-white">
              {quickLinksItems.map((item) => {
                return (
                  <div
                    className="h-7 justify-center items-center inline-flex"
                    key={item.id}
                  >
                    <Link
                      to={`/${item.title}`}
                      className="text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px] dark:text-white"
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Site Map part */}
          <div className="h-[169px] right-5 top-[270px] lg:left-[1144px] md:top-[32px] absolute  flex-col justify-start items-start gap-3 inline-flex w-[110px]">
            <h3 className="text-stone-800 dark:text-whitetext-lg font-semibold font-Quicksand dark:text-white leading-[27px] ">
              Site Map
            </h3>
            <div className="h-[130px] flex-col justify-start items-start gap-1.5 flex">
              {siteMapItems.map((item) => {
                return (
                  <div
                    className="h-7 justify-center items-center inline-flex"
                    key={item.id}
                  >
                    <Link
                      to={`/${item.title}`}
                      className="text-stone-800 text-sm font-semibold font-QuicksandLight dark:text-white leading-[17.50px]"
                    >
                      {item.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          {/* icons part */}
          <div className="left-5 lg:left-[40px] top-[196px] lg:top-[234px] absolute justify-start items-center gap-4 inline-flex mt-6 mb-10 lg:mb-0 lg:mt-0">
            {icons.map((icon) => {
              return (
                <a
                href="#"
                  className=" justify-start items-center flex dark:text-white"
                  key={icon.id}
                >
                  {icon.src}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* footer text */}
      <div className=" w-[312px] h-[62px] p-6 md:w-[720px] lg:w-[1257px] justify-around  lg:py-8 md:justify-between items-start md:items-center  md:flex-row flex flex-col gap-4">
        <div className="h-7 md:justify-start justify-center mx-auto md:mx-0 items-center gap-3 md:inline-flex flex order-2  flex-col md:order-1 md:flex-row md:items-center leading-[15px]">
          <div className="justify-center items-center flex  order-2 md:order-1 whitespace-nowrap">
            <p className="text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px] ">
              Design by Fateme Ghafari
            </p>
          </div>
          <div className="w-1.5 h-1.5 bg-[#ddd4ff] rounded-full order-2 hidden md:inline-flex leading-[15px] "></div>
          <div className="text-center flex order-1 text-stone-500 text-xs font-semibold font-QuicksandLight leading-[15px] md:order-3 whitespace-nowrap">
            © 2024 Lines. All rights reserved.
          </div>
        </div>
        <div className="justify-between md:justify-center items-center  md:gap-6 flex order-1 w-full md:order-2 md:w-auto ">
          <div className="justify-center items-center flex">
            <Link to='/privacy'
             
              className="text-stone-500 text-sm font-normal font-QuicksandLight leading-[17.50px]"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="justify-center items-center flex">
            <Link to='/terms'
            
              className="text-stone-500 text-sm font-normal font-QuicksandLight leading-[17.50px]"
            >
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
