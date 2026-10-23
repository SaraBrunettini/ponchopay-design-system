import type {ComponentProps} from "react";

import {BottomNavAction, BottomNavItem, BottomNavRoot} from "./bottom-nav";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const BottomNav = Object.assign(BottomNavRoot, {
  Action: BottomNavAction,
  Item: BottomNavItem,
  Root: BottomNavRoot,
});

export type BottomNav = {
  Props: ComponentProps<typeof BottomNavRoot>;
  RootProps: ComponentProps<typeof BottomNavRoot>;
  ItemProps: ComponentProps<typeof BottomNavItem>;
  ActionProps: ComponentProps<typeof BottomNavAction>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {BottomNavRoot, BottomNavItem, BottomNavAction};

export type {
  BottomNavRootProps,
  BottomNavRootProps as BottomNavProps,
  BottomNavItemProps,
  BottomNavActionProps,
} from "./bottom-nav";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {bottomNavVariants} from "@heroui/styles";

export type {BottomNavVariants} from "@heroui/styles";
