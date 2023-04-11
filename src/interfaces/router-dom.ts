import { LazyExoticComponent } from "react";

export interface ActiveNavLink {
  isActive: boolean;
}

export type JSXComponent = () => JSX.Element
export interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}