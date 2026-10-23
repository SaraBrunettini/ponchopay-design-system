import type {ComponentProps} from "react";

import {
  PageHeaderActions,
  PageHeaderDescription,
  PageHeaderRoot,
  PageHeaderTitle,
  PageHeaderToolbar,
} from "./page-header";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const PageHeader = Object.assign(PageHeaderRoot, {
  Actions: PageHeaderActions,
  Description: PageHeaderDescription,
  Root: PageHeaderRoot,
  Title: PageHeaderTitle,
  Toolbar: PageHeaderToolbar,
});

export type PageHeader = {
  Props: ComponentProps<typeof PageHeaderRoot>;
  RootProps: ComponentProps<typeof PageHeaderRoot>;
  ToolbarProps: ComponentProps<typeof PageHeaderToolbar>;
  ActionsProps: ComponentProps<typeof PageHeaderActions>;
  TitleProps: ComponentProps<typeof PageHeaderTitle>;
  DescriptionProps: ComponentProps<typeof PageHeaderDescription>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {
  PageHeaderRoot,
  PageHeaderToolbar,
  PageHeaderActions,
  PageHeaderTitle,
  PageHeaderDescription,
};

export type {
  PageHeaderRootProps,
  PageHeaderRootProps as PageHeaderProps,
  PageHeaderToolbarProps,
  PageHeaderActionsProps,
  PageHeaderTitleProps,
  PageHeaderDescriptionProps,
} from "./page-header";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {pageHeaderVariants} from "@heroui/styles";

export type {PageHeaderVariants} from "@heroui/styles";
