import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const topBarVariants = tv({
  slots: {
    base: "top-bar",
    content: "top-bar__content",
    end: "top-bar__end",
    start: "top-bar__start",
    title: "top-bar__title",
  },
});

export type TopBarVariants = VariantProps<typeof topBarVariants>;
