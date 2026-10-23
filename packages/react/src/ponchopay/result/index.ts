import type {ComponentProps} from "react";

import {ResultActions, ResultDescription, ResultIcon, ResultRoot, ResultTitle} from "./result";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Result = Object.assign(ResultRoot, {
  Actions: ResultActions,
  Description: ResultDescription,
  Icon: ResultIcon,
  Root: ResultRoot,
  Title: ResultTitle,
});

export type Result = {
  Props: ComponentProps<typeof ResultRoot>;
  RootProps: ComponentProps<typeof ResultRoot>;
  IconProps: ComponentProps<typeof ResultIcon>;
  TitleProps: ComponentProps<typeof ResultTitle>;
  DescriptionProps: ComponentProps<typeof ResultDescription>;
  ActionsProps: ComponentProps<typeof ResultActions>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {ResultRoot, ResultIcon, ResultTitle, ResultDescription, ResultActions};

export type {
  ResultRootProps,
  ResultRootProps as ResultProps,
  ResultIconProps,
  ResultTitleProps,
  ResultDescriptionProps,
  ResultActionsProps,
} from "./result";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {resultVariants} from "@heroui/styles";

export type {ResultVariants} from "@heroui/styles";
