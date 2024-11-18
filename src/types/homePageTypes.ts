import {  ReactNode } from "react";

export interface SubmenuItem {
  title: string;
  link: string;
  subTitle: string;
}
export interface DropdownItemProps {
  title: string;
  link?: string;
  subMenu?: SubmenuItem[];
  icon?: string;
}
export interface DropdownInput {
  title: string;
  link?: string;
  key?: string;
  subMenu?: SubmenuItem[];
  icon?: string;
}

export interface DropdownProps {
  inputs: DropdownInput[];
}

export interface CardProps {
  title: string;
  description: string;
  icon?: any;
}
// use in layout component
export interface LayoutProps{
  children: ReactNode
}