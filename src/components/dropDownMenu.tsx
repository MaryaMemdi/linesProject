import { Link } from "react-router-dom";
import { DropdownItemProps, DropdownProps } from "../types/homePageTypes";
import { useState } from "react";
// this is a custom drop down menu

// items list component
const DropdownItem: React.FC<DropdownItemProps> = ({
  title,
  link,
  subMenu,
  icon,
}) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleIconClick = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <div className={`flex flex-col ${showSubMenu ? "mb-4" : ""}`}>
      <div className=" justify-start items-center inline-flex relative">
        {link ?  <Link
          to={link}
          className="text-stone-800 text-base font-semibold font-QuicksandLight leading-normal flex"
        >
          {title}
        </Link> :<p
          
          className="text-stone-800 text-base font-semibold font-QuicksandLight leading-normal flex"
        >
          {title}
        </p>}
        
        {subMenu && (
          <div className="w-[18px] h-[18px] relative origin-top-left ">
            <img src={icon} onClick={handleIconClick} />
          </div>
        )}
      </div>
      {showSubMenu && subMenu && (
        <ul className="bg-none ">
          {subMenu.map((item) => (
            <li key={item.title} className="flex flex-col p-3 gap-1 m-4 hover:bg-stone-200 rounded-md">
              <div className="self-stretch h-[18px] flex-col justify-start items-start flex">
                <Link
                  to={item.link}
                  className="self-stretch text-stone-800 text-sm font-semibold font-QuicksandLight leading-[17.50px]"
                >
                  {item.title}
                </Link>
              </div>
              <div className="self-stretch h-9 flex-col justify-start items-start flex">
                <div className="self-stretch text-stone-800 text-sm font-normal font-QuicksandLight leading-[17.50px]">
                  {item.subTitle}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// inputs of item list menu

const Dropdown: React.FC<DropdownProps> = ({ inputs }) => {
  const items = [...inputs];

  return (
    <div className="flex flex-col justify-center items-start gap-4 ">
      {items.map((item) => (
        <DropdownItem {...item} />
      ))}
    </div>
  );
};

export default Dropdown;
