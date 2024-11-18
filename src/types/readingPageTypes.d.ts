export interface LinesModalProps {
    setShowLinesModal: (mode: boolean) => void;
}
export interface ReadingModeProps {
    setReadingMode?: (mode: boolean) => void;
    handleDarkMode?: () => void;
}
export interface RightClickModalProps {
    setShowLines: (mode: boolean) => void;
    highlightText: () => void;
}
export interface SideBarProps {
    setShowSideBar: (mode: boolean) => void;
}
