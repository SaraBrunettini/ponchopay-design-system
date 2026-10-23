import type {ComponentProps} from "react";

import {FormItemMessage, FormItemRoot} from "./form-item";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const FormItem = Object.assign(FormItemRoot, {
  Message: FormItemMessage,
  Root: FormItemRoot,
});

export type FormItem = {
  Props: ComponentProps<typeof FormItemRoot>;
  RootProps: ComponentProps<typeof FormItemRoot>;
  MessageProps: ComponentProps<typeof FormItemMessage>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
export {FormItemRoot, FormItemMessage};

export type {
  FormItemRootProps,
  FormItemRootProps as FormItemProps,
  FormItemMessageProps,
} from "./form-item";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {formItemVariants} from "@heroui/styles";

export type {FormItemVariants} from "@heroui/styles";
