export interface BannerSliderProps {
    slide?: Slide[] | undefined;
}
export interface Slide {
    image: string;
    id: number;
}
export interface CardInformation {
    id: number;
    title: string;
    number: number;
}
export interface PopularWritersCardProps {
    email: string;
    userName: string;
    worksNumber: number;
    readingNumber: number;
    followersNumber: number;
}
export interface CustomTitleProps {
    title: string;
    swiper: any;
}
