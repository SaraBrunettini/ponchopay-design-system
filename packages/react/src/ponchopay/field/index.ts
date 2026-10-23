import type {ComponentProps} from "react";

import {FieldCard, FieldContent, FieldReveal, FieldRoot, FieldStack, FieldTitle} from "./field";

/* -------------------------------------------------------------------------------------------------
 * Compound Component
 * -----------------------------------------------------------------------------------------------*/
export const Field = Object.assign(FieldRoot, {
  Card: FieldCard,
  Content: FieldContent,
  Group: FieldStack,
  Reveal: FieldReveal,
  Root: FieldRoot,
  Title: FieldTitle,
});

export type Field = {
  Props: ComponentProps<typeof FieldRoot>;
  RootProps: ComponentProps<typeof FieldRoot>;
  GroupProps: ComponentProps<typeof FieldStack>;
  ContentProps: ComponentProps<typeof FieldContent>;
  TitleProps: ComponentProps<typeof FieldTitle>;
  CardProps: ComponentProps<typeof FieldCard>;
  RevealProps: ComponentProps<typeof FieldReveal>;
};

/* -------------------------------------------------------------------------------------------------
 * Named Component
 * -----------------------------------------------------------------------------------------------*/
// `FieldGroup` is taken by Fieldset.Group, so the stack is named FieldStack (use it as Field.Group).
export {FieldRoot, FieldStack, FieldContent, FieldTitle, FieldCard, FieldReveal};

export type {
  FieldRootProps,
  FieldRootProps as FieldProps,
  FieldStackProps,
  FieldContentProps,
  FieldTitleProps,
  FieldCardProps,
  FieldRevealProps,
} from "./field";

/* -------------------------------------------------------------------------------------------------
 * Variants
 * -----------------------------------------------------------------------------------------------*/
export {fieldVariants} from "@heroui/styles";

export type {FieldVariants} from "@heroui/styles";
