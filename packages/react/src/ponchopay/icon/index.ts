import type {ComponentProps} from "react";

import {IconRoot} from "./icon";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Icon = Object.assign(IconRoot, {
  Root: IconRoot,
});

export type Icon = {
  Props: ComponentProps<typeof IconRoot>;
  RootProps: ComponentProps<typeof IconRoot>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {IconRoot};

export type {IconRootProps, IconRootProps as IconProps} from "./icon";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {iconVariants} from "@heroui/styles";

export type {IconVariants} from "@heroui/styles";
