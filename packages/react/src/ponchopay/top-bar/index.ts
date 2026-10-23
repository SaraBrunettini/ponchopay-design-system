import type {ComponentProps} from "react";

import {TopBarContent, TopBarEnd, TopBarRoot, TopBarStart, TopBarTitle} from "./top-bar";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const TopBar = Object.assign(TopBarRoot, {
  Content: TopBarContent,
  End: TopBarEnd,
  Root: TopBarRoot,
  Start: TopBarStart,
  Title: TopBarTitle,
});

export type TopBar = {
  Props: ComponentProps<typeof TopBarRoot>;
  RootProps: ComponentProps<typeof TopBarRoot>;
  StartProps: ComponentProps<typeof TopBarStart>;
  TitleProps: ComponentProps<typeof TopBarTitle>;
  ContentProps: ComponentProps<typeof TopBarContent>;
  EndProps: ComponentProps<typeof TopBarEnd>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {TopBarRoot, TopBarStart, TopBarTitle, TopBarContent, TopBarEnd};

export type {
  TopBarRootProps,
  TopBarRootProps as TopBarProps,
  TopBarStartProps,
  TopBarTitleProps,
  TopBarContentProps,
  TopBarEndProps,
} from "./top-bar";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {topBarVariants} from "@heroui/styles";

export type {TopBarVariants} from "@heroui/styles";
