import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const actionBarVariants = tv({
  base: "action-bar",
  defaultVariants: {
    orientation: "horizontal",
  },
  variants: {
    orientation: {
      horizontal: "",
      vertical: "action-bar--vertical",
    },
  },
});

export type ActionBarVariants = VariantProps<typeof actionBarVariants>;
