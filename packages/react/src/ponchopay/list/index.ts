import type {ComponentProps} from "react";

import {
  ListContent,
  ListDescription,
  ListEnd,
  ListHeading,
  ListItem,
  ListMedia,
  ListRoot,
  ListTitle,
} from "./list";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const List = Object.assign(ListRoot, {
  Content: ListContent,
  Description: ListDescription,
  End: ListEnd,
  Heading: ListHeading,
  Item: ListItem,
  Media: ListMedia,
  Root: ListRoot,
  Title: ListTitle,
});

export type List = {
  Props: ComponentProps<typeof ListRoot>;
  RootProps: ComponentProps<typeof ListRoot>;
  HeadingProps: ComponentProps<typeof ListHeading>;
  ItemProps: ComponentProps<typeof ListItem>;
  MediaProps: ComponentProps<typeof ListMedia>;
  ContentProps: ComponentProps<typeof ListContent>;
  TitleProps: ComponentProps<typeof ListTitle>;
  DescriptionProps: ComponentProps<typeof ListDescription>;
  EndProps: ComponentProps<typeof ListEnd>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {
  ListRoot,
  ListHeading,
  ListItem,
  ListMedia,
  ListContent,
  ListTitle,
  ListDescription,
  ListEnd,
};

export type {
  ListRootProps,
  ListRootProps as ListProps,
  ListHeadingProps,
  ListItemProps,
  ListMediaProps,
  ListContentProps,
  ListTitleProps,
  ListDescriptionProps,
  ListEndProps,
} from "./list";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {listVariants} from "@heroui/styles";

export type {ListVariants} from "@heroui/styles";
