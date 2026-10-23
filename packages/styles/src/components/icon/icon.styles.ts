import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const iconVariants = tv({
  base: "icon",
  variants: {
    spin: {
      true: "icon--spin",
    },
  },
});

export type IconVariants = VariantProps<typeof iconVariants>;
