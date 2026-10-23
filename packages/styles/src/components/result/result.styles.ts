import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const resultVariants = tv({
  defaultVariants: {
    status: "success",
  },
  slots: {
    actions: "result__actions",
    base: "result",
    description: "result__description",
    icon: "result__icon",
    title: "result__title",
  },
  variants: {
    status: {
      danger: {
        base: "result--danger",
      },
      info: {
        base: "result--info",
      },
      success: {
        base: "result--success",
      },
      warning: {
        base: "result--warning",
      },
    },
  },
});

export type ResultVariants = VariantProps<typeof resultVariants>;
