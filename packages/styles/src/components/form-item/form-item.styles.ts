import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const formItemVariants = tv({
  slots: {
    base: "form-item",
    message: "form-item__message",
  },
});

export type FormItemVariants = VariantProps<typeof formItemVariants>;
