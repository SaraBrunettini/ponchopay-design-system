import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const bottomNavVariants = tv({
  slots: {
    action: "bottom-nav__item bottom-nav__item--action",
    base: "bottom-nav",
    item: "bottom-nav__item",
  },
});

export type BottomNavVariants = VariantProps<typeof bottomNavVariants>;
