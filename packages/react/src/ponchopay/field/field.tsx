"use client";

import type {FieldVariants} from "@heroui/styles";
import type {ComponentPropsWithRef} from "react";

import {fieldVariants} from "@heroui/styles";
import React, {createContext, useContext} from "react";

import {dataAttr} from "../../utils/assertion";

/* -------------------------------------------------------------------------------------------------
 * Field Context
 * -----------------------------------------------------------------------------------------------*/
type FieldContext = {
  slots?: ReturnType<typeof fieldVariants>;
};

const FieldContext = createContext<FieldContext>({});

const useSlots = () => useContext(FieldContext).slots ?? fieldVariants();

/* -------------------------------------------------------------------------------------------------
 * Field Root
 * -----------------------------------------------------------------------------------------------*/
interface FieldRootProps extends ComponentPropsWithRef<"div">, FieldVariants {
  /** Fades the label; also disable the control itself. */
  isDisabled?: boolean;
  /** Turns the label red; also mark the control invalid. */
  isInvalid?: boolean;
}

const FieldRoot = ({
  children,
  className,
  isDisabled,
  isInvalid,
  orientation,
  ...props
}: FieldRootProps) => {
  const slots = React.useMemo(() => fieldVariants({orientation}), [orientation]);

  return (
    <FieldContext.Provider value={{slots}}>
      <div
        className={slots.base({className})}
        data-disabled={dataAttr(isDisabled)}
        data-invalid={dataAttr(isInvalid)}
        data-orientation={orientation ?? "vertical"}
        data-slot="field"
        role="group"
        {...props}
      >
        {children}
      </div>
    </FieldContext.Provider>
  );
};

/* -------------------------------------------------------------------------------------------------
 * Field Group
 * -----------------------------------------------------------------------------------------------*/
interface FieldStackProps extends ComponentPropsWithRef<"div"> {}

const FieldStack = ({className, ...props}: FieldStackProps) => {
  const slots = useSlots();

  return <div className={slots.group({className})} data-slot="field-group" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Field Content
 * -----------------------------------------------------------------------------------------------*/
interface FieldContentProps extends ComponentPropsWithRef<"div"> {}

const FieldContent = ({className, ...props}: FieldContentProps) => {
  const slots = useSlots();

  return <div className={slots.content({className})} data-slot="field-content" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Field Title
 * -----------------------------------------------------------------------------------------------*/
interface FieldTitleProps extends ComponentPropsWithRef<"span"> {}

const FieldTitle = ({className, ...props}: FieldTitleProps) => {
  const slots = useSlots();

  return <span className={slots.title({className})} data-slot="field-title" {...props} />;
};

/* -------------------------------------------------------------------------------------------------
 * Field Card (choice card around a Radio or Checkbox)
 * -----------------------------------------------------------------------------------------------*/
interface FieldCardProps extends ComponentPropsWithRef<"div"> {
  /** Fades the whole card. Also disable the Radio/Checkbox inside. */
  isDisabled?: boolean;
  /** Forces the selected look and open reveal; normally it follows the header control. */
  isSelected?: boolean;
}

const FieldCard = ({className, isDisabled, isSelected, ...props}: FieldCardProps) => {
  const slots = useSlots();

  return (
    <div
      className={slots.card({className})}
      data-disabled={dataAttr(isDisabled)}
      data-selected={dataAttr(isSelected)}
      data-slot="field-card"
      {...props}
    />
  );
};

/* -------------------------------------------------------------------------------------------------
 * Field Reveal (shown only while the card's header control is selected)
 * -----------------------------------------------------------------------------------------------*/
interface FieldRevealProps extends ComponentPropsWithRef<"div"> {}

const FieldReveal = ({className, ...props}: FieldRevealProps) => {
  const slots = useSlots();

  return <div className={slots.reveal({className})} data-slot="field-reveal" {...props} />;
};

FieldRoot.displayName = "HeroUI.Field";
FieldStack.displayName = "HeroUI.Field.Group";
FieldContent.displayName = "HeroUI.Field.Content";
FieldTitle.displayName = "HeroUI.Field.Title";
FieldCard.displayName = "HeroUI.Field.Card";
FieldReveal.displayName = "HeroUI.Field.Reveal";

export {FieldRoot, FieldStack, FieldContent, FieldTitle, FieldCard, FieldReveal};
export type {
  FieldRootProps,
  FieldStackProps,
  FieldContentProps,
  FieldTitleProps,
  FieldCardProps,
  FieldRevealProps,
};
