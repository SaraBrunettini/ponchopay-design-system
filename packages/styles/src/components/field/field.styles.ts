import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const fieldVariants = tv({
  defaultVariants: {
    orientation: "vertical",
  },
  slots: {
    base: "field",
    card: "field-card",
    content: "field-content",
    group: "field-group",
    reveal: "field-reveal",
    title: "field-title",
  },
  variants: {
    orientation: {
      horizontal: {
        base: "field--horizontal",
      },
      vertical: {},
    },
  },
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
