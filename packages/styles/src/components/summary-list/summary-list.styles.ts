import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const summaryListVariants = tv({
  defaultVariants: {
    isTotal: false,
  },
  slots: {
    base: "summary-list",
    label: "summary-list__label",
    row: "summary-list__row",
    value: "summary-list__value",
  },
  variants: {
    isTotal: {
      false: {},
      true: {
        row: "summary-list__row--total",
      },
    },
  },
});

export type SummaryListVariants = VariantProps<typeof summaryListVariants>;
