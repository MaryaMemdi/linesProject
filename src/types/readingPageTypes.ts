//use in storyBox component
export interface LinesModalProps {
  setShowLinesModal: (mode: boolean) => void;
}
//use in readingMode component
export interface ReadingModeProps {
  setReadingMode?: (mode: boolean) => void;
  handleDarkMode?: () => void;
}
//use in rightClickModal component
export interface RightClickModalProps {
  setShowLines: (mode: boolean) => void;
  highlightText: ()=>void;
}
export interface SideBarProps {
  setShowSideBar: (mode: boolean) => void;
}
