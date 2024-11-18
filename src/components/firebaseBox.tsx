import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { GrApple } from "react-icons/gr";
const FireBaseBox = () => {
  const icons = [
    { id: 1, src: <BsFacebook className="text-blue-500"/> },
    { id: 2, src: <FcGoogle/> },
    { id: 3, src: <GrApple/> },
  ];
  return (
    <div className=" h-14 justify-start items-center gap-4 inline-flex w-[320px] sm:w-[608px] md:[608px] ">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="grow shrink basis-0 px-6 py-4 rounded border border-stone-400 flex-col justify-center items-center inline-flex"
        >
          <div className="w-6 h-6 relative text-2xl">
            {icon.src}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FireBaseBox;
