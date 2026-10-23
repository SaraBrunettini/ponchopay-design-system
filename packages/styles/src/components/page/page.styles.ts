import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const pageVariants = tv({
  defaultVariants: {
    variant: "default",
  },
  slots: {
    base: "page",
    content: "page__content",
    footer: "page__footer",
    header: "page__header",
  },
  variants: {
    variant: {
      default: {},
      surface: {
        base: "page--surface",
      },
    },
  },
});

export type PageVariants = VariantProps<typeof pageVariants>;
