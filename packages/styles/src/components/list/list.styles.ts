import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const listVariants = tv({
  defaultVariants: {
    isInteractive: false,
  },
  slots: {
    base: "list",
    content: "list__content",
    description: "list__description",
    end: "list__end",
    heading: "list__heading",
    item: "list__item",
    media: "list__media",
    title: "list__title",
  },
  variants: {
    isInteractive: {
      false: {},
      true: {
        item: "list__item--interactive",
      },
    },
  },
});

export type ListVariants = VariantProps<typeof listVariants>;
