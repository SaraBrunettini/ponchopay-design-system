import type {ComponentProps} from "react";

import {LogoRoot} from "./logo";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Logo = Object.assign(LogoRoot, {
  Root: LogoRoot,
});

export type Logo = {
  Props: ComponentProps<typeof LogoRoot>;
  RootProps: ComponentProps<typeof LogoRoot>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {LogoRoot};

export type {LogoRootProps, LogoRootProps as LogoProps} from "./logo";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {logoVariants} from "@heroui/styles";

export type {LogoVariants} from "@heroui/styles";
