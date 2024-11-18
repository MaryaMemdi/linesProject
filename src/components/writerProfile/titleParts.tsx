import line from '/assets/images/exploreIcons/Line 2.svg';
import { TitlePartsProps } from '../../types/writerProfileTypes';
const TitleParts:React.FC<TitlePartsProps> = ({title}) => {
  return (
    <div className="self-stretch justify-start items-center gap-3 inline-flex">
      <div className="text-stone-800 text-2xl font-semibold font-['Quicksand'] leading-9 inline-flex gap-3 whitespace-nowrap">
        <h3>{title}</h3>
        <img src={line} className="w-[3.75rem]" />
      </div>
    </div>
  );
};
export default TitleParts;
