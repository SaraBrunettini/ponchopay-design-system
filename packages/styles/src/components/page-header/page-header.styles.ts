import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const pageHeaderVariants = tv({
  slots: {
    actions: "page-header__actions",
    base: "page-header",
    description: "page-header__description",
    title: "page-header__title",
    toolbar: "page-header__toolbar",
  },
});

export type PageHeaderVariants = VariantProps<typeof pageHeaderVariants>;
