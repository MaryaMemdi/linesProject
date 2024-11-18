import Logoimg from "../../public/assets/images/logo.png";
const Logo = () => {
  return (
    <img
      src={Logoimg}
      alt="logo"
      className="w-[120px] h-9 left-[20px] top-10 absolute justify-center md:justify-start"
    />
  );
};
export default Logo;
