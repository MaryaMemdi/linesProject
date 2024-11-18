import { FC } from "react";
import { TitlePageProps } from "../types/loginFormTypes";

const TitlePage: FC<TitlePageProps> = ({ titlePage }) => {
  return (
    <p className="text-[#4c1595] text-4xl  font-semibold font-Quicksand leading-[45px] md:mb-[32px]">
      {titlePage}
    </p>
  );
};
export default TitlePage;
