import type {VariantProps} from "tailwind-variants";

import {tv} from "tailwind-variants";

export const logoVariants = tv({
  base: "logo",
  defaultVariants: {
    theme: "auto",
    variant: "logo",
  },
  variants: {
    theme: {
      auto: "logo--auto",
      dark: "logo--dark",
      light: "logo--light",
    },
    variant: {
      logo: "",
      symbol: "logo--symbol",
    },
  },
});

export type LogoVariants = VariantProps<typeof logoVariants>;
