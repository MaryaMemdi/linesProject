export interface ButtonProps {
    buttonTitle: string;
}
export interface ButtonSubTitleProps {
    buttonSubTitle: string;
    linkSubTitle: string;
    subTitle: string;
    className?: string;
    type: string;
    text: string;
    disabled?: boolean;
    isLoading?: boolean;
}
export interface HeaderProps {
    linkTitle: string;
    linkAddress: string;
}
export interface TitlePageProps {
    titlePage: string;
}
export interface CustomCheckBoxProps {
    textBox: string;
}
export interface CustomInputProps {
    name: string;
    placeholder: string;
    label: string;
    type?: string;
}
export interface validationProps {
    [key: string]: string;
}
export interface SplitterComponentProps {
    title: string;
}
export interface TableOfContentsProps {
    setShowContent?: (mode: boolean) => void;
}
