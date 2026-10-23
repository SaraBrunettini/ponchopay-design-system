import type {ComponentProps} from "react";

import {PageContent, PageFooter, PageHeaderSlot, PageRoot} from "./page";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Page = Object.assign(PageRoot, {
  Content: PageContent,
  Footer: PageFooter,
  Header: PageHeaderSlot,
  Root: PageRoot,
});

export type Page = {
  Props: ComponentProps<typeof PageRoot>;
  RootProps: ComponentProps<typeof PageRoot>;
  HeaderProps: ComponentProps<typeof PageHeaderSlot>;
  ContentProps: ComponentProps<typeof PageContent>;
  FooterProps: ComponentProps<typeof PageFooter>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {PageRoot, PageHeaderSlot, PageContent, PageFooter};

export type {
  PageRootProps,
  PageRootProps as PageProps,
  PageHeaderSlotProps,
  PageContentProps,
  PageFooterProps,
} from "./page";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {pageVariants} from "@heroui/styles";

export type {PageVariants} from "@heroui/styles";
